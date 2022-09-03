#!/bin/bash

source ~/.config/i3/common_var.sh
source $GENERATED_MONITOR_CONF

$MONITOR_CONF # Apply configured layout


function process_workspace () {
	WORKSPACE_NUMBER=$(echo $1 | cut -d ',' -f1)
	OUTPUT_NAME=$(echo $1 | cut -d ',' -f2)

	NEW_OUTPUT_NAME=${SCREENS[$(($WORKSPACE_NUMBER / 10))]}

	if [[ "$OUTPUT_NAME" != "$NEW_OUTPUT_NAME" ]]; then
		echo "WORKSPACE_NUMBER: $WORKSPACE_NUMBER | OUTPUT: $OUTPUT_NAME | NEW_OUTPUT: $NEW_OUTPUT_NAME"
		echo move workspace number  $WORKSPACE_NUMBER to output $NEW_OUTPUT_NAME
		$MSG_COMMAND move workspace number \"$WORKSPACE_NUMBER\" to output \"$NEW_OUTPUT_NAME\"
	fi
}

function reconfigure_workspaces () {
	# Create new workspace for multiple screen at first index of relative index
	# Ex: SCREEN 2 => WORKSPACE NUMBER  => 20
	for i in $(seq 2 $SCREEN_NUMBER); do
		INDEX=$(($i - 1))
		SCREEN=${SCREENS[$INDEX]}
		echo workspace number $(($INDEX * 10)) to output $SCREEN
		$MSG_COMMAND workspace number \"$(($INDEX * 10))\" to output \"$SCREEN\"
	done

	$MSG_COMMAND -t get_workspaces \
		| jq -c '.[] | [.num, .output] | @csv' \
		| sed 's/"//g' | sed 's/\\//g' |
		while IFS=$'\n' read -r c; do
			process_workspace $c
		done
}

reconfigure_workspaces

