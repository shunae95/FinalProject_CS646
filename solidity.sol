// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.7.1/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.7.1/contracts/utils/Strings.sol";

contract BlazeNFT is ERC721{
    uint256 tokenId;
    uint256 public maxTokens;
    address public owner;
    uint256 price;

    modifier onlyOwner(){
        require(msg.sender == owner, "Not owner.");
        _;
    }

    constructor(string memory name, string memory symbol) ERC721(name, symbol){
        tokenId = 1;
        maxTokens = 1;
        owner = msg.sender;
        price = 1000000000000000000;
    }

    // Not really used but contains the IPFS address for the data regarding the NFTs
    function tokenURI(uint256 _tokenId) override public pure returns (string memory){
        //ipfs:QmXniPGEcRgavPbhvJXtWwJdfXxQ9U4pDkz1W3MzSQSR9u/

        string memory returnTokenURI = string(abi.encodePacked("ipfs://QmXniPGEcRgavPbhvJXtWwJdfXxQ9U4pDkz1W3MzSQSR9u/", Strings.toString(_tokenId),".json"));
        return returnTokenURI;
    }


    // Mints upcoming token and sends the payment to the contract owner.
    function mintOne() public payable {
        require(msg.value == price, "Invalid price.");
        require(tokenId <= maxTokens, "Sold Out.");
        _safeMint(msg.sender, tokenId);
        tokenId = tokenId + 1;
        address payable wallet = payable(owner);
        wallet.transfer(price);
    }

    // Increments the maxTokens so the owner can add more images and json files.
    function addNewToken(address sender) public{
        require(sender == owner, "Access Denied.");
        maxTokens = maxTokens + 1;
    }

    // Returns upcoming token ID
    function upcomingToken() public view returns(uint256){
        return tokenId;
    }

    // Checks if there are tokens still available.
    function available() public view returns(bool){
        return tokenId < maxTokens;
    }

    // Checks if the token is owned.
    function isOwned(uint256 _tokenId) public view returns(bool){
        return _tokenId < tokenId;
    }

    // Verifies that the token is owned by that requester
    function verify(uint256 _tokenId, address sender) public view returns (bool){
        if (!isOwned(_tokenId) || sender != ownerOf(_tokenId)){
            return false;
        }else{
            return true;
        }
    }

    function isOwner(address sender) public view returns (bool){
        return sender == owner;
    }
    
    function getMaxTokens() public view returns (uint256){
        return maxTokens;
    }

    function msgSender() public view returns (address){
        return msg.sender;
    }
}