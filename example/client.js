let { get } = require('../index.js')

async function main() {
  let data = await get(
    'b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9'
  )
  console.log('got data')
}
main()
