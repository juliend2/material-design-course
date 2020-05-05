import {MDCTextField} from '@material/textfield';
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCIconButton} from '@material/icon-button';


const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));


new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

