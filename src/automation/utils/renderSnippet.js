const renderSnippet = (snippet, tabtrigger, description) => {
  // escape " with \"
  // split lines by line-break
  const separatedSnippet = snippet
    .replace(/\\/g, "\\\\")
    .replace(/"/g, '\\"')
    .split("\n");
  const separatedSnippetLength = separatedSnippet.length;

  // add double quotes around each line apart from the last one
  const newSnippet = separatedSnippet.map((line, index) => {
    return index === separatedSnippetLength - 1 ? `"${line}"` : `"${line}",`;
  });

  return `"${description}": {
        "prefix": "${tabtrigger}",
        "body": [
          ${newSnippet.join("\n")}
        ],
        "description": "${description}"
      },`;
};

module.exports = renderSnippet;
