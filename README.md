# ATA-IT-Website

## Run locally

```bash
# clone this repository
git clone https://github.com/MetasPattaraamornpan/ATA-IT-Website.git

# build docker image
docker build -t [NAME] .

# run docker image
docker run -d -p [PORT]:5000 [NAME]

# Generate component and container
npm run generate [container, component]

# install lib
npm install

# build
npm run build

# run development mode
npm start

# run production mode
npm run start:production

# Web path
http://localhost:5000

```
