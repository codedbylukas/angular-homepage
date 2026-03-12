#!/bin/bash

ng build 
cd cordova
cordova platform rm android
cordova platform add android
cordova build android 
cordova build android --release
cd .. 
cp ./cordova/platforms/android/app/build/outputs/apk/debug/app-debug.apk ./for_installation/android/app-debug.apk 
cp ./cordova/platforms/android/app/build/outputs/bundle/release/app-release.aab ./for_installation/android/app-release.aab
