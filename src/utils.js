
export const generateRandomId = (min, max) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const randomLength = 4;
  let randomID = '';
  for (let i = 0; i < randomLength; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let j = Math.floor(Math.random() * (max-min +1)) + min;
    randomID += chars.charAt(j);
  };
  return randomID;
};