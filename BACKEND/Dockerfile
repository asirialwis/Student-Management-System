FROM  node:18 AS Production

ENV Node_ENV = production

WORKDIR /Documents/MERN/sample/Student-Management-System/BACKEND

COPY package.json /Documents/MERN/sample/Student-Management-System/BACKEND
COPY package-lock.json /Documents/MERN/sample/Student-Management-System/BACKEND

RUN npm install

COPY . .

# RUN npm run build

CMD ["sh","-c","npm start"]

# CMD ["npm", "start"]

