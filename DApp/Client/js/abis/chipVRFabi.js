let chipVRFabi = 
  [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
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
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "_value",
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
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_initialSupply",
          "type": "uint256"
        }
      ],
      "name": "cryptoCardsChip",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "success",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
    /*
     // Gotten from truffle console 
    [
    {
        "type": "function",
        "name": "name",
        "inputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "approve",
        "inputs": [
            {
                "name": "spender",
                "type": "address"
            },
            {
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
            {
                "name": "from",
                "type": "address"
            },
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "unknown68234198",
        "inputs": [
            {
                "name": "param1",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
            {
                "name": "tokenOwner",
                "type": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "transfer",
        "inputs": [
            {
                "name": "to",
                "type": "address"
            },
            {
                "name": "tokens",
                "type": "uint256"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "allowance",
        "inputs": [
            {
                "name": "tokenOwner",
                "type": "address"
            },
            {
                "name": "spender",
                "type": "address"
            }
        ],
        "stateMutability": "payable"
    },
    {
        "type": "fallback",
        "stateMutability": "payable"
    }
]

    // Gotten from a contractscanenr
    [
  {
    anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Approval',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature: '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
  },
  {
    anonymous: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'Transfer',
    type: 'event',
    constant: undefined,
    payable: undefined,
    signature: '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
  },
  {
    inputs: [ [Object], [Object] ],
    name: 'allowance',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0xdd62ed3e'
  },
  {
    inputs: [ [Object] ],
    name: 'balanceOf',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x70a08231'
  },
  {
    inputs: [],
    name: 'name',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x06fdde03'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x95d89b41'
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [ [Object] ],
    stateMutability: 'view',
    type: 'function',
    constant: true,
    payable: undefined,
    signature: '0x18160ddd'
  },
  {
    inputs: [ [Object] ],
    name: 'cryptoCardsChip',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x68234198'
  },
  {
    inputs: [ [Object], [Object] ],
    name: 'transfer',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0xa9059cbb'
  },
  {
    inputs: [ [Object], [Object] ],
    name: 'approve',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x095ea7b3'
  },
  {
    inputs: [ [Object], [Object], [Object] ],
    name: 'transferFrom',
    outputs: [ [Object] ],
    stateMutability: 'nonpayable',
    type: 'function',
    constant: undefined,
    payable: undefined,
    signature: '0x23b872dd'
  }
]
*/

