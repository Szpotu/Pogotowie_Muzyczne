#!/bin/bash

# randomly choose wallpaper
pic=(/home/szymon/Pobrane/Tapeta.jpg)

gsettings set org.gnome.desktop.background picture-uri \
        "file://${pic[RANDOM % ${#pic[@]}]}"