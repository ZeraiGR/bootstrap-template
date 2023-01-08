import './style.scss';
import * as _ from 'lodash';
import { print } from './print';

class Game {
    name = 'Violin Charades'
}
const myGame = new Game()

function component() {
	const element = document.createElement('div');
	print();

	element.innerHTML = _.join(['Hello', 'webpack))'], ' ');

	return element;
}

document.body.appendChild(component());
