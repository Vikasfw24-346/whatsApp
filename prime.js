for(let i=1;i<=20;i++){
  
let num= i;

let count=0;
for(let j= 1; j<=num; j++ ){

  if(num%j==0){
    count++
  }
}


if(count==2){
  console.log(i,"is a prime number");
} 
}