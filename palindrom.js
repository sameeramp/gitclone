let str1="mon";
let str2 = "";

for(let i=str1.length-1;i>=0;i--){
    str2 +=str1[i]
    
}
if(str1===str2){
    console.log("Palindrom")
}else{
    console.log("Not Palindrom");
}