sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel) {
		"use strict";

		return Controller.extend("sw.controller.S0", {
			onInit: function () {
				this.urlApi = "https://swapi.dev/api/people/";
				this.oModel = new JSONModel();
				this.getView().setModel(this.oModel);

				this.oModelControl = new JSONModel();
				this.getView().setModel(this.oModelControl, "control");
			},

			onChange: function (oEvent) {
				var sValueSearchField = this.oModelControl.getProperty("/searchField");
				//this.sValueSearchField = oEvent.getSource().getValue();
				this.oModel.loadData(this.urlApi + sValueSearchField + "/");
			},

			onDocumentation: function(){
				
			}

		});
	});
