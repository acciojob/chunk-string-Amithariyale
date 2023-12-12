function stringChop(str, size) {
  // your code here
	let ans=[];
	for(let i=0;i<str.length;i+=size){
		let s;
		if(i+size<str.length)s=str.slice(i,i+size);
		else s=str.slice(i);
		ans.push(s);
	}
	console.log(ans);
	return ans;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = Number(prompt("Enter Chunk Size."));
alert(stringChop(str, size));
