# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


# Getting Started with Create React App  -- Docker setup

prerequisite Make Sure the docker is stet up and working on the system. 

Run the below command to Run the React app using docker

# Open a terminal and navigate to your cloned folder:
### `cd take-home`

# Build the Docker image using the docker build command:
### `docker build -t take-home .`  - This creates a Docker image named take-home

# Run the Docker Container
### `docker run -d -p 3000:3000 take-home`

# Run the Docker Container - giving specified container name  (same command with the conatiner name - optional)

### `docker run -d -p 8080:80 --name take-home-container take-home` - (optional)


### `curl localhost:3000 ` - (optional)


# To stop the container:
### `docker stop <container-name>`

# To remove the container:
### `docker rm <container-name>`


Pushing image to dockerhub

### `docker tag take-home:latest <docker-hub-username>/<repo-name>`
### `docker push <docker-hub-username>/take-home:latest`






