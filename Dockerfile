# Use the official Node.js 18 Alpine image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /src

# Copy the application code to the working directory
COPY package.json yarn.lock /src/

# Install dependencies
RUN yarn

# Copy the application code to the working directory
COPY . .

# Start the application with the "yarn dev" command
CMD ["yarn", "dev"]

# Expose port 3000 for the application
EXPOSE 3000
