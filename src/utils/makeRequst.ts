export const makeRequest = async (url: string, headers?: RequestInit) => {
  const result = await fetch(url, headers);
  const res = await result.json();
  if (result.ok) {
    return res;
  }
  return Promise.reject(res);
};
