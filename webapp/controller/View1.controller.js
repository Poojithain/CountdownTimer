sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller,JSONModel) => {
    "use strict";

    return Controller.extend("countdowntimer.countdowntimer.controller.View1", {
        onInit() {
            let model = new JSONModel("../model/AppData/AppTiles.json")
            this.getView().setModel(model,"tiles")

        },
        press:function(oRoute){
            let oRouter=this.getOwnerComponent().getRouter()
            oRouter.navTo(oRoute)
        }
    });
});