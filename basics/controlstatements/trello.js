const myTodo=[];
myTodo.push('Get up');
myTodo.push('Eat tiffen');
myTodo.push('Go to office');
myTodo.forEach(function(todo,index){
    console.log(`Your work ${index+1} is ${todo}`);
});