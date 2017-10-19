# Getting Started With Ionic 2 and RHMAP

### Index


 * **[Creating a Mobile App](#clien)**
 * **[Creating a Cloud App](#cloud)**
 * **[Working in Local](#local)**
 * **[Push Notification](#push)**
 * **[Issues and Workarounds](#issues)**

<a name="client"></a>
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

![client app](https://github.com/feedhenry-staff/ionic2-hello/blob/master/images/home.png)


<a name="cloud"></a>
## Cloud Application

Now that we have our client Application is time to create a cloud app to talk with, to do this we just need to go to our project and create a new cloud app by clicking the add button.

- In the next screen select Cloud App, choose a name.
- Once the cloud app is created go to the deployment area and change the version of node to 6.9.1/Latest.
- Click deploy.


<a name="local"></a>
### Working with your server in local.


#### Databases  
- First of all a typical RHMAP cloud app has integration with two services by default to make things easier. In one hand we have [Mongodb](https://www.mongodb.com),  the other is a in-memory store solution called [Redis](https://redis.io/).

- To solve facilitate spinning up the instances of this two services in local we are going to use [Docker](https://www.docker.com).  

  - First of all install Docker in your machine.

  - My approach to simplify the process of boot up instances is to create a small script in my .profile, so add this content at the end of your file, something like this:

```bash
# At the end of your .profile or .bash_profile
# you can group this functions into one if you like.

function new_mongo {
  docker run -d --name mongodb -p  27017:27017 mongo 
}

function new_redis {
  docker run -d  --name redis  -p 26379:6379 redis:3.2
}

function stop_mongo {
  docker stop mongodb
  docker rm mongodb
}

function stop_redis {
  docker stop redis
  docker rm redis 
}

```
- After doing this just do  ```bash source .profile  ```

- Now you can start a Mongodb container by just doing.

```bash
$ new_mongo
$ new_redis
```

#### Working

Just do a git clone of your cloud project.

```bash
$ git clone git@git.remote:location.com/your-repo.git  
$ npm install
$ grunt serve:local
```

**Node 6 Warning**
If you are using node6.x in your local you need to make sure you update the mbass-api to version >8.

```bash
# adding this to your package.json "fh-mbaas-api": "^8.0.2",
$ npm remove fh-mbaas-api
$ npm install fh-mbaas-api
```

<a name="push"></a>
#### Push Notification

##### Android

First you need to register your application to [Firebase](https://console.firebase.google.com/u/0/) , choose a name and in the project-id you to set the id of your app you can find it in your [config.xml](https://github.com/feedhenry-staff/ionic2-hello/blob/master/config.xml#L2) widget id="your.app.com".

After you register your app you should get back a google-service.json file you need to download that file to your root folder.

Now you need to modify your [copy.config.js](https://github.com/feedhenry-staff/ionic2-hello/blob/master/copy.config.js#L7) , so it get automatically inserted in the www/ folder, then run ionic build.

```bash
  $ ionic build
```

##### Plugin

**Mac Only**:
Make sure Ruby and Gem are up to date:

```bash
gem update --system
gem update bundler
```

Next step is to download [aerogear-push-plugin](https://www.npmjs.com/package/aerogear-cordova-push).

```bash
  $ cordova plugin add https://github.com/aerogear/aerogear-cordova-push.git --save
```

##### RHMAP

Go to your Client App->Push->Android and fill the form using the information from firebase->cloud messaging section.

Here is how to map the information between the two places. 

  ```bash

    RHMAP                 FIREBASE
    Service Key   ==>     Legacy Server Key
    Sender ID     ==>     Server ID
  ```


##### Code Example 

You can find an [example class](https://gist.github.com/cesarvr/2e32deac4b0afcfb71ab818d264b75f2) here, its ready to subscribe to UPS and handle the states. 


[Documentation](https://access.redhat.com/documentation/en-us/red_hat_mobile_application_platform/4.3/html/cloud_api/fh-push).


<a name="issues"></a>
### Issues RHMAP 3.18.2

 - Fixing visualization in RHMAP preview
  - Comment the line ``` #/www ``` from .gitignore

 - Fixing incompatibility with RHMAP build-farm
  - Downgrade the default version of ionic2 cordova-android plugin.
  - Instructions:

   ```bash
     $ ionic cordova platform remove android
     $ ionic cordova platform add cordova-android@5.2.0  
   ```

 - My fhconfig.js is not being added to the www/ folder.
   - You need to extend the Ionic 2 [Builder scripts](https://ionicframework.com/docs/developer-resources/app-scripts/), this demo includes the script to achieve that copy.config.js.
 

 - After building my app in the platform, the app can't find the cordova plugins. 
   - This happens when you use https/git repos as a source for the plugin, to solve this you need to push the ``` #/plugins ```  to your RHMAP/Project repo.  
 




