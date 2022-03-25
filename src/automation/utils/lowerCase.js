function lowerCase(str) {
  str = str.trim();
  str = str.charAt(0).toLowerCase() + str.slice(1);
  return str;
}

module.exports = lowerCase;
