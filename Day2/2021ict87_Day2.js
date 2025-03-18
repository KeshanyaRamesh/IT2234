//print 3 numbers using Array
let num1=[2,23,34]
for(let i=0;i<3;i++)
{
	console.log(num1[i])
}
console.log("")
//print  string values using Array
let name=["kesha","Shiro","Sara"]
for(let i=0;i<3;i++)
 {
	console.log(name[i])
}

console.log("")
//forEach arrow function
let num=[2,23,34]
num.forEach((n) =>{
	console.log(n)
})

console.log("")
//max number
let number1=[2,23,34,22]
let max=0
number1.forEach((n) => {
	/*if(max<n)
	{
		max=n
	}*/
	
	(max<n)&&(max=n)
	 
})
console.log("max:"+max)

console.log("")
//nested array 
let number=[[1,2,30],[5,6],[8,5,3]]
 
	for(let i=0;i<3;i++)
	{
		console.log(number[i])
		
	}
	
	console.log("")
//sir's
	number.forEach((n) =>{
		n.forEach((i)=>{
			console.log(n)
		}
		)
	})
	
	console.log("")
//find common elements between a,b
	let a=[4,5,6,3,7]
	let b=[8,3,2,1,5]
	for(let i=0;i<5;i++)
	{
		for(let j=0;j<5;j++)
		{
			if(a[i]==b[j])
			{
				console.log("Common element:"+a[i])
			}
		}
	}
	
	console.log("")
	//write a code to find the all pairs that sum up to the target
let target= 7
let mid = parseInt(target/2)+1
let max1=target-1
let srt=1
 
for(let i=srt;i<mid;i++)
{
	for(let j=max1;j>=mid;j--)
	{
		if(i+j==target)
		{
			console.log("Pair: "+i+","+j)
		}
	}
}

console.log("")
//find most frequent number
let c = [4, 8, 3, 4, 3, 21, 8, 4];

let max2 = 0;
let mostFrequentNumber = 0; 

for (let i = 0; i < c.length; i++) {
    let count1 = 0; 
    
    for (let j = 0; j < c.length; j++) {
        if (c[i] === c[j]) {
            count1++; 
        }
    }
    
    if (count1 > max2) { 
        max2 = count1;
        mostFrequentNumber = c[i]; 
    }
}

console.log("Most frequent number: " + mostFrequentNumber);

console.log("")
//array operation
//push and pop
arr3=['a','b','d']
console.log(arr3)
arr3.push('e')
console.log(arr3)
arr3.pop()
console.log(arr3)

console.log("")

//JSON 
//{key:value}
let student={regno:'2021ICT87',name:'Keshanya',age:22,course:'IT',skills:['c++','JAVA','JS']}
console.log(student.name)
console.log(student)
let students=[{regno:'2021ICT86',name:'Shiromi',age:22,course:'IT'},{regno:'2021ICT51',name:'Sharanjana',age:22,course:'IT'},{regno:'2021ICT200',name:'Kesha',age:22,course:'IT'}]
console.log(students)

console.log("")

//define 10 students in JSON
//store it in array
let std=[{regno:'2021ict01',gender:'female',course:'IT',gpa:2.78},{regno:'2021ict02',gender:'female',course:'AMC',gpa:3.10},{regno:'2021ict03',gender:'male',course:'IT',gpa:3.44},
         {regno:'2021ict04',gender:'female',course:'IT',gpa:2.99},{regno:'2021ict05',gender:'male',course:'IT',gpa:2.89},{regno:'2021ict06',gender:'male',course:'BIO',gpa:3.50},
		  {regno:'2021ict07',gender:'female',course:'AMC',gpa:2.45},{regno:'2021ict08',gender:'male',course:'IT',gpa:2.83},{regno:'2021ict09',gender:'female',course:'AMC',gpa:3.78},
		   {regno:'2021ict10',gender:'male',course:'BIO',gpa:2.67}]
console.log(std)
	
	console.log("")
	
//find the female students
for(let i=0;i<10;i++)
{
	if(std[i].gender=='female')
	{
		console.log(std[i].regno)
	}
}

console.log("")
//find the students who are following IT course
for(let i=0;i<10;i++)
{
	if(std[i].course=='IT')
	{
		console.log(std[i].regno)
	}
}
console.log("")

//find the max and gpa average
 //max gpa
  max=std[0].gpa
  for(let i=0;i<10;i++)
  {
	  if(std[i].gpa>max)
	  {
		  max=std[i].gpa
	  }
  }
  console.log("Max: "+max)
  
  console.log("")
  //average
  let total=0
  for(let i=0; i<10;i++)
  {
	  total=total+std[i].gpa
  }
  let avg=total/10
  console.log("Average gpa: "+avg)