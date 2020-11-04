// Your mission is to rewrite the above function using Promises. Make sure your fiveHeads function will call the resolve function when the coin has flipped "heads" five times in a row.

function fiveHeads() {
    //make a counter to see how many flips it takes to get five heads in a row
    let counter = 0;
    //initialize coin flip
    //0 represents heads
    //1 represents tails
    let coinFlip = 0;

    //initialize loop iterator
    let i = 0;

    //loop coin flips until there are 5 heads in a row
    while(counter != 5){
        //set coin flip to a random generator of 0 or 1
        //0 represents heads
        //1 represents tails
        coinFlip = Math.floor(Math.random() * 2);
        //formtting: Math.random() returns a decimal between 0 and 1, exclusive - not including 1
        //multiplied by 2 to include the 1 in the range
        //used floor to remove the decimal and make it a whole number
        console.log(coinFlip);

        //reset counter if coinflip is tails
        if (coinFlip == 1){
            counter = 0;
        }
        //increment counter if coin is heads
        else if (coinFlip == 0){
            counter++;
        }

        //increment loop counter to track how many times the loop runs
        i++;
    }
    //loop ends once counter == 5

    return new Promise( (resolve, reject) => {
        // Make the fiveHeads function reject() when the coin has been flipped more than 100 times
        if (i > 100){
            reject(`The coin has been flipped more than 100 times without getting 5 heads in a row. It took ${i} flips.`);
        }
        // Complete the fiveHeads function so that it will resolve() when "heads" has been flipped five times
        else if (counter == 5){
            resolve(`flipped heads five time in a row after ${i} coin flips!`);
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