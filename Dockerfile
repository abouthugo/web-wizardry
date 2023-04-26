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

# Set environment variables based on build arguments
ARG URL
ARG KEY
ENV NEXT_PUBLIC_SUPABASE_URL=$URL
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=$KEY

# Build the Next.js app
RUN npm run build

# Set the environment variable for the Node.js server
ENV NODE_ENV production

# Expose the port that the app listens on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]
