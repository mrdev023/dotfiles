#!/bin/bash

source ~/.config/i3/common_var.sh
source $GENERATED_MONITOR_CONF

$MONITOR_CONF # Apply configured layout

# To launch as dry mode. Uncomment line in below
# MSG_COMMAND=echo

for i in $(seq 1 $SCREEN_NUMBER); do
	INDEX=$(($i - 1))
	SCREEN=${SCREENS[$INDEX]}
	for j in $(seq 1 10); do
		$MSG_COMMAND move workspace number $(($INDEX * 10 + $j)) to output $SCREEN
	done
done
