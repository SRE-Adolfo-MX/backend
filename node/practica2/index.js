const asyncFunction = (myCallback) => {
    setTimeout(()=>{
        console.log("Process finished")
        myCallback()
    },3000);
};

console.log("Inicia");

asyncFunction(() => {
    console.log("Finalizado");
});

