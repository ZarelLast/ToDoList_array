let todos = ["coba"];
const listDOM = document.getElementById('list');
const inputDOM = document.getElementById('input-todo');
const addDOM = document.getElementById('add-btn');
const hardisk = window.localStorage;

const data = JSON.parse(hardisk.getItem('todos'));
console.log(data);
todos = JSON.parse(hardisk.getItem('todos'));

function render(){
	let index = 0;
	listDOM.innerHTML = "";
	while(index<todos.length){
		console.log(index);
		listDOM.innerHTML += "<li><div class='posted'><input id='box' type='checkbox' />&nbsp<label class='strike'>"+todos[index]+"</label></div><button class='btn-del' onclick=hapus("+index+")><span>&times</span></button></li>";
		index = index + 1;
	}
};

addDOM.addEventListener('click',function(){
	const todo = inputDOM.value;
	todos.push(todo);
	console.log(todos);
	render();
	hardisk.setItem('todos',JSON.stringify(todos));
});

function hapus(index){
	console.log(index); 
	todos.splice(index, 1)
	render();
	hardisk.setItem('todos',JSON.stringify(todos));
};
const nomorDOM = document.getElementById('nomor');
nomorDOM.innerHTML += data.length+" To Do";

render();

function showTime(){
	var date = new Date();
	var h = date.getHours();
	var m = date.getMinutes();
	
	var session =" AM";
	if(h==0){
		h=12;
	}
	if(h>12){
		h=h-12;
		session = " PM";
	}
	h = (h<10)? "0" + h :h;
	m = (m<10)? "0" + m :m;
	var time = h + ":" + m;
	var pm = session;
	document.getElementById("s").innerText = pm;
	document.getElementById("s").textContent = pm;
	document.getElementById("MyClockDisplay").innerText = time;
	document.getElementById("MyClockDisplay").textContent = time;
	setTimeout(showTime, 1000);
	};	

showTime();