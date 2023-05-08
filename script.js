const str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const str2 = "abcdefghijklmnopqrstuvwxyz";
const str3 = "0123456789";
const str4 =  "!@#$%^&*=-_";
const inp = document.getElementById("plength");
const uc = document.getElementById("puppercase");
const lc = document.getElementById("plowercase");
const num = document.getElementById("pnumber");
const sym = document.getElementById("psymbol");
const password = document.getElementById('pwd');


const func = ()=>{
   const len = inp.value; 
   let str="";
   if (uc.checked) str += str1;
   if (lc.checked) str += str2;
   if (num.checked) str += str3;
   if (sym.checked) str += str4;
   let pw="";
   for(let i=1;i<=len;i++){
     const n = Math.floor(Math.random()*(str.length));
     pw += str[n];
   }
   password.value = pw;
}

const copy = document.getElementById('copy');
copy.addEventListener('click', ()=> {
    if(password.value == ""){
        alert("Please generate a password!");
    }else{
        password.select();
        document.execCommand("copy");
        alert("Password has been copied to clipboard.");
    }
});