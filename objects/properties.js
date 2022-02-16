const userInfo = {
    name: 'Md Tobibur',
    id: 34,
    salary: 30000,
    address: 'Dhaka, Bangladesh',
}
/* Getting Object Keys */
const obKeys = Object.keys(userInfo)
console.log('Object Keys: ', obKeys)
/* Getting Object Value */
const obValue = Object.values(userInfo)
console.log('Object Value: ', obValue)
/* Getting Object Entries */
const obEntries = Object.entries(userInfo)
console.log('Object Entries: ', obEntries)
/* Delete any object */
delete userInfo.address
/* Object Seal */
const obSeal = Object.seal(userInfo) // When we will use seal some value replace into object
console.log('Object Seal: ',obSeal)
/* Replace Value Into Object */
userInfo.address = 'Kushtia, Dhaka'
console.log('Change something: ', userInfo)
/* Freeze  */
const obFreeze = Object.freeze(userInfo)
console.log('Freeze Object: ', obFreeze)