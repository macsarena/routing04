sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("Test.controller.View1", {
		/**
		 *@memberOf Test.controller.View1
		 */
		onPressButton: function() {
			
			var oComponent = this.getOwnerComponent();
			var oRouter = oComponent.getRouter();
			oRouter.navTo("View2", {
				V2: "a"
			});
			
		}
	});
});