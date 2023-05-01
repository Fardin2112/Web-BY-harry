console.log("This is module");

function average(arr){
    let sum = 0;
    arr.forEach(element=> {
        sum += element;
    });
    return sum/arr.length;
}

// this is used to export average funtion to another file
module.export = average;