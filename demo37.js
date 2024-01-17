var n=parseInt(prompt("Enter the Value",0))
var sum=0
var digit=0
var temp=n
var temp2=n
var count=0
while(temp>0){
    temp=parseInt(temp/10)
    count+=1
}
while(n>0){
    digit=parseInt(n%10)
    sum=sum+Math.pow(digit,count)
    n=parseInt(n/10)
}
if(temp2==sum){
    document.writeln(`<b>${temp2} is Amstrong Number</b>`)
}
else{
    document.writeln(`<b>${temp2} is not Amstrong Number</b>`)

}
