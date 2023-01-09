import * as _ from 'lodash';

import { print } from './print';

export default function () {
	const element = document.createElement('div');
	print();
	console.log(process.env.SOME_PASS);

	element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ');

	return element;
}