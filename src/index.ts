import Eth from 'web3-eth'

const provider = Eth.givenProvider || 'ws://localhost:8545'
const eth = new Eth(provider)
