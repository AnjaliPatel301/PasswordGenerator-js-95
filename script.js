const inputfild=document.querySelector('#input');
const outputfild=document.querySelector('.output');

inputfild.addEventListener('input',function(){
    console.log(inputfild.value)
    let password=inputfild.value;
    if(password.length< 8){
        outputfild.innerText="Password is too short"
        outputfild.style.color="red";
    }
    else{
      
        console.log('is lovercase',password.search(/[a-z]/));
        if(password.search(/[a-z]/)==-1){
        outputfild.innerText='Password is missing a lowercase letter';
        outputfild.style.color='red';
      }
      else if (password.search(/[A-Z]/)==-1){
        outputfild.innerText='Password is missing a Uppercase letter';
        outputfild.style.color='red';
      }
      else if (password.search(/[0-9]/)==-1){
        outputfild.innerText='Password is missing a Numerice letter';
        outputfild.style.color='red';
      }
      else if (password.search(/[@/#/$/&/*/(/)/{/}/+/-/_/</>/!/+/]/) ==-1){
        outputfild.innerText='Password is missing a Speciale Charecter letter';
        outputfild.style.color='green';
      }
      else{
        outputfild.innerText='Password is strong';
        outputfild.style.color='green';
      }
    }

});
