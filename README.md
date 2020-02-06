# Web3.js and TS bug

Relates to typing suport of not exporting classes as default exports even though the JS implementation does that.

## Steps to reproduce

 1. `npm install`
 2: `npx tsc`

## Output

```
src/index.ts:3:22 - error TS2339: Property 'givenProvider' does not exist on type 'typeof import("/Users/adam/Projects/iovlabs/web3.js_types/node_modules/web3-eth/types/index")'.

3 const provider = Eth.givenProvider || 'ws://localhost:8545'
                       ~~~~~~~~~~~~~

src/index.ts:4:17 - error TS2351: This expression is not constructable.
  Type 'typeof import("/Users/adam/Projects/iovlabs/web3.js_types/node_modules/web3-eth/types/index")' has no construct signatures.

4 const eth = new Eth(provider)
                  ~~~


```
