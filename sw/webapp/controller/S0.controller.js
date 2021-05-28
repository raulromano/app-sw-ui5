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
				this.sValueSearchField = this.byId("idSearch");
				this.urlApi = "https://swapi.dev/api/people/";
				this.oModel = new JSONModel();
				this.getView().setModel(this.oModel);
			},

			onChange: function (oEvent) {
				this.sValueSearchField = oEvent.getSource().getValue();
				this.oModel.loadData(this.urlApi + this.sValueSearchField + "/");
			}

		});
	});
