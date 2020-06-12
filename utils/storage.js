export const storeDataInStorage = () => {
  localStorage.setItem('rememberMe', 'rememberMe');
}

export const getDataFromStorage = () => {
  localStorage.getItem('rememberMe');
}

export const storeDataByPage = (page, data) => {
  localStorage.setItem(page, JSON.stringify(data));
}

export const getDataByPage = (page) => {
  const data = localStorage.getItem(page);
  return JSON.parse(data);
}

export const minifyDataBeforeStoring = () => {
  // minification logic here
}
