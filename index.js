const fn = (a) => {
	console.log(a);
	if (Array.isArray(a)) {
		return [...a];
	} else {
		return a;
	}
}

fn([1,2,3,4,5]);