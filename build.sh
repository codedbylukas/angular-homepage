#!/bin/bash

ng test
ng build 
rm -rf ./cordova/www/*
cp -r ./dist/Angular_personal_homepage/browser/* ./cordova/www/
cd cordova
cordova platform rm android
cordova platform add android
cordova build android 
cordova build android --release
cd .. 
cp ./cordova/platforms/android/app/build/outputs/apk/debug/app-debug.apk ./for_installation/android/app-debug.apk 
cp ./cordova/platforms/android/app/build/outputs/bundle/release/app-release.aab ./for_installation/android/app-release.aab
git add . 
git commit -m "build android app"
git push

