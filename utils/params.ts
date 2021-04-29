export function getParam(params: Record<string, string | string[]> = {}, key: string): string {
  const param = params[key] || '';
  return typeof param === 'string' ? param : param.join('/');
}
