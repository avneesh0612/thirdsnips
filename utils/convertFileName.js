function convertFileName(fileName) {
  for (const regexPattern of [/\..+$/]) {
    var fileSlug = fileName.replace(regexPattern, "");
  }
  var words = fileSlug.split("-");

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }

  return words.join(" ");
}

module.exports = convertFileName;
