const array = [1, 2, 3, 4, 6, 7, 8];
function average(arr){
	let sum=0;	
for (let i=0; i<arr.length; i++){
	sum=sum+ +arr[i];	
}
sum=sum/arr.length;
console.log('Среднее арифметическое: '+sum);
return(sum);
}
