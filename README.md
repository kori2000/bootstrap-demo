# bootstrap-demo
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/kori2000/telegram-bot/blob/main/LICENSE)
[![Unicorn](https://img.shields.io/badge/nyancat-approved-ff69b4.svg)](https://www.youtube.com/watch?v=QH2-TGUlwu4)

Simple bootstrap demonstration with webpack for a simple javaScript applications.
##### Features

- Babel Loader
- Sass Loader With Dart Sass
- HTMLWebpackPlugin
- WebpackDevServer
- Asset Resource Loader
- Source Maps
- Caching

![Screenshot](https://raw.githubusercontent.com/kori2000/bootstrap-demo/main/screenshot.png)

## Installation

Please adjust the `.env.example` file before starting the container.

```bash
# Replace .env.example with .env to work in prod environment

# Server Settings
SERVER_PORT=3000
SERVER_DNS=localhost
```

## Starting

```bash
# 🏗️ Build docker image
make build

# 🚀 Start docker container
make up

# 🛑 Stop docker container
make down

# 🚽 Remove docker image
make remove
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)