declare var require: {
	<T>(path: string): T;
	(paths: string[], callback: (...modules: any[]) => void): void;
	ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

import Vue from 'vue';

Vue.component('custombutton', {
	props: {
		label: {
			type: String,
			required: true
		},
		type: String,
		form: String
	},
	template: require('./../templates/button.ss').buttons.button()
});

var App = new Vue({
	el: '#app',
	data: {
		test: '123'
	}
});

