export const getLocalStorageName = (key: string) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    let user = JSON.parse(storage);
    return user.fullName;
  }
};

export const getLocalStorageArrCards = (key: string) => {
  const storage = localStorage.getItem(key);
  if (storage) {
    let cards = JSON.parse(storage);
    return cards;
  } else return [];
};


