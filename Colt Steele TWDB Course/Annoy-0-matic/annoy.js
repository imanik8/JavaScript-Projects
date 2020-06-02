/*var answer = prompt("Are We there Yet??");
 while (answer != "yes" && answer != "yeah"){
     var answer = prompt("Are We there Yet??");
 } 
 alert("YAY, We made it!!");
 */

var answer = prompt("Are We there Yet??");
while (answer.indexOf("yes") === -1){
    var answer = prompt("Are We there Yet??");
} 
alert("YAY, We made it!!");