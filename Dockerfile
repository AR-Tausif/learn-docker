FROM node
WORKDIR /app
COPY . /app
RUN npm i
CMD npm start
EXPOSE 5000

