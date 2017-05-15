import Vue from 'vue';
import button_templates from './../templates/button.ss';

Vue.component('custombutton', {
	props: {
		label: {
			type: String,
			required: true
		},
		type: String,
		form: String
	},
	template: button_templates.buttons.button()
});

var App = new Vue({
	el: '#app',
	data: {
		test: '123'
	}
});