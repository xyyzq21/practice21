const array = [1, 2, 3, 4, 5, 6, 7, 8];
function sandp(arr){
	let s=0;
	let p=1;
for (let i=0; i<arr.length; i++){
	s=s+ +arr[i];
	p=p* +arr[i];
}
console.log('Сумма: '+s);
console.log('Произведение: '+p);
}

sandp(array);