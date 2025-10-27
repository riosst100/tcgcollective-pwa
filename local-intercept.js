/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

function localIntercept(targets) {
	// Register Xendit payment UI component with Venia build target
	// Place component alongside other payments in the marketplace package for consistency
	const veniaUi = targets.of('@magento/venia-ui');
	veniaUi.checkoutPagePaymentTypes.tap(payments => {
		payments.add({
			paymentCode: 'xendit',
			importPath:
				'@riosst100/pwa-marketplace/src/components/PaymentMethod/Xendit/xendit'
		});
	});
}

module.exports = localIntercept;
