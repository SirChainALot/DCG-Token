// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DgToken is ERC20{
    constructor() ERC20("DCG Token", "DCG"){
        _mint(msg.sender,100000000*10**18);
    }
}
