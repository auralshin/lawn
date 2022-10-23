//SPDX-License-Identifier: Unlicensed
pragma solidity 0.7.4;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

// import "hardhat/console.sol";

interface IERC20Extended is IERC20 {
    function decimals() external view returns (uint8);
}

contract Lawn is
    Initializable,
    OwnableUpgradeable
{
    using SafeMath for uint256;
    using SafeERC20 for IERC20Extended;
    using SafeERC20 for IERC20;

    event CommunityCreated(uint256 indexed communityId);
    event User(
        address indexed overseer,
        uint256 indexed communityId,
        address indexed userAddress,
    );



}
