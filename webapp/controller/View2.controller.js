sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Test.controller.View2", {

		onButtonPress: function() {
			
			var oComponent = this.getOwnerComponent();
			var oRouter = oComponent.getRouter();
			oRouter.navTo("View3", {
				V3: "b"
			});
			
		}

	});

});