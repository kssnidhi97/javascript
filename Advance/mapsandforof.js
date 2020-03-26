var john={
    name:'I am john',
    age:24,
    isActive:true
}
var marry={
    name:'I am marry',
    age:23,
    isActive:true
}
var sam={
    name:'I am sam',
    age:29,
    isActive:false
}

let users=new Map();

users.set('john',john);
users.set('marry',marry);
users.set('sam',sam);

let arrofArr=[['one','1'],['two',2],['three',3]];
let newMap=new Map(arrofArr);
console.log(newMap);