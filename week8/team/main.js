const base = 'https://swapi.dev/api/';
const people = 'people/?format=json';
const url = base + people;

let nextURL = '';
let prevURL = '';

function getJSON(url = base + people) {
    return fetch(url)
    .then(response => response.json())
    .then(data => {
        console.table(data);
        nextURL = data.next;
        prevURL = data.previous;

        const charList = document.getElementById('character-list');
        const list = document.createElement('ul');
        data.results.map(makePerson).forEach(element => {
            list.appendChild(element)
        });;
        charList.innerHTML = '';
        charList.appendChild(list);
});
}
function makePerson({
    name, 
    height, 
    mass, 
    hair_color, 
    skin_color, 
    eye_color, 
    birth_year, 
    gender, 
    homeworld
}) {
    const charEl = document.createElement('li');
    charEl.innerHTML = `<h1>${name}</h1>
    <ul>
    <li>Height: ${height}</li>
    <li>Mass: ${mass}</li>
    <li>Hair color: ${hair_color}</li>
    <li>Skin color: ${skin_color}</li>
    <li>Eye color: ${eye_color}</li>
    <li>Birth year: ${birth_year}</li>
    <li>Gender: ${gender}</li>
    <li>Homeworld: ${homeworld}</li>
    </ul>`;
    return charEl;
}
document.querySelector('#nextButton').addEventListener('click', function(event){getJSON(nextURL)});
document.querySelector('#prevButton').addEventListener('click', function(event){getJSON(prevURL)});

getJSON();