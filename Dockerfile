# Step 1: Use the Node.js image as a base
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install
RUN npm install --legacy-peer-deps

COPY .env /app/.env

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the Next.js application
RUN npm run build

# Step 7: Expose the port that the Next.js app will run on
EXPOSE 3000

# Step 8: Define the command to run the application
CMD ["npm", "start"]
