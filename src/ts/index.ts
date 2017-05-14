import Vue from 'vue';
import { buttons } from './../templates/button.ss.js';
debugger;
Vue.component('custombutton', {
	props: {
		label: {
			type: String,
			required: true
		}
	},
	template: buttons.button()
});

var App = new Vue({
	el: '#app',
	data: {
		test: '123'
	}
});

