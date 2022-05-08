#!/bin/bash

MONITOR_CONF=~/.screenlayout/monitor.sh
GENERATED_MONITOR_CONF=~/.screenlayout/generated_monitor.sh

# Set command from current VM
MSG_COMMAND=i3-msg
if [[ $DESKTOP_SESSION =~ ^sway$ ]]; then
	MSG_COMMAND=swaymsg
fi

