var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach( function(element) {
	el.innerHTML += ` ${element}`;
});

function getTitleCase(string) {
	return string.charAt(0).toUpperCase() + planets.slice(1);
}



// Use the map method to create a new array where the first letter of each planet is capitalized
var cap = planets.map (function(planet) {
	return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log("Capitalize", cap );
document.getElementById('cap').innerHTML = cap;

// Use the filter method to create a new array that contains planets with the letter 'e'

function withE(planet) {
	 	if (planet.indexOf('e') !== -1) {
		return planet;
		}	
}

var ePlants = planets.filter(withE);
document.getElementById('e').innerHTML = `planets with E:  ${ePlants}`;


// Use the reduce method to create a sentence from the words in the following array

var sentence = (a,b) => a +" "+ b;

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var works = words.reduce(sentence);
console.log("sentence: ",works );

