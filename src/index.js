import './style.scss';

async function getComponent () {
	const element = document.createElement('div');
	
	try {
		const { default: _ } = await import('lodash');
	} catch (error) {
		console.log('An error occurred while loading the component');
	}

	element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}


getComponent().then((component) => {
  document.body.appendChild(component);
});