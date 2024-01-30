'use strict';

/*!
 * ignore
 */

class MessageError extends Error { }

Object.defineProperty(MessageError.prototype, 'name', {
  value: 'MessageError'
});

module.exports = MessageError;