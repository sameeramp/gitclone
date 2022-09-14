let num=10;
let count
for(let i=1;i<=num/2;i++){
     count=0;
    if(num%i==0){
        count++;
    }
}
count>2 ? console.log("not prime") :console.log("prime");