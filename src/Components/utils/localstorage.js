export function getLS(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export function addLS(key, value) {
  if (key) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}
