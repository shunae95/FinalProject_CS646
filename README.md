<img src="UABCS.jpg" width=350>

# CS 646 Blockchain and Cryptocurrency - Fall 2022

# Group 2 - Project 5

##  How to run project
1. Copy and paste the contents of the "solidity.sol" file into [Remix](remix.ethereum.org) and compile using the "injected provider" environment.
> This will ensure that the contract will use your wallet instead of a Remix-provided wallet.
2. After compilation, copy the address of the created contract.
3. Replace the address constant in line 2 of the "index.js" file located in the "js" folder.
> This constant must match the address of the contract that was created.
4.  Host the "index.html" file on a server or server-like entity.
> [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) by Ritwick Dey can be used to host a web server in Visual Studio Code.
5. Connect to the web server and use the provided interface to purchase your SNKR NFT!


  

## Authors
- [Tiara King](https://github.com/shunae95)
- [AJ Nettles](https://github.com/DelMonteAJ)
- [Leigh Allison](https://github.com/Ldallison)
  
<a href="https://github.com/shunae95/FinalProject_CS646/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=shunae95/FinalProject_CS646" />
</a>

---
### Notes
> The price of each NFT is 1 ETH, but could be adjusted by editing the "solidity.sol" code contents and the "index.js" amount that is transferred in the contract.
> Only one NFT is available at a time, starting with the first token until all NFTs are purchased.