# RealEyes

An API for encoding `.mp4` files to a specific codec format and bitrate

## Requirements

-   [Node](https://nodejs.org/en/)
-   [ffmpeg](https://ffmpeg.org/)

## Installation

To get this project running ensure you have all the requirements listed above and make a clone of this repository using the command

```sh
$ https://github.com/seyi-adeleke/real-eyes.git
```

then `cd` into the new directory created and run `npm install` to install all project depedencies.

## Getting started

This project is bootstraped with typescript. To run in dev mode use the command

```sh
$ npm run dev
```

This starts the application on port 8000. To use a different port you can change specify the desired port in the config.ts file

To run in a production environment you first need to compile to Javascript and then run the application from the compiled files.

To do that run `npm start` in your terminal.
Other useful scripts are specified in the package.json file.

To view documentation make a `GET` request to the `/api/info` endpoint.
