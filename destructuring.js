const product = {
    price: 12,
    name: 'Name',
    label: 'Label A',
    stock: 122,
    salePrice: 24,
    // rating: 10
}

const {label: ProductLabel, name, rating =5} = product
console.log(ProductLabel)
console.log(name)
console.log(rating)

// Label A
// Name
// 5

const transaction = (productType, {price, label})=>{
    console.log(productType)
    console.log(price)
    console.log(label)
}

transaction('order', product)