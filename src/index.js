import { render } from 'react-dom';
import { Hello } from './Hello';
import './index.css'

const bodyElement = document.querySelector('body');
const divElement = document.createElement('div');
bodyElement.appendChild(divElement);
render(<Hello/>, divElement);
const x = { a: 2, b: 3 };
const y = { ...x, c: 5 };
console.log(y);
