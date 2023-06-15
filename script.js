function letterCombinations(input_digit) {
  //Complete the function
	let table={
		"2":"abc",
		"3":"def",
		"4":"ghi",
		"5":"jkl",
		"6":"mno",
		"7":"pqrs",
		"8":"tuv",
		"9":"wxyz"
	}
	let ans=[];

	function solve(currIdx,calStr) {
		if(input_digit.length<=currIdx){
			ans.push(calStr);
			return;
		}
		let currChar=input_digit[currIdx];
		for(let i=0;i<table[currChar].length;i++)
			{
				solve(currIdx+1,calStr+table[currChar][i]);
			}
	}
	solve(0, "")
	return ans;
}
module.exports = letterCombinations;
