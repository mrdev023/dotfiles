#!/bin/bash

source ~/.config/i3/common_var.sh

function set_configuration () {
	# Display message and wait press any key with -n 1
	read -n 1 -r -s -p $"Save configuration in $MONITOR_CONF.\nPress any key to continue"

	# Ask set monitor configuration
	arandr

	$MONITOR_CONF # Apply configuration
}

# set_configuration

# SCREENS => HashMap | Key => Output name | Value => Position X
# SCREENS EX:
# SCREENS[DP-1]=1920
# SCREENS[DP-2]=0
declare -A SCREENS
CURRENT_SCREEN="na"
for line in $(xrandr --listmonitors); do
	# Return all line with:
	# OUTPUT NAME: +DP-3
	# DETAILS: 1920/510x1080/290+0+0
	if [[ $line == *"+"* ]]; then
		INFO=$(echo $line | cut -d '+' -f 2)
		if [[ $CURRENT_SCREEN == "na" ]]; then
			CURRENT_SCREEN=$INFO
			echo "SET CURRENT_SCREEN : $CURRENT_SCREEN"
		else
			SCREENS["$CURRENT_SCREEN"]=$INFO
			echo "ADD SCREEN : $CURRENT_SCREEN -> $INFO"
			CURRENT_SCREEN="na"
		fi
	fi	
done

# SCREENS ORDER BY POSITION
# FINAL RESULT SCREENS=(DP-2 DP-1)
ORDERED_SCREENS=($(for x in ${!SCREENS[@]}; do echo $x; done | sort -r | sed 's/\n/ /g'))

EXPORT_SCREENS="SCREENS=("
for screen in ${!ORDERED_SCREENS[@]}; do
	EXPORT_SCREENS+="\"${ORDERED_SCREENS[$screen]}\" "
done
EXPORT_SCREENS="${EXPORT_SCREENS:0:-1})" # Remove last space

echo "#!/bin/bash" > $GENERATED_MONITOR_CONF
echo $EXPORT_SCREENS >> $GENERATED_MONITOR_CONF
