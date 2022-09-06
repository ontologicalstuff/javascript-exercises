const fibonacci = function(fibNum) {
    let arr = [1, 1];
    let seqNum = 0;
if (fibNum == 1 || fibNum == 2) return 1;
if (fibNum < 0) return "OOPS";
		fibNum -=1;
for (let i = 1; i < fibNum; i++) {
     seqNum = (arr[i] + arr[i -1]);
     arr.push(seqNum);
     }
		 return seqNum;
};

// Do not edit below this line
module.exports = fibonacci;
