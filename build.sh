#!/bin/bash

# Angular things
ng test --no-watch
sleep 4
ng build 

# cordova things
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

# Add git 
git add . 
git commit -m "build android app"

# electron 
cp -r ./dist/Angular_personal_homepage/browser/* ./electron/src/
cd electron
rm -rf ./out/
# Linux             
npm run make -- --platform=linux
# Windows
npm run make -- --platform=win32 --targets=@electron-forge/maker-zip
# copy
cd ..
cp ./electron/out/make/deb/x64/angular-homepage_1.0.0_amd64.deb ./for_installation/Linux/x64 
cp ./electron/out/make/zip/win32/x64/Angular\ Homepage-win32-x64-1.0.0.zip for_installation/win/32 

#git
git add .
git commit -m "electron"
git pull --rebase
git push

