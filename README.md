# Gatsby wordpress setup

The project is bootstrapped with [Pixel Point Gatsby starter] (<https://github.com/pixel-point/gatsby-starter>).
Docker WordPress setup was taken from the [docs] (<https://docs.docker.com/compose/wordpress/>)

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
  - [Run website](#run-the-website)
  - [Build website](#build-the-website)
  - [Run built website](#run-built-website)
  - [Clean Gatsby cache](#clean-gatsby-cache)
- [Project Structure](#project-structure)
- [Code Style](#code-style)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [VS Code](#vs-code)
- [Style Variables](#style-variables)

## Getting Started

1. Clone this repository

```bash
git clone git@github.com:pixel-point/gatsby-starter.git
```

2. Install dependencies

```bash
npm install
```

3. Copy .env.example and rename it into .env

4. Setup local wordpress

```bash
docker compose up -d
```

5. In wordpress admin console, add wp-graphql and wp-gatsby plugins

6. Start the project

```bash
npm run start
```

## Usage

### Run the website

```bash
npm run start
```

### Build the website

```bash
npm run build
```

### Run the built website

```bash
npm run serve
```

### Clean Gatsby cache

```bash
npm run clean
```
