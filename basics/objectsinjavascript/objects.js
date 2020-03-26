let myObject={
    title:'loops in javascript',
    videoLength:15,
    videoCreator:'Hitesh Choudary',
    videoDescription:'This is a vodeo description'
}
let myFunction=(someFunction)=>{
    return{
        formatOne:`Title of video is ${someFunction.title}`,
        formatTwo:`Length of the video is ${someFunction.videoLength}`
    }
}
let store=myFunction(myObject);
console.log(store);