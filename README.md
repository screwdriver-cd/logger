# screwdriver-logger
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] ![License][license-image]

> Wrapper around [winston] for a common logging interface for Screwdriver repos

## Usage

```bash
npm install screwdriver-logger
```

This module wraps the [winston] package and provides a simple uniform interface for handling logs.



```js
const logger = require('screwdriver-logger');

try {
    // Do something

    return logger.info('Server running at %s', server.info.uri);
} catch (err) {
    logger.error(err.toString());

    return process.exit(1);
}
```

## Testing

```bash
npm test
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/screwdriver-logger.svg
[npm-url]: https://npmjs.org/package/screwdriver-logger
[downloads-image]: https://img.shields.io/npm/dt/screwdriver-logger.svg
[license-image]: https://img.shields.io/npm/l/screwdriver-logger.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/screwdriver.svg
[issues-url]: https://github.com/screwdriver-cd/screwdriver/issues
[status-image]: https://cd.screwdriver.cd/pipelines/3554/badge
[status-url]: https://cd.screwdriver.cd/pipelines/3554
[winston]: https://www.npmjs.com/package/winston
