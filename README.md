# Small node app to test Docker

## Description
this is a small node app that connects to sqlite database
sqlite data is a small file stored in the same local host machine
the goal of this project is to setup docker for this project.

we will use bind mount for both the source code and the database
so when we change the code or database, the app will change when we open browser

## NOTE:
draft version bc I'm running on my windows machine

## Setup
this will create our node_modules, remember that we are using bind, so the container will see the same thing in the host anyway
```bash
yarn
```

now we use this command to issue a running container
```bash
./build.sh
```

now go to `127.0.0.1:3000` and see what happens

### docker explain

```
the philosophy is we store data in the host machine, since container have their
own session, will deleted when teared down create a connection between host's
filesystem to container some kind of logical connection and each newly created
container can see the same files because it is stored in the host machine
loose-couple: docker will manage the host filesystem connection by default, so
when you deploy to another machine, docker will handle that and it will be 
```
