// Basic version: running fiveHeads() will return a single coin flip result - heads or tails.

function fiveHeads() {
    return new Promise( (resolve, reject) => {
        //set coin flip to a random generator of 0 or 1
        //0 represents heads
        //1 represents tails
        let coinFlip = Math.floor(Math.random() * 2);
        //formtting: Math.random() returns a decimal between 0 and 1, exclusive - not including 1
        //multiplied by 2 to include the 1 in the range
        //used floor to remove the decimal and make it a whole number

        console.log(coinFlip);

        //if heads
        if (coinFlip == 0){
            resolve("flipped heads!");
        }
        //if tails
        else{
            reject("flipped tails");
        }
    });
}


//invoke function
fiveHeads()
    //if Promise is resolved, do this
    .then( res => console.log(res) )
    //if Promise id rejected, do this
    .catch( err => console.log(err) );


console.log( "When does this run now?" );//this should run first since it will be "faster" than the fiveHeads function can execute