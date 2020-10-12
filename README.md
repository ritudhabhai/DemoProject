# Demo Project

## Prerequisite (Development)

| Module      | Version |
| ----------- | ------- |
| Node        | 12.16.0 |
| Npm         | 6.13.4  |
| Angular-cli | 10.1.4   |
| Angular     | 10.1.4   |


------------ 


## Running project in local

``` bash
$ npm install

$ ng serve

$ npm run build
```

------------ 

## Code Quality Check 

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

> Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

------------ 

## Running end-to-end tests

> Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

------------ 

## Deployment in Staging Server

``` bash
$ git clone -b <branchName> <gitUrl> <projectName>

$ npm install

$ npm run staging

"dist" folder will be created.

Open Server & run start pm2 instance:

$ pm2 start dist/server/main.js --name="<instance_name>"
```

------------

## Create Build For Different Environments

``` bash
# serve with host reload at localhost:4200.
$ ng serve

# build for staging with minification
$ npm run staging

# build for production with minification
$ npm run build
```
------------


## Start pm2 Instance

``` bash
$ pm2 start server.js --name="<instance_name>" (for creating)

$ pm2 restart <instance_id> or <instance_name>

$ pm2 stop <instance_id> or <instance_name>

$ pm2 delete <instance_id> or <instance_name>

$ pm2 logs <instance_id> or <instance_id> (to check logs or errors)

$ pm2 logs <instance_id> --lines=100 (to check particular lines of previous logs)

```
------------

## Deployment With CI/CD
> Coming Soon

## Angular Coding Standards

> You can get more information on angular coding stantdards from [here](https://docs.google.com/document/d/17amkymvitTGHyf9EwQtpXLbP5XD5TncjJ4RTWnj6-_w/edit).

## Directory Structure

```
Angular-Front-seed-v9/
|-- e2e/
|-- src/
    |-- app/     
        |-- common/
            |-- constants/
            |-- services/
            |-- pipes/
        |-- modules/
        |-- public/
        |-- shared/
            |-- components/
            |-- modals/
            |-- directives/
    |-- assets/
    |-- environments/
    |-- index.html
    |-- main.ts
    |-- main.server.ts
    |-- ...
|-- .angular.json
|-- ...
|-- package.json
|-- server.ts
|-- ...
```

------------
