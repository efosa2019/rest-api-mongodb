#Test on client side

fetch('http://localhost:3000/positions')
.then(result => {
return result.json();
})
.then(data => {
console.log(data);
})
