const product = {
    laptop:[
        {name:"asus"}
    ],
    mobile:[
        {name:"Nokia"},
        {name:"Samsung"}
    ]
}
const allKeys = Object.keys(product);
for (let i = 0; i < allKeys.length; i++) {
    const element = allKeys[i];
    const objectProduct = product[element];
    console.log("Length is: " + objectProduct.length);
}

