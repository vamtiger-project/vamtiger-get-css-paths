# VAMTIGER Bash
[VAMTIGER Get Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-stylesheet-paths) will return a list of stylesheet paths for defined HTML document text.

## Installation
[VAMTIGER Get Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-stylesheet-paths) can be installed using [npm](https://www.npmjs.com/) or [yarn]():
```bash
npm i --save vamtiger-get-stylesheet-paths
```
or
```bash
yarn add vamtiger-get-stylesheet-paths
```

## Usage
[Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) or [require](https://nodejs.org/api/modules.html#modules_require) a referece to [VAMTIGER Get Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-stylesheet-paths):
```javascript
import getStylesheetPaths from 'vamtiger-get-stylesheet-paths';
```
or
```javascript
const getStylesheetPaths = require('vamtiger-get-stylesheet-paths').default;
```

[VAMTIGER Get Stylesheet Paths](https://github.com/vamtiger-project/vamtiger-get-stylesheet-paths) will return a list of stylesheet paths for defined HTML document text.
```javascript
const getStylesheetPaths = require('vamtiger-get-stylesheet-paths').default

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>
        Some HTML Title
    </title>
    <link href="some/stylesheet/link/index.css" rel="stylesheet">
    <link href="another/stylesheet/link/index.css" rel="stylesheet">
    <link href="https://yet/another/stylesheet/link/index.css" rel="stylesheet">
</head>
<body>
    <div>
        Some HTML body inner HTML
    </div>
</body>
</html>
`;
const stylesheetPaths = getStylesheetPaths({ html }); 
/* [
'some/stylesheet/link/index.css', 
'another/stylesheet/link/index.css',
'https://yet/another/stylesheet/link/index.css'
] */
```
