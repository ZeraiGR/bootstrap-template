import _ from 'lodash';
import './style.scss';
import Icon from './webpack-icon.svg';
import Data from './data.json5';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');

	const myIcon = new Image();
	myIcon.src = Icon;

	element.appendChild(myIcon);

	console.log(Data.body);

  return element;
}

document.body.appendChild(component());