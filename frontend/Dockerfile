FROM  node:18 AS Production

ENV Node_ENV = production

WORKDIR /Documents/MERN/sample/Student-Management-System/frontend

COPY package.json /Documents/MERN/sample/Student-Management-System/frontend
COPY package-lock.json /Documents/MERN/sample/Student-Management-System/frontend

RUN npm install

COPY . .

RUN npm run build

CMD ["sh","-c","npm run start"]

