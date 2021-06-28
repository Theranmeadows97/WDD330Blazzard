fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
.then(res => res.json())
.then(data => console.log(data))
.catch(error => console.log("ERROR"))