const url = "https://swapi.dev/api/planets";

let nextURL = '';
let prevURL = '';



let h = new Headers();
h.append('Accept', 'application/json')
let req = new Request(url, {
    method: 'GET',
    headers: h,
    mode: 'cors' 
});

fetch(req)
    .then( (response) => {
        if(response.ok){
            return response.json();
        } else {
            throw new Error('NOT SUCCESSFUL');
        }
    })
    .then( (jsonData) => {
        console.log(jsonData);
        const planets = jsonData['results'];

        for(let i = 0; i < planets.length; i++){
            let card = document.createElement('section');
            let name = document.createElement('h3');
            let rotationPeriod = document.createElement('p');
            let orbitalPeriod = document.createElement('p');
            let size = document.createElement('p');
            let climate = document.createElement('p');
            
            name.textContent = (i+1) + "- " + planets[i].name;
            rotationPeriod.textContent = "Rotation Period: " + planets[i].rotation_period;
            orbitalPeriod.textContent = "Orbital Period: " +  planets[i].orbital_period;
            size.textContent = "Diameter: " +  planets[i].diameter;
            climate.textContent = "Climate: " +  planets[i].climate;

            card.appendChild(name);
            card.appendChild(rotationPeriod);
            card.appendChild(orbitalPeriod);
            card.appendChild(size);
            card.appendChild(climate);

            document.querySelector("#container").appendChild(card);
        }
    })
    .catch( (err) => {
        console.log("ERROR", err.message);
    });

document.querySelector('#nextButton').addEventListener('click', function(event){jsonData(nextURL)});
document.querySelector('#prevButton').addEventListener('click', function(event){jsonData(prevURL)});