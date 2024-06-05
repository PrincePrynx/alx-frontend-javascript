
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let use = 0;
  if (weakMap.get(endpoint)) use = weakMap.get(endpoint);
  weakMap.set(endpoint, use + 1);
  if (use + 1 >= 5) throw new Error('Endpoint load is high');
}
