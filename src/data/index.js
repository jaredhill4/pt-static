import _ from 'lodash';

// Content Types
import pages from './pages';

/**
 * To add additional content types follow the same import conventions as the `pages` content type.
 *
 * For example, if you want to create a `recipes` content type, simply create a `recipes` directory
 * with an `index.js` file and add a file per item within that content type.
 *
 * Then, import each item into the `index.js` file and re-export all items as keys on the content type.
 *
 * Finally import the whole `recipes` content type into this file as a single object and add it as a key
 * on the `data` object in the `getPageData` function.
 */
export const getPageData = page => {
  const data = {
    pages
  };

  return _.get(data, page, {});
};
