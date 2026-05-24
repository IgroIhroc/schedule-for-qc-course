// @ts-nocheck
import '@testing-library/jest-dom/extend-expect';

const originalError = console.error;

console.error = (...args) => {
  const msg = args[0] || '';

  // не валимо тести через jsdom / react / xhr помилки
  if (
    typeof msg === 'string' &&
    (msg.includes('AggregateError') || msg.includes('XHR'))
  ) {
    return;
  }

  originalError(...args);
};