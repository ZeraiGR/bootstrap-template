import _ from 'lodash';
import './style.scss';
import Icon from './webpack-icon.svg';
import Data from './data.json5';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');
	const btn = document.createElement('button');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.classList.add('hello');

	const myIcon = new Image();
	myIcon.src = Icon;
	myIcon.style.width = `20px`;
	myIcon.style.height = `20px`;

	element.appendChild(myIcon);
	element.appendChild(btn);

	console.log(Data.body);

  return element;
}

document.body.appendChild(component());