# Angular-Front-seed-v9 

## Prequisites (Development):

| Module      | Version |
| ----------- | ------- |
| Node        | 12.16.0 |
| Npm         | 6.10.1  |
| Angular-cli | 9.1.4   |
| Angular     | 9.1.4   |


------------ 

##### Take Clone of project

> $ git clone -b dev https://gitlab.com/custom-seed/angular-front-seed-v9.git  Angular-Front-seed-v9

------------ 

##### Development Process

> $ npm install

> $ ng serve

> $ npm run build

------------ 

##### Process to Install Sonarqube while development

> Download Java Version 11

> Download SonarQuebe from https://www.sonarqube.org/downloads/

> Please add below line at end of the file soanrqube-7.9.1 > conf > sonar.properties
  #sonar.host.url=http://localhost:9000

> Install sonarqube-scanner from https://www.npmjs.com/package/sonarqube-scanner

> Follow Steps given in this link https://yuriburger.net/2017/09/27/getting-started-with-sonarqube-and-typescript/ Except Rules

> Change sonar.projectKey and sonar.projectName in sonar-project.properties file in your project

> Command to start sonarquebe serving on localhost:9000
  > For Mac os
  $ sonarqube-7.9.1/bin/macosx-universal-64/sonar.sh start
  > For Windows
  $ sonarqube-7.9.1/bin/windows-x86-64/StartSonar.bat start

> Start analysis of project with following command
  $ sonar-scanner

------------

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

------------ 

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

------------ 

### Deployment Process

> $ git clone -b staging https://gitlab.com/custom-seed/angular-front-seed-v9.git  Angular-Front-seed-v9

> $ npm install

> $ npm run staging

> "dist" folder will be created.

> Open AWS EC2 Server & run start pm2 instance:

> $ pm2 start dist/server.js --name="ng9FrontSeed"

------------


### Create Build according to environments

``` bash
# serve with hot reload at localhost:4200.
$ ng serve

# build for staging with minification
$ npm run staging

# build for production with minification
$ npm run build

---------------
