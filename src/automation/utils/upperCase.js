function upperCase(str) {
  str = str.trim();
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

module.exports = upperCase;
