#!/usr/bin/bash

# adb devices ---> device ID
# App Package ID ---> Open app, run >>> adb shell "dumpsys activity activities | grep mResumedActivity | cut -d "{" -f2 | cut -d ' ' -f3 | cut -d "/" -f1"

maestro --device "[device ID]" test -e APPID=[App Package ID] -e ENV=UAT -e PRODUCT=MAPP run.yaml --debug-output report