FROM node:6.11.3

# install lib for use
RUN  apt-get update \
  && apt-get install -y wget \
  && rm -rf /var/lib/apt/lists/*

# set timezone
RUN rm -f /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

# Create app directory
WORKDIR /usr/src/app

# Bundle app source

COPY . /usr/src/app

CMD ["npm","run","start:prod"]

EXPOSE 3000
