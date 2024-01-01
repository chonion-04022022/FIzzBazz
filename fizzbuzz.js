var arr= [];
var init = 1;
function callme(){
    
    
    
    if (init%3===0 && init%5===0){
        arr.push("FizzBuzz");
    }
    else if (init%5===0){
        arr.push("Buzz");
    }
    else if (init%3===0){
        arr.push("Fizz");
    }
    else{
        arr.push(init);
    }
    init++;
    console.log(arr);
}

callme();
callme();
callme();
callme();
