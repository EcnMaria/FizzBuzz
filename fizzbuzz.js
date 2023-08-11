let btn = document.getElementById("btn");
btn.addEventListener("click", fizzBuzz);

function fizzBuzz() {
    let number = document.getElementById("num").value;
    for (let i=1; i<=number; i++) {
       let appendString = "";
       if (i%3 === 0) {
        appendString += "Fizz";
       }
       if (i%5 === 0) {
        appendString += "Buzz";
       }
       if (appendString === "") {
        document.getElementById("result").innerHTML += i + "<br>";  
        //console.log(i)
        //"<br>" adds a line 
        //+= is used to display each iteration, so + appends to the results
        //only = will overwrite the contents with the new value
       } else {
        document.getElementById("result").innerHTML += appendString + "<br>";   
        //console.log(appendString); 
        //appendString is a variable and it doesn't need quotes
       }
       
    }
}









