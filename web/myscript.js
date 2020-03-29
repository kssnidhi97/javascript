//const hi=document.querySelector('p');
//hi.textContent='This is changed by JS';

//const hi=document.querySelectorAll('p');
//hi.forEach(function(p){
  //  p.textContent='This is changed by JS';
//});

//const myNewPara=document.createElement('p');
//myNewPara.textContent='I was added via JS';
//document.querySelector('body').appendChild(myNewPara);

//document.querySelector('button').addEventListener('click',(event)=>{
  //  event.target.textContent='I was clicked';
//})

//document.querySelector('#myInput').addEventListener('input',(event)=>{
  //  console.log(event.target.value);
//})

//function myValidation(){
    let myValue=document.getElementById('myInput').value;
    if (isNaN(myValue) || myValue<1 || myValue>20) {
        console.log('not a valid input');        
    } else {
        console.log('valid input');        
    }
//}

document.querySelector('.myForm').addEventListener('submit',(event)=>{
    event.preventDefault();

    console.log(event.target.username.value);
    console.log(event.target.name.value);
})