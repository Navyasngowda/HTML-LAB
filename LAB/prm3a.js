            var n;
n=prompt("enter the limit value");
n1=0;
n2=1;

//console.org(n1+"\n"+n2 );
document.write("<h2 style='color:blue'>The fibonacci value upto"+n+"is<br/>");
document.write(n1+"<br/>"+n2+"<br/>");
for(i=0;i<=n;i++)
{
    n3=n1+n2;
    document.write(n3+"<br/>");
    n1=n2;
    n2=n3;
}
