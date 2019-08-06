const toString = Object.prototype.toString;

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]';
};

// export function isObject(val: any): val is Object  {
//   return val !== null && typeof val === 'object';
// };
export function isPlainObject (val: any): val is Object {
  return toString.call(val) === '[object Object]' // 这里要判断是否为普通对象 formData call的话出来的是[object formData]
}