import { isPlainObject } from './util'

function normalizeHeaderName(headers: any, trueName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== trueName && name.toUpperCase() === trueName.toUpperCase()) {
      headers[trueName] = headers[name]
      delete headers[name]
    }
  })
}

export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json; charset=utf-8'
    }
  }
  return headers
}