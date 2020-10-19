exports.calArea=function(radius)
{
  return Math.PI*radius*radius;  
}

exports.calFact=function(num)
{
  var fact=1;
  while(num!=0)
  {
   fact=fact*num;
   num--;
  }
  return fact;
}
exports.calPrime=function(n)
{
  var flag=0;
  for(var i=0;i<=n/2;i++)
  {
    if(n%i==0)
    {
      flag=1;
      break; 
    }
    if(flag==0)
    {
     console.log("It is prime Number" +n);
    }
    else
    {
     console.log("It is not prime Number" +n);
    }
  }
}

exports.isPerfect=function(n)
{
  var sum=0,i=1;
  while(i<n)
  {
    if(n%i==0)
    {
     sum=sum+i;
    }
    i++;

  }
   if(sum==n)
   {
     console.log("This is perfect number..");
   }
   else
   {
     console.log("This is not perfect number..");
   }
}













