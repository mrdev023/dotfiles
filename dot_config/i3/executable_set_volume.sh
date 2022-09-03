#!/bin/bash
pactl set-sink-volume @DEFAULT_SINK@ $1 && $send_volume_notif notify-send "Volume" -h int:value:"$(pactl get-sink-volume @DEFAULT_SINK@ | cut -d ' ' -f6 | cut -d '%' -f1)"
