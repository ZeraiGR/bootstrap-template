var minDeletionSize = function(strs) {
    let res = 0;
    let n = Math.max(strs.length, strs[0].length);
		let m = Math.min(strs.length, strs[0].length);

		if (m === 1) {
			m = n;
			n = 1;
		}

    for (let i = 0; i < n; i++) {
			let test = '';
			for (let j = 0; j < m; j++) {
				if (strs[j][i]) {
					test += strs[j][i];
				}
			} 
			console.log(test);
			if (test !== test.split('').sort().join('')) {
					res++;
			}  
    }

    return res;
};

console.log(minDeletionSize(["x","q"]));