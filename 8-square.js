const x = parseInt(process.argv[2]);

if(!isNaN(x)){
    for(let i = 0; i < x; i++){
        console.log('X'.repeat(x));
    }
}else{
    console.log('Missing size');
}