const nftCollectionSnippets = require('../snippets/nft-collection.json')
const tokenSnippets = require('../snippets/token.json')

var totalSnippets = Object.keys(nftCollectionSnippets).length + Object.keys(tokenSnippets).length

console.log(totalSnippets)