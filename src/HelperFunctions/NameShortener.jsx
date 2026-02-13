export const formatCartName = (name) => {
  return name
    .replace("Headphones", "")
    .replace("Wireless Earphones", "")
    .replace("Speaker", "")
    .replace("Mark", "MK")
    .trim()
    .toUpperCase();
};
