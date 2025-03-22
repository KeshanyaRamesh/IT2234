function PrintMsg()
{
	console.log("Hello JS")
}
PrintMsg()
console.log("")
function sum()
{
	return 5+6
	
}
console.log(sum())

console.log("")
function sub(a,b)
{
	return a-b
}
console.log(sub(5,3))

console.log("")
//write a boolean function to find a given number is prime
function Isprime(n = 9, i = 2) {
     if (n < 2) {
        return false;
    }
     if (i > n / 2) {
        return true;
    }
     if (n % i === 0) {
        return false;
    }
     return Isprime(n, i + 1);
}

console.log(Isprime());   

console.log("")

//write recursive function to print numbers from 1-n
function recursive(n, a = 0, b = 1) {
   
    console.log(a);
  
    
    if (n <= 1) {
        return;
    }
  
    
    recursive(n - 1, b, a + b);
}

recursive(6);  


console.log("")


 //arrow function
 const msg = () => ("Hello JS");
console.log(msg());  // This will print "Hello JS" as you are calling the function

 console.log("")
 
 const sum1 = (a,b) =>{return a+b}  
 console.log(sum1(4,3))
 console.log("")
 
const sub1 = (a,b) => {return a-b}
console.log(sub1(7,5))
console.log("")

const mult= (a,b=2)=> {return a*b}
console.log(mult(4,5))
console.log(mult(4))
console.log("")

//Rest parameter 
const mysum = (...n)=>{
	console.log(n)
}
 mysum(12,23,34,45,56,78)
console.log("")

//total of the array 
//method1
const count= (...n)=>{
	let total=0
	 n.forEach((i)=>total=total+i)
	console.log(total)
 }
count(12,23,34,45,56,67,78,89,90)  
console.log("")

//method 2 using reduce its mean it reduce t as one value
const sum2 =(...n)=>
{
	return n.reduce((t,i)=>t=t+i)
} 
console.log(sum2(12,23,34,45))
console.log("")

//callback function  (define another function in a function that function using inside function)
//a function passed an a argument 

const greet=(msg,fun)=>{
	console.log("Hi... "+msg)
	fun
}

greet("Good morning",()=>{console.log("My name is David")})
const multtwo = (n)=>n*3

const myarr = (mul,...n)=>{
	n.forEach((i)=>console.log(mul(i)))
}
myarr(multtwo,2,3,6,4,5)