//const SafeTransfer = artifacts.require('SafeTransfer')
const Token = artifacts.require('Token')
//const Pool = artifacts.require('Pool')
//const SafeSwap = artifacts.require("SafeSwap")
//const Staking = artifacts.require("Staking")

const liveTestNetworks = { goerli: true };

module.exports = function(deployer, network, accounts) {

  const tokenOwner    = accounts[0]
  const poolOwner     = accounts[1]

  deployer.then(async () => {
    
    const token   = await deployer.deploy(Token, { from: tokenOwner })
    //const pool    = await deployer.deploy(Pool, '0xFcf75F14d14F4B63F5e09e584Aa5282145eE2dF8', { from: tokenOwner })
    //const staking    = await deployer.deploy(Staking, '0xFcf75F14d14F4B63F5e09e584Aa5282145eE2dF8', { from: poolOwner })
    //const safeTransfer = await deployer.deploy(SafeTransfer ,'0x3E3185B08FF717b7a9126f6E160099dfe145d5E9' , { from: tokenOwner })
    //const safeSwap = await deployer.deploy(SafeSwap ,'0x3E3185B08FF717b7a9126f6E160099dfe145d5E9' , { from: tokenOwner })
    //await token.disableTransfers(false, { from: tokenOwner })
     if (liveTestNetworks[network]) {
       const supply = 100000n * 10n**18n
       await token.mint(pool.address, supply.toString(), { from: tokenOwner })
      // await pool.resyncTotalSupply(supply.toString(), { from: poolOwner })
    }
  })
}
