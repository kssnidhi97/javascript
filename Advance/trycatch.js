try {
    console.log(sayHello());
    console.log("This line will not be executed");
} catch (error) {
    console.log("Description= "+error.description);
}
finally{
    console.log("hi");
}