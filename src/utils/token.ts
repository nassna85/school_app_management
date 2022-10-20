/**
 * Get token from localstorage
 * @param {string} storageKey
 * @returns {string}
 */
export const getKeyFromLocalstorage = (storageKey: string) => {
  return localStorage.getItem(storageKey) || "";
};

export const removeKeyFromLocalstorage = (storageKey: string) => {
  return localStorage.removeItem(storageKey);
};
