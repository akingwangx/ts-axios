import { AxiosRequestConfig } from './types';

export default function xhr (config: AxiosRequestConfig):void {
  const { data = null, url, method = 'get', headers } = config; 
  const request = new XMLHttpRequest();

  request.open(method.toUpperCase(), url);
  // async默认是true进行异步操作，send()方法直到收到答复前不会返回
  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })
  request.send(data);
};