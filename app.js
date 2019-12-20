'use strict';

const Homey = require('homey');

class PioneerApp extends Homey.App {
	onInit() {
		this.log(`${Homey.manifest.id} started.`);
			});
	}
}

module.exports = PioneerApp;
