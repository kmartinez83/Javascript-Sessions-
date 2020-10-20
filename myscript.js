
/** 
console.log("this is an external file")
alert('I am loaded now ..');          //ok button 

if (conrim ("Do you want to proceed?") == true){
    alert ('You are selected for next round'){
        alert ('Oops! you are rejected')
    }
}   //ok & cancel buttons 


*/ 

/** 
var age = prompt('Please enter your age : ');
alert ('Your age is ' + age): 
*/


var age = prompt('Please enter your age : ');
if (age >=18) {
    //alert ('you are vald to vote!')
   // document.write('you are valid to vote');
    
   document.getElementById('voteStatus').innerHTML = 'You are valid to vote';

} else {
   // document.write('you are not valid to vote');
   document.getElementById('voteStatus').innerHTML = 'You are not valid to vote';

}
