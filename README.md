## Install
### node v18.16.0
check if you have curl in your computer
```sh
    curl --version
```
if not:
```sh
    sudo apt install curl
```
Install node using curl
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18.16.0
nvm use 18.16.0
node --version
```

### yarn 1.22.19
```sh
npm install -g yarn@1.22.19
```
## Create
You need to create a .env.local in your root directory based on .env
## Run
```sh
yarn dev
```

