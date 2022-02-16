//Arry Declaration 

const products = [
    { name: 'iPhone12', price: '1200$'},
    { name: 'iPhone11', price: '1100$'},
    { name: 'iPhone10', price: '1000$'},
    { name: 'iPhone9', price: '900$'},
    { name: 'iPhone8', price: '800$'},
    { name: 'iPhone7', price: '700$'},
    { name: 'iPhone6', price: '600$'},
    { name: 'hp laptop', price: '500$'},
    { name: 'asus laptop', price: '700$'},
    { name: 'iPad', price: '300$'}
]

// Search function declaration

function searchProduct (products, searchText){

    console.log(products,searchText)

    for(const product of products ){
        const name = product.name;
        if(name.indexOf('w') !=-1){
            console.log(name)
        }

    }

}
const searchResult = searchProduct('w')
console.log(searchResult);