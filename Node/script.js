const {addtocart} = require("./cartmodule")
let http = require("http")

console.log("Welcome to WS")
console.log(10+20)

let a = [10, 20, 30, 40]
a.forEach((item, index) => {
    console.log(item, index)
})

console.log("Hello World")

console.log(addtocart())


//------------------------------------------Day 2 -----------------------------------


let server = http.createServer((req, res) => {
    if (req.url == "/") { // http://localhost:3000
        res.end("Hello World")
    }
    
    if (req.url == "/cart") { // http://localhost:3000/cart
        let obj = {
            title: 1,
            data: {
                name: "John",
                Class: "10th",
                age: 20
            }
        }
        res.end(JSON.stringify(obj))
    }
        

})
server.listen(3000) // http://localhost:3000
console.log("Server is running on port 3000")