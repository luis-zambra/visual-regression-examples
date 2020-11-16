# visual-regression-examples

Examples on WebdriverIO for Visual Regression tests using Applitools and Oculow as solutions

## Requirements

Please make sure to have these components installed:

- npm
- Node v12 or above
- Java
- Google Chrome

## Usage

First install the dependencies:

```javascript
npm install
```

You'll need to set your respective Applitools/Oculow credentials on the following file:

```sh
src/resources/credentials.json
```

Execute the following command to run the test for Applitools (will do image comparison for single element and window layout):

```javascript
npm run test:eyes
```

Execute this command to run the test for Oculow (will compare window with ignore aa logic and assisted baseline management):

```javascript
npm run test:oculow
```

## Learn more

Please visit [Applitools] and [Oculow] sites.

[applitools]: https://applitools.com/
[oculow]: https://www.oculow.com/index.html
