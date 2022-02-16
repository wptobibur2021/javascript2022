/* Object Declaration */
const users = {name: 'Tobibur Rohman', salary: 1550, address: 'Dhaka, Bangladesh'}
const userStringify = JSON.stringify(users)
console.log('Default Output: ', users)
console.log('Stringify Output', userStringify)
const shop = {
    name: 'Demo Shop',
    address: 'Dhaka, BD',
    owner: 'Md Tobibur Rohman',
    product:[
        'Laptop',
        'Mobile',
        'Desktop',
        'HeadPhone'
    ]
}
const stringifyShop = JSON.stringify(shop)
/* Console For Checking */
console.log('Default Shop OutputL:', shop)
console.log('Stringify Output: ', stringifyShop)
const convertData = JSON.parse(stringifyShop)
console.log('Convert String Data: ', convertData)
