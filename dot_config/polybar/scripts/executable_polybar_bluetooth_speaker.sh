#!/bin/bash
# Bluetooth speaker indicator for polybar.
# Change the MAC address to the MAC of your speaker, after it is paired.
# I cannot guarantee it will work for you. This script does nothing to
# actually connect to the speaker, it only displays a status icon.
#
# Author: machaerus
# https://gitlab.com/machaerus

source ~/.config/polybar/scripts/colors.sh

bluetooth_speaker() {
	BT_DEVICE="1C:E6:1D:EF:0A:76"
	SPEAKER_CONNECTED=$(bt-device -i $BT_DEVICE | grep Connected | xargs | cut -d ' ' -f 2)
	if [ "$SPEAKER_CONNECTED" -eq 1 ]; then
		speaker_indicator="${faded_green}${RESET}"
	else
		speaker_indicator="${dark0_soft}${RESET}"
	fi
	echo $speaker_indicator
}
# bluetooth_speaker
