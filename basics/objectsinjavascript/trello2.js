let myTodo={
    meetings:0,
    meetingsDone:0
}

let addMeeting=function(todo,num){
    todo.meetings = todo.meetings+num;
}

let meetDone=function(todo, num){
    todo.meetingsDone=todo.meetingsDone-num;
}

let getDay=function(todo){
    let meetLeft=todo.meetings + todo.meetingsDone;
    console.log();
}