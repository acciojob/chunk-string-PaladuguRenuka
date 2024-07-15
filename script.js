function stringChop(str, size) {
  // your code here
	let chunkString = []
	let resString = []
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		chunkString.push(str[i])
		count++
		if (count == size-1) {
			count = 0
			resString.push(chunkString)
		}
	}
	resString.push(chunkString)
	return resString
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
