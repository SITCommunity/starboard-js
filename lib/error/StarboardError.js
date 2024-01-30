'use strict';

/*!
 * ignore
 */

class StarboardError extends Error { }

Object.defineProperty(StarboardError.prototype, 'name', {
  value: 'StarboardError'
});

module.exports = StarboardError;