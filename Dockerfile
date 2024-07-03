# Stage 1: Build
FROM node:20-alpine as builder

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

# Stage 2: Runner
FROM node:20-alpine as runner

# Create and set the working directory
WORKDIR /app

# Copy the built files from the builder stage
COPY --from=builder /app ./

# Set the environment variable for the Node.js server
ENV NODE_ENV production

# Expose the port that the app listens on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]
