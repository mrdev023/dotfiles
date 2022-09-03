#!/bin/bash

# Required jq to be installed with
# pacman -S jq arandr

source ~/.config/i3/common_var.sh
source $GENERATED_MONITOR_CONF

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
	# notify-send "move to $DESIRED_WORKSPACE"
	$MSG_COMMAND move container to workspace number $DESIRED_WORKSPACE
else
	# notify-send "switch to $DESIRED_WORKSPACE"
	$MSG_COMMAND workspace number $DESIRED_WORKSPACE
fi
