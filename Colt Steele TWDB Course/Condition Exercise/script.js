var age  = prompt("Enter Your Age??")

if(age < 0){
    alert('Error!!');
}
if(age===21){
    alert('Happy 21st Birthday!! Ja Maje Kar');
}
if(age % 2 != 0){
    alert('Your age is odd.');
}
if(age % Math.sqrt(age) === 0){
    alert("Your age is a perfect square!!")
}