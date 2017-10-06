# Getting Started With Ionic2 and RHMAP

## Creating a mobile app


## How to use this templat### With the Ionic CLI:

In this example we are going to use ionic tabs template. 

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

This will create a empty project myTabs with a tabs based mobile application ionic template.  

## Run in simulator or mobile device. 

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add cordova-android@5.2.0 #compatible with MAP-3.18 & Android Studio .
$ ionic cordova platform add ios

$ ionic cordova run ios
$ ionic cordova run android #Android
```


### Issues RHMAP 3.18.2

 - Fixing visualization in RHMAP preview
   - comment the line ``` #/www ``` from .gitignore

 - Fixing incompatibility with RHMAP build-farm
   - Downgrade the default version of ionic2 cordova-android plugin.
   - Instructions:
   ```bash
     $ ionic cordova platform remove android
     $ ionic cordova platform add cordova-android@5.2.0  
   ```


