let name="mom";
let bag='';
function reverse(){
  for(let i=name.length-1; i>=0; i--){
    bag+=name[i];
  }
  return bag;
}
let ans=reverse(name);
if(ans==name){
  console.log("It's palindrome");
}else{
  console.log("It's not palindrome")
}