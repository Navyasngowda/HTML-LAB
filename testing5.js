//program to find given no.is armstrong or not
// ex:371=(3*3*3)+(7*7*7)+(1*1*1)


var n=prompt("enter the number");
sum=0;
l=n.length;
for(i=0;i<l;i++)
{
sum+=n[i]**l;
}
if(n==sum)
{
    alert(n+ "number is armstrong");
}
else
{
    alert(n+ "number is not armstrong");
}