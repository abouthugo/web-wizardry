# Stage 1: Build
FROM node:20-alpine as builder
WORKDIR /app
COPY . .
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Runner
FROM node:20-alpine as runner

# Create and set the working directory
WORKDIR /app

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

RUN mkdir -p /app/.next/cache/images && chown nextjs:nodejs /app/.next/cache/images
VOLUME /app/.next/cache/images

# Copy the built files from the builder stage
COPY --from=builder /app/package*.json ./
RUN npm install --only=production

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next

# Set the environment variable for the Node.js server
ENV NODE_ENV production

# Expose the port that the app listens on
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]
