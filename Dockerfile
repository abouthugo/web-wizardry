# Use the official Node.js image as the base image
FROM node:16-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Set the environment variable for the Node.js server
ENV NODE_ENV production

# Expose the port that the app listens on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]
