let iAmGlobal='hi';
if(true){
    var iAmlocal='hello';
    console.log(iAmGlobal);
    console.log(iAmlocal);
}
console.log(iAmlocal);