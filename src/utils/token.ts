/**
 * Get token from localstorage
 * @param {string} storageKey
 * @returns {string}
 */
export const getTokenFromLocalstorage = (storageKey: string) => {
  const persistAuth = localStorage.getItem(storageKey) || "";
  const parsedPersistAuth = JSON.parse(persistAuth);
  return JSON.parse(parsedPersistAuth?.user)?.token || "";
};
