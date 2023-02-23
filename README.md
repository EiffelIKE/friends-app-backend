# Friends-App Backend

This repo is a simple based backend with NodeJS and Express, created with the main purpose of sharing it with my dev friends who are inproving skills on React rn, and to inprove the responses of other 3rd partys API's.


### Repo arquitecture
The ./api folder contains the API service, and the .api/components contains the routes to match CRUD requests.

The ./network folder contains all the API response management

### How to install and set up your development enviroment

After cloning this repo, you must : 

```
> yarn install
```
or:

```
> npm install

```
I strongly recomend to install nodemon globally to start the API serve, but isn't required:

```
> yarn global add nodemon
```
or:
```
> npm install -g nodemon

```

### Commands availables

To start your local service, run `yarn start` . This will start node at api/index.js, if nodemon is installed, run `yarn nodemon`.


**_Note_**: There is no real-time db on this API, just servin JSON's, mutations request on the db will be restored afther restart the server
