//your JS code here. If required.

let prev = document.getElementById("prev");
let next = document.getElementById("next");

prev.addEventListener("click", backward);
next.addEventListener("click", forward);

const connection = document.getElementsByClassName("connection");
const circle = document.getElementsByClassName("circle");

let i = 0;
function forward(){
      connection[i].classList.add("active");
	  circle[i+1].classList.add("active");
	  i++;
	prev.disabled = false;
}

// let i = 5
function backward(){
	
	circle[i].classList.remove("active");
	connection[i-1].classList.remove("active");
	  i--;
	next.disabled = true;
}

