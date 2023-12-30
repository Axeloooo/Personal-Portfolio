FROM node:18-alpine
WORKDIR /app
ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "start"]