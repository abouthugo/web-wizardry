# Use the official Node.js image as the base image
FROM node:20-alpine

# Create and set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

ENV NEXT_TELEMETRY_DISABLED 1

# Install dependencies
RUN npm ci

# Copy the rest of the application files to the working directory
COPY . .

# Build the Next.js app
RUN npm run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN chown -R nextjs:nodejs .next

# From this github comment: https://github.com/vercel/next.js/discussions/16995#discussioncomment-841952
RUN mkdir -p /app/.next/cache/images && chown nextjs:nodejs /app/.next/cache/images
VOLUME /app/.next/cache/images

# Set the environment variable for the Node.js server
ENV NODE_ENV production

USER nextjs

# Expose the port that the app listens on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]
