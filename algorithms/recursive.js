export const palindrom = (string) => {
  if (string.length === 1) return true;

  if (string.charAt(string.length - 1) === string.charAt(0)) {
     return palindrom(string.substring(1,string.length - 1))
  }

  return false;
};
