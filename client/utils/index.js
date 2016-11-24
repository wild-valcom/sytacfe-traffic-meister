import { uniq, isArray, flattenDeep } from 'lodash';

/**
 * functionality for filtering items by several filters
 * @param {Array} items is an array of objects
 * @param {Array} filters is an array of filters
 * @return {Array} of filtered items
 */
export function filterItems(items, filters) {
  return filters.reduce((accum, currentFilter) =>
    accum.filter(currentFilter), items);
}

/**
 * functionality for geretaing filter by certain type
 * @param {String} type is a type of vehicles propery, e.g.: type, brand, colors
 * @param {Array} value is a value of type
 * @return {Array} of filtered items
 */
export function getFilterBy(type, value) {
  return item => (value ? item[type].indexOf(value) !== -1 : true);
}

/**
 * functionality for geretaing select data
 * @param {String} type is a type of vehicles propery, e.g.: type, brand, colors
 * @param {Array} data is an array of objects(vehicles)
 * @return {Array} of uniq items
 */
export function getUniqDataByType(type, data) {
  return (
    uniq(data.reduce((accumulator, currentValue) => (
      isArray(currentValue[type]) ?
        accumulator.concat(flattenDeep(currentValue[type])) :
        accumulator.concat([currentValue[type]])
      ), ['']))
      .map(item => ({
        value: item,
        title: item
      }))
  );
}
