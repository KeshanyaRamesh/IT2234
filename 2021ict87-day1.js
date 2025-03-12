//hello print
		 console.log("HEllo world")
		 
// variable define & do mathematic operations
 let num1=40;
 let num2=20;
 
 
 let sum= num1+num2;
 let sub= num1-num2;
 let mult= num1*num2;
 let div= num1/num2;
 
 console.log("Sum"+sum)
 console.log("sub"+sub)
 console.log("Mult"+mult)
 console.log("div"+div)
 
 //var 
 var x=10
 var x=20 
 console.log("x: "+x)
 
 
 var num1=40;
 var num2=20;
 
 
 var sum= num1+num2;
 var sub= num1-num2;
 var mult= num1*num2;
 var div= num1/num2;
 
 console.log("Sum"+sum)
 console.log("sub"+sub)
 console.log("Mult"+mult)
 console.log("div"+div)
 
 const z=20     //can't  change the value of z 
 
 
 //print 1-10 numbers
 
 for(var i=1;i<=10;i++)
 {
	 console.log(i)
 }
 
 console.log("");
 //print odd numbers form 1-10
 for(i=1;i<=10;i++)
 {
	 if(i%2==1)
	 {
		 console.log(i)
	 }
	 else{
		 continue;
	 }
 }
 console.log("");
 
 
 //print the numbers in reverse from 10-1
 
 for(let i=10;i>=1;i--)
 {
	 console.log(i);
 }
 
 console.log("");
 
 //4321 - 5 - 9876
 var n=9;
 var i=console.log(parseInt(n/2));
 var k=i-1;
 while(k>0)
 {
	 console.log(k);
	 k--;
 }
 console.log(parseInt(n/2));
 var j=n;
 while(j>i)
 {
	 console.log(j);
	 j--;
 }