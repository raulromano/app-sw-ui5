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
				this.oModel = this.getOwnerComponent().getModel(); 
				//new JSONModel(); Declarado no component
				// O metodo abaixo nao precisa ser declarado, pois já está implícito.
				//this.getView().setModel(this.oModel);

				// @type sap.ui.model.json.JSONModel
				this.oModel.attachRequestCompleted(this.onRequestCompleted, this);

				var oDataControl = {
					busySimpleForm: false
				}

				this.oModelControl = this.getOwnerComponent().getModel("control");
				//new JSONModel(oDataControl); Declarado no Manifesjson
				// O metodo abaixo nao precisa ser declarado, pois já está implícito.
				//this.getView().setModel(this.oModelControl, "control");
			},

			onChange: function (oEvent) {
				var sValueSearchField = this.oModelControl.getProperty("/searchField");
				this.oModelControl.setProperty("/busySimpleForm", true);
				this.oModel.loadData(this.urlApi + sValueSearchField + "/");

			},

			onRequestCompleted: function (oEvent) {
				this.oModelControl.setProperty("/busySimpleForm", false);
			}

		});
	});
