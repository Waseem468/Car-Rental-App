export const truncate = (word, size) => {
  if (word.length > size) {
    return word.slice(0, size) + "...";
  }
  return word;
};
