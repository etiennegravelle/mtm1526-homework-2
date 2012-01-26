// JavaScript Document

/*
	3 ways to get elements in your HTML:
	document.getElementById()
	document.getElementByClassName()
	document.getElementByTagName()
*/
var todo; /* Holds our <div> to move around*/
var position= 100;
var createLi = function (ev) {
	
	todo = document.createElement('li'); //.createElement() makes a new empty HTML tag
	
	todo.className = 'newLi'; // className allows us to manipulate the classes fro a tag
	
	document.getElementById('ul').appendChild(todo); //.appendChild() will add an element to the HTML file
	
	todo.innerHTML=document.getElementById('text').value;
	
	position = +20;
	
	todo.style.top=position;
	
};
 
document.getElementById('add').addEventListener('click', createLi, false);


document.documentElement.addEventListener('click', function(ev) {
	if (ev.target.tagName == 'LI') {
		ev.target.className = 'check';
		todo = ev.target;
	}
}, false);









