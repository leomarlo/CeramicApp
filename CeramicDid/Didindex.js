
import { ThreeIdConnect, EthereumAuthProvider } from '@3id/connect'

const threeIdConnect = new ThreeIdConnect()
// Usually the following three steps are taken when
// a user choose to connect their wallet
const addresses = await window.ethereum.enable()
console.log('hallo')
console.log(threeIdConnect)