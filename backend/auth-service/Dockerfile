FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Generate Prisma client inside container
RUN npx prisma generate

EXPOSE 80

CMD ["npm", "run", "dev"]
