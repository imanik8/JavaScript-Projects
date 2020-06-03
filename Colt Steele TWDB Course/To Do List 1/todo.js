var todos = [];

var input = prompt("What would you like to do??");

while(input !== "quit"){
    if(input==="list"){
        listTodo();
    }
    else if(input==="new"){
        addTodo();
    }
    else if(input==="delete"){
        deleteTodo();
    }
    input = prompt("What would you like to do??");
}
console.log("You Quit the APP..Fuck OFF!!");

function listTodo(){
	console.log("**********");
	todos.forEach(function(todo, index){
		console.log(index + ": " + todo);
	});
	console.log("**********");
}

function addTodo(){
	//ask for new todo
	var newTodo = prompt("Enter new todo");
	//add to todos array
	todos.push(newTodo);
	console.log(newTodo + " added to list")
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Todo Removed")
}