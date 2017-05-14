import Vue from 'vue';
import { buttons } from './../templates/button.ss';

Vue.component('custombutton', {
	props: {
		label: {
			type: String,
			required: true
		},
		type: String,
		form: String
	},
	template: buttons.button()

});

var App = new Vue({
	el: '#app',
	data: {
		test: '123'
	}
});

