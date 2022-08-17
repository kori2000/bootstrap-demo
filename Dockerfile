FROM node:lts-slim

# App work directory
WORKDIR /usr/src/app

# Add all sources to image
COPY . .

# Build webpack sources
RUN npm install --loglevel=error
RUN npm run build

# Port expose
EXPOSE 3000

# Run demo App
CMD [ "npm", "start" ]