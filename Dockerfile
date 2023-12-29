FROM node:16-alpine
RUN mkdir -p /app
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}
EXPOSE 3000
CMD ["npm", "run", "start"]