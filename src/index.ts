import { AxiosRequestConfig, AxiosPromise } from './types';
import { buildURL } from './helpers/url';
import xhr from './_xhr';
import { transformRequest } from './helpers/data';
import { processHeaders } from './helpers/headers';
function axios (config:AxiosRequestConfig): AxiosPromise {
  processConfig(config);
  return xhr(config);
}
function processConfig (config: AxiosRequestConfig): void {
  config.url = transformURL(config);
  config.headers = transformHeaders(config);
  config.data = transfromData(config);
}
function transformURL (config: AxiosRequestConfig): string { // 处理url参数
  const { url, params } = config;
  return buildURL(url, params);
}
function transfromData (config: AxiosRequestConfig) : any { // 处理传入的data
  return transformRequest(config.data);
}
function transformHeaders (config:  AxiosRequestConfig) : any { // 处理headers
  const { headers = {}, data } = config;
  return processHeaders(headers, data);
}
export default axios;