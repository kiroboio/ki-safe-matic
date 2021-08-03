//const SafeTransfer = artifacts.require('SafeTransfer')
const Token = artifacts.require('Token')
const Pool = artifacts.require('Pool')
//const SafeSwap = artifacts.require("SafeSwap")
//const Staking = artifacts.require("Staking")

const liveTestNetworks = { goerli: true };

module.exports = function(deployer, network, accounts) {

  const tokenOwner    = accounts[0]
  const poolOwner     = accounts[1]

  deployer.then(async () => {
    
    const token   = await deployer.deploy(Token, { from: tokenOwner })
    const pool    = await deployer.deploy(Pool, token.address, { from: tokenOwner })
    //const staking    = await deployer.deploy(Staking, token.address, { from: poolOwner })
    //const safeTransfer = await deployer.deploy(SafeTransfer ,'0x3E3185B08FF717b7a9126f6E160099dfe145d5E9' , { from: tokenOwner })
    //const safeSwap = await deployer.deploy(SafeSwap ,'0x3E3185B08FF717b7a9126f6E160099dfe145d5E9' , { from: tokenOwner })
    await token.disableTransfers(false, { from: tokenOwner })
     if (liveTestNetworks[network]) {
       const supply = 100000n * 10n**18n
       await token.mint(pool.address, supply.toString(), { from: tokenOwner })
       await pool.resyncTotalSupply(supply.toString(), { from: poolOwner })
    } 
  })
}
