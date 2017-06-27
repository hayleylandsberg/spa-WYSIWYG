//// Create an array of objects that represents famous people (see structure below).
//// Create a text input in your DOM.
//// Beneath that, create a container, block element in your DOM.
////Create a DOM element for each of the objects inside the container. Style your person elements however you like.
// For every even numbered element, have a light yellow background.
// For every odd numbered element, have a light blue background.
// Each element's DOM structure should be as shown below.
// When you click on one of the person elements, a dotted border should appear around it.
// When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
// When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
//// When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

let famousPeople = [
{
  title: "King of Pop",
  name: "Michael Jackson",
  bio: "Michael Joseph Jackson was an American singer, songwriter, record producer, dancer, actor, and philanthropist. Dubbed the 'King of Pop',his contributions to music, dance, and fashion along with his publicized personal life made him a global figure in popular culture for over four decades.",
  image: "http://southparkstudios.mtvnimages.com/images/shows/south-park/clip-thumbnails/season-8/0807/south-park-s08e07c12-change-blankets-16x9.jpg?",
  lifespan: {
    birth: 1958,
    death: 2009
  }
},
{
	title: "Hit Me Baby One More Time",
	name: "Britney Spears",
	bio: "Britney Jean Spears is an American singer, dancer, and actress",
	image: "https://metrouk2.files.wordpress.com/2014/03/wpid-britsouthparkwn_450x304.jpg",
	lifespan: {
		birth: 1981,
		death: "n/a"
	}
},
{
	title: "Yeezus",
	name: "Kanye West",
	bio: "Kanye Omari West is an American rapper, songwriter, record producer, fashion designer, and entrepreneur.",
	image: "http://southparkstudios.mtvnimages.com/images/shows/south-park/clip-thumbnails/season-13/1305/south-park-s13e05c07-breaded-and-genius-16x9.jpg?",
	lifespan: {
		birth: 1977,
		death: "n/a"
	}
}
];

let input = document.getElementById("input");
let container = document.getElementById("container");

//Adding text from input field into the container div
function addInDom() {
	let container = document.getElementById("container");
	container.innerHTML += `<div id="person">${input.value}</div>`
}

for ( var i = 0; i < famousPeople.length; i++) {
	console.log("input?", famousPeople);
	document.getElementById("famous").innerHTML += 
		`<div class="person" id="${i}">
			<header id="nameTitle">${famousPeople[i].name} | ${famousPeople[i].title}</header><br>
			<section id="imageBio">
			<img src="${famousPeople[i].image}"/><br>
			${famousPeople[i].bio}</section><br>
			<footer id="lifeSpan">Life Span:<br>${famousPeople[i].lifespan.birth} - ${famousPeople[i].lifespan.death}</footer><br>`
}

//Clear input field after pressing enter
function clear() {
var clearInput = document.getElementById("input");
	clearInput.value = '';
};

//keypress for enter button to input text into DOM
input.addEventListener("keypress", function(event) {
	if (event.which === 13) {
		console.log("enter press");
		addInDom();
		clear();
	}
});