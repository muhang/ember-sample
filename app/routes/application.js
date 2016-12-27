import Ember from "ember";
import ProgressBar from "progressbar.js/dist/progressbar.js"

export default Ember.Route.extend({
	setupController: function () {
		console.log('setup controller');
		console.log(Ember);
		console.log(ProgressBar);

		Ember.run.schedule('afterRender', this, function () {
			// ~~~~~~ Run Custom JS Below Here ~~~~~~~~~~
			$.document.on('ready', function () {
				var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
				bar.animate(1);

			});
		});
	}
});


