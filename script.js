function stringChop(str, size) {
  // your code here
	let chunkString = []
	let myStr = []
	let count = 0;
	if (str.length == null) {
		return []
    //console.log(myStr)
	}
	else{
        str = str.split("")
	for (let i = 0; i < str.length; i++) {
		chunkString.push(str[i])
        //chunkString = chunkString.join()
		count++
		if (count == size) {
			count = 0
            chunkString = chunkString.join("")
			myStr.push(chunkString)
			chunkString = []
		}
	}
    chunkString = chunkString.join("")
	myStr.push(chunkString)
    return myStr
    //console.log(myStr)
	}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
