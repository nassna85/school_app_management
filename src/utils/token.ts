/**
 * Get token from localstorage
 * @param {string} storageKey
 * @returns {string}
 */
export const getTokenFromLocalstorage = (storageKey: string) => {
  const persistAuth = localStorage.getItem(storageKey) || "";
  if (persistAuth) {
    const parsedPersistAuth = JSON.parse(persistAuth);
    return JSON.parse(parsedPersistAuth?.user)?.token || "";
  } else {
    return "";
  }
};
