# Getting Started With Ionic2 and RHMAP

## Creating a mobile app

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



## Pushing the project to the platform 

- Create/Enter to your project in RHMAP and click the plus symbol in Apps to add a new client App. 

- Choose import existing app, choose Cordova type and pick write the name at the last step.

- Import from: Bare Repo and select "Start from Scratch" option. 

- Now go to your project folder in your local machine and add the remote that will presented in step two of that screen. 


   ```bash
   git init #initialize the git repository if not done before. 
   git add . 
   git commit -m 'Initial'
   git remote add feedhenry git@git.remote:location.com/your-repo.git 
   git push feedhenry master 
   ```


- Click next and your client should be imported successfully. 





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

![client app](https://github.com/feedhenry-staff/ionic2-hello/blob/master/images/home.png)

