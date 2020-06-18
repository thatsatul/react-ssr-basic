const localStore = (key, data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, data);
  }
}

const getFromLocalStore = (key) => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    if(data) {
      return JSON.parse(data);
    }
    return null;
  }
  return null;
}

export const storeDataInStorage = () => {
  localStore('rememberMe', 'rememberMe');
}

export const getDataFromStorage = () => {
  getFromLocalStore('rememberMe');
}

export const storeDataByPage = (page, data) => {
  localStore(page, JSON.stringify(data));
}

export const getDataByPage = (page) => {
  const data = getFromLocalStore(page);
  return data;
}

export const minifyDataBeforeStoring = () => {
  // minification logic here
}
