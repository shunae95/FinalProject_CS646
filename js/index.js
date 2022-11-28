// Contract Address, make sure to change this to match your created contract.
    const address = "0x230c4A635df104cc0F77Dd60c47711db561b582A"
	// const address = "0x9Fceb49100Be88656007016413c52B2AA693bCA5"
	let maxTokens = 1;
	const NFTPrice = "1";
	// const NFTPrice = "100";
    const ownedList = [];
    const count = ownedList.length;
	
	
	abi = [
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "name",
					"type": "string"
				},
				{
					"internalType": "string",
						"name": "symbol",
						"type": "string"
					}
				],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "approved",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "ApprovalForAll",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "addNewToken",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "available",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "getApproved",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "getMaxTokens",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					}
				],
				"name": "isApprovedForAll",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "isOwned",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "isOwner",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "mintOne",
				"outputs": [],
				"stateMutability": "payable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "msgSender",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "owner",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "ownerOf",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "setApprovalForAll",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes4",
						"name": "interfaceId",
						"type": "bytes4"
					}
				],
				"name": "supportsInterface",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_tokenId",
						"type": "uint256"
					}
				],
				"name": "tokenURI",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "pure",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "upcomingToken",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "_tokenId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "verify",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			}
		]

async function purchasedNFT(){
    let div = document.createElement("div");
	web3 = new Web3(window.ethereum);
	contract = new web3.eth.Contract(abi, address);
	maxTokens = parseInt(await contract.methods.getMaxTokens().call());
    for (let i = 1; i <= maxTokens; i++){
		currentAddress = (await web3.eth.getAccounts())[0];
		result = await contract.methods.verify(i, `${currentAddress}`).call();
		// console.log(`${i}: ${result}`);
		// web3.eth.getAccounts(console.log);
		if (result){
			let file = $.getJSON(`../NFTs/jsonfiles/${i}.json`, function (data) {
				console.log(data);

				let name = document.createElement("h4");
				name.style = "margin:2rem; color: white;"
				let nameText = document.createTextNode(data.name);
				name.appendChild(nameText);
				div.appendChild(name);
				
				
				let image = document.createElement("img");
				image.height = 300;
				image.src = `../NFTs/images/${i}.png`;
				//Get IPFS path from json file and pull image from IPFS
				// let image_path = data.image.substring(7);
				// console.log(image_path);
				// image.src = `https://ipfs.io/ipfs/${image_path}`;
				div.appendChild(image);
				
				let desc = document.createElement("h5");
				desc.style = "margin:1rem;  color: white;";
				let descText = document.createTextNode("Originally " + data.desc + " - " + `#${data.tokenId}`);
				desc.appendChild(descText);
				div.appendChild(desc);
				
				document.getElementById("purchased").appendChild(div);
				div.appendChild(document.createElement("hr"))
			})
		}
	}
    
}

async function initialAvailability(){
	let div = document.createElement("div");
	for (let i = 1; i <= maxTokens; i++){
		let file = $.getJSON(`../NFTs/jsonfiles/${i}.json`, function (data) {
			console.log(data);

			let name = document.createElement("h4");
			name.style = "margin:2rem; color: white;"
			let nameText = document.createTextNode(data.name);
			name.appendChild(nameText);
			div.appendChild(name);
			
			
			let image = document.createElement("img");
			image.height = 300;
			image.src = `../NFTs/images/${i}.png`;
			//Get IPFS path from json file and pull image from IPFS
			// let image_path = data.image.substring(7);
			// console.log(image_path);
			// image.src = `https://ipfs.io/ipfs/${image_path}`;
			div.appendChild(image);
			
			let desc = document.createElement("h5");
			desc.style = "margin:1rem;  color: white;";
			let descText = document.createTextNode(data.desc + " - " + `#${data.tokenId}`);
			desc.appendChild(descText);
			div.appendChild(desc);

			let purchase = document.createElement("button");
			purchase.id = `${i}`;
			let purchaseText = document.createTextNode("Available Now!");
			purchase.appendChild(purchaseText);
			div.appendChild(purchase);
			div.appendChild(document.createElement("br"));
			div.appendChild(document.createElement("br"));
			
            document.getElementById("NFTs").appendChild(div);
			div.appendChild(document.createElement("hr"))

			
		})
		await availability(`${i}`);
	}
}

async function availability(id){
	web3 = new Web3(window.ethereum);
	contract = new web3.eth.Contract(abi, address);
	result = await contract.methods.isOwned(parseInt(id)).call();
	currentTokenId = await contract.methods.upcomingToken().call();
	maxTokens = parseInt(await contract.methods.getMaxTokens().call());
	element = document.getElementById(id);
	if (result == true){
		element.innerHTML = "Sold Out!";
		element.disabled = true;
		ownedList.push(id);
	}else{
		
		if (id == currentTokenId){
			element.innerHTML = "Available Now!";
			element.onclick = async function(){
                confirm("The price of this NFT is 1 ETH, would you like to continue?");
				await mint(id);
			}
		}else{
			element.innerHTML = "Upcoming!";
			element.disabled = true;
		}
	}
}

async function mint(id){

    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      account = accounts[0];
      web3 = new Web3(window.ethereum);
      contract = new web3.eth.Contract(abi, address);
    // contract.methods.mintOne().send({from:account,value:web3.utils.toWei(NFTPrice,'wei')})
	contract.methods.mintOne().send({from:account,value:web3.utils.toWei(NFTPrice,'ether')})
    .on("transactionHash",function(hash){
        console.log("TRANSACTION HASH: "+hash);
		element = document.getElementById(id);

		if (id != maxTokens){
			nextElement = document.getElementById(`${parseInt(id)+1}`);
			nextElement.disabled = false;
			nextElement.innerHTML = "Available Now!";
			nextElement.onclick = async function(){
				await mint(`${parseInt(id)+1}`);
			}
		}
		element.disabled = true;
		element.innerHTML = "Sold Out!";
		alert("Purchased!");
    });

}

async function accessCheck(){
	web3 = new Web3(window.ethereum);
	contract = new web3.eth.Contract(abi, address);
	currentAddress = (await web3.eth.getAccounts())[0];
	result = await contract.methods.isOwner(currentAddress).call();
	if (result){
		maxTokens = parseInt(await contract.methods.getMaxTokens().call());
		console.log("Owner detected.");
		panel = document.getElementById("controlPanel");
		let tokenCounter = document.createElement("h5")
		tokenCounter.style = "color:white;"
		tokenCounter.id = "counter";
		let tokenText = document.createTextNode(`Max Token(s): ${maxTokens}`)
		tokenCounter.appendChild(tokenText);
		panel.appendChild(tokenCounter);
		let addNFT = document.createElement("button");
		addNFT.innerHTML = "Increment Max Tokens"
		addNFT.onclick = async function(){
			result = await contract.methods.addNewToken(`${currentAddress}`).send({from:currentAddress});
			if (result){
				maxTokens = maxTokens + 1;
				console.log(`Worked: ${maxTokens}`);
				console.log(`Contract Max: ${await contract.methods.getMaxTokens().call()}`)
				// console.log(`Sender ${await contract.methods.msgSender().call()}`)
				document.getElementById("counter").innerHTML = `Max Token(s): ${maxTokens}`
				alert(`Current Max Tokens is ${maxTokens}`)
			}
		};
		panel.appendChild(addNFT);
	}else{
		console.log("Owner not detected.");
	}
}

