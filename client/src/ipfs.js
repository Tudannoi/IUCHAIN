
const ipfsClient = require('ipfs-http-client')

const projectId = '2GLaDdfgpSoD6YYqPbGIHMuIHwX'
const projectSecret = '106bd2d4920c5770c8a4683ca9da92a7'
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64')

const ipfs = ipfsClient({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
    authorization: auth,
  },
})
export default ipfs