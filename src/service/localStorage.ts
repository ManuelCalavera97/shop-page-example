export const getLocalStorageJson = <T>(key: string): T[] => {
  return JSON.parse(localStorage.getItem(key) || "[]");
};

export const updateLocalStorageJson = <T>(key: string, item: T[]) => {
  localStorage.setItem(key, JSON.stringify(item));
};
