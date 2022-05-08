#!/bin/bash

# Required jq to be installed with
# pacman -S jq arandr

# Move to layout.sh exported with arandr
SCREENS=("DP-3" "DP-1" "DP-5")
SCREEN_NUMBER=${#SCREENS[@]}

# Set command from current WM
MSG_COMMAND=i3-msg
if [[ $DESKTOP_SESSION =~ ^sway$ ]]; then
	MSG_COMMAND=swaymsg
fi

# Get current workspace output (Screen)
CURRENT_WORKSPACE=$($MSG_COMMAND -t get_workspaces \
	| jq '.[] | select(.visible == true and .focused == true) | .output' \
	| sed "s/\"\|'//g")


# Get screen index from screens list and current workspace
SCREEN_INDEX=-1
for val in ${!SCREENS[@]}
do
	if [[ "${SCREENS[val]}" == "$CURRENT_WORKSPACE" ]]; then
		SCREEN_INDEX=$val;
		break;
	fi
done

DESIRED_WORKSPACE=$(($SCREEN_INDEX * 10 + $1))

# To run in DRY RUN uncomment line in below
# MSG_COMMAND=echo
if [[ "$2" == "move" ]]; then
	$MSG_COMMAND move container to workspace number $DESIRED_WORKSPACE
else
	$MSG_COMMAND workspace number $DESIRED_WORKSPACE
fi
