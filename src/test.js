var maxPoints = function(nums) {
	return nums.filter((n, i, arr) => n != arr[i+1]);
};

console.log(maxPoints([1,1,2]));
// maxPoints([[0,0],[2,2],[-1,-1]])