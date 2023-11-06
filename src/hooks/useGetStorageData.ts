import { useEffect, useState } from 'react';

export function useGetStorageData<T>(key: string, data: T) {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage && (storage !== 'undefined')) {
      return JSON.parse(storage);
    }

    return data;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
