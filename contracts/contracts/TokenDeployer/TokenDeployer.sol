// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import {EIP712MetaTransaction} from "./EIP712MetaTransaction.sol";
import {ERC20Token} from "../Tokens/ERC20Token.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract TokenDeployer is
    EIP712MetaTransaction("CoinviseTokenDeployer", "1"),
    Ownable
{
    event ERC20TokenDeployed(
        address indexed _owner,
        address indexed _tokenAddress
    );

    function deployERC20Token(
        string memory name,
        string memory symbol,
        uint256 supplyCap,
        address minter
    ) external returns (address) {
        ERC20Token erc20Token = new ERC20Token(name, symbol, supplyCap, minter);

        emit ERC20TokenDeployed(minter, address(erc20Token));
        return address(erc20Token);
    }
}