import { ParsedUrlQuery } from 'querystring';

export function getParam(params: ParsedUrlQuery = {}, key: string): string {
  const param = params[key] || '';
  return typeof param === 'string' ? decodeURIComponent(param) : param.join('/');
}
