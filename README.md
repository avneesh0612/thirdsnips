# thirdweb-snippets

Thirdweb snippets for enhancing your the developer experience while working with thirdweb 🚀!

## Usage

| Prefix                      | Description                                                                                 | Module                   |
| --------------------------- | ------------------------------------------------------------------------------------------- | ------------------------ |
| `initModule`                | Initialize the bundle module                                                                | Bundle Collection module |
| `initSupply`                | Get initial supply for a token                                                              | Bundle Collection module |
| `initSupplyAddr`            | Get initial supply for a token for an address                                               | Bundle Collection module |
| `burnNFT`                   | Burn NFT by Token ID and amount to burn                                                     | Bundle Collection module |
| `burnNFTs`                  | Burn a Batch of NFTs                                                                        | Bundle Collection module |
| `burnNFTsAddr`              | Burn a Batch of NFTs from an address                                                        | Bundle Collection module |
| `burnNFTAddr`               | Burn a NFT from an address                                                                  | Bundle Collection module |
| `createNFT`                 | Create NFT                                                                                  | Bundle Collection module |
| `createMintNFT`             | Create and Mint NFT                                                                         | Bundle Collection module |
| `createMintNFTs`            | Create and Mint a batch of NFTs                                                             | Bundle Collection module |
| `createNFTs`                | Create a batch of NFTs                                                                      | Bundle Collection module |
| `createERC-20`              | Create with ERC-20                                                                          | Bundle Collection module |
| `createERC-721`             | Create with ERC-721                                                                         | Bundle Collection module |
| `createNFT`                 | Create with NFT                                                                             | Bundle Collection module |
| `createTOKEN`               | Create with Token                                                                           | Bundle Collection module |
| `getNFTToken`               | Get NFT by token ID                                                                         | Bundle Collection module |
| `getAllNFTs`                | Get All NFTs                                                                                | Bundle Collection module |
| `getAllNFTsOwned`           | Get All NFTs Owned                                                                          | Bundle Collection module |
| `getRoyaltyPoints`          | Get royalty basic Points                                                                    | Bundle Collection module |
| `getRoyaltyAddr`            | Get royalty recipient address                                                               | Bundle Collection module |
| `checkIfApproved`           | Check if a smart contract is approved to spend on your behalf                               | Bundle Collection module |
| `checkIfRes`                | Check if transfer is Restricted                                                             | Bundle Collection module |
| `specifySupply`             | Specify supply for a NFT                                                                    | Bundle Collection module |
| `specifySupplyNFTs`         | Specify supply for a Batch of NFTs                                                          | Bundle Collection module |
| `specifySupplyNFTsSend`     | Specify supply for a Batch of NFTs and send it to an Address                                | Bundle Collection module |
| `specifySupplyNFTSend`      | Specify supply for a NFT and send it to an Address                                          | Bundle Collection module |
| `setApprovalContract`       | Set approval for a contract                                                                 | Bundle Collection module |
| `setMetadata`               | Set metadata for the module                                                                 | Bundle Collection module |
| `setRestrictionTransfer`    | Set restriction on transfer                                                                 | Bundle Collection module |
| `setRoyaltyPoints`          | Set royalty basic points                                                                    | Bundle Collection module |
| `transferToken`             | Transfer token to address                                                                   | Bundle Collection module |
| `transferNFTAddr`           | Transfer a specific amount of NFT from an address                                           | Bundle Collection module |
| `unwrapNFT`                 | Unwrap a NFT                                                                                | Bundle Collection module |
| `tokenBalance`              | Get the balance of a token                                                                  | Token module             |
| `tokenBalanceOf`            | Get the balance of a token for a specific address                                           | Token module             |
| `tokenBurn`                 | Burn tokens owned by the owner                                                              | Token module             |
| `tokenBurnFrom`             | Burn tokens owned by a specific address                                                     | Token module             |
| `tokenGet`                  | Get details about a token module                                                            | Token module             |
| `tokenGetAllHolderBalances` | Get all the balances of all holders                                                         | Token module             |
| `tokenGetDelegation`        | Get the delegation of a token                                                               | Token module             |
| `tokenGetDelegationOf`      | Get the delegation of a token for a specific address                                        | Token module             |
| `tokenGetValue`             | Get the value for the specified amount of a token                                           | Token module             |
| `getVoteBalance`            | Get information of the vote balance for yourself                                            | Token module             |
| `getVoteBalanceOf`          | Get information about the vote balance for the specified address                            | Token module             |
| `tokenMint`                 | Mint specific amount of tokens                                                              | Token module             |
| `tokenMintBatchTo`          | Mint specific amount of tokens to multiple addresses in a batch                             | Token module             |
| `tokenMintTo`               | Mint specific amount of tokens to a specific address                                        | Token module             |
| `tokenTotalSupply`          | Get the total supply of a token module                                                      | Token module             |
| `tokenTransfer`             | Transfer specific amount of tokens to a specific address                                    | Token module             |
| `tokenTransferBatch`        | Transfer specific amounts of tokens to multiple addresses in a batch                        | Token module             |
| `tokenTransferFrom`         | Transfer specific amount of tokens from an address to another address                       | Token module             |
| `tokenTransferFromBatch`    | Transfer specific amounts of tokens from multiple addresses to another addresses in a batch | Token module             |
| `initVote`                  | Initialize the Vote module                                                                  | Vote Collection module   |
| `getBalanceChain`           | Get the balance of the project wallet in the native token of the chain                      | Vote Collection module   |
| `getBalanceERC20`           | Get the balance of the project wallet in a particular ERC20 token contract                  | Vote Collection module   |
| `canExecute`                | Can execute a proposal                                                                      | Vote Collection module   |
| `executeProposal`           | Execute a Proposal                                                                          | Vote Collection module   |
| `getProposal`               | Get proposal by Proposal Id                                                                 | Vote Collection module   |
| `getProposals`              | Get all the Proposals                                                                       | Vote Collection module   |
| `checkProposalAccStatus`    | Check if an account has voted for a proposal                                                | Vote Collection module   |
| `createProposal`            | Create a Proposal                                                                           | Vote Collection module   |
| `setMetadataModule`         | Set metadata for the module                                                                 | Vote Collection module   |
| `getSettings`               | Get the settings                                                                            | Vote Collection module   |
| `voteProposal`              | Vote for a proposal                                                                         | Vote Collection module   |
| `mintNft`                   | Mint an NFT to your wallet                                                                  | Nft Collection module    |
| `mintNftTo`                 | Mint an NFT to someone's wallet                                                             | Nft Collection module    |
| `nftBalance`                | Get balance of NFTs of a collection                                                         | Nft Collection module    |
| `nftBalanceOf`              | Get NFT balance of another account                                                          | Nft Collection module    |
| `burnNft`                   | Burn an NFT with Token ID                                                                   | Nft Collection module    |
| `genNftSign`                | Generate NFT signature for a Mint request                                                   | Nft Collection module    |
| `getNftbyId`                | Get a NFT by it's ID                                                                        | Nft Collection module    |
| `getAllNft`                 | Get all NFTs of a collection                                                                | Nft Collection module    |
| `getNftsWithOwner`          | Get all NFTs of a collection owned by the owner                                             | Nft Collection module    |
| `getNftsWithAddress`        | Get all NFTs of a collection owned by a specific address                                    | Nft Collection module    |
| `mintNftBatch`              | Mint multiple NFTs in a single batch                                                        | Nft Collection module    |
| `mintNftBatchTo`            | Mint multiple NFTs in a single batch to a specific address                                  | Nft Collection module    |
| `getNftOwner`               | Get the owner of a NFT                                                                      | Nft Collection module    |
| `getNftTotalSupply`         | Get the total supply of a NFT collection                                                    | Nft Collection module    |
| `transferNft`               | Transfer an NFT to a specific address                                                       | Nft Collection module    |


## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Avneesh Agarwal](https://github.com/avneesh0612).<br />
This project is [GNU](https://github.com/avneesh0612/thirdweb-snippets/blob/main/LICENSE) licensed.
