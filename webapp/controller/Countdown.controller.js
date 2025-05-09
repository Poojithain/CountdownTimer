sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("countdowntimer.countdowntimer.controller.Countdown", {
        onInit() {
            let myTimer = {
                "days": 0,
                "hours": 0,
                "minutes": 0,
                "seconds": 0
            };
            let myTilesModel = new JSONModel(myTimer);
            this.getView().setModel(myTilesModel, "timer");
            setInterval(this.calculationTime.bind(this),1000);
        },

        calculationTime: function () {
            let techDate = new Date("Nov 5 2025");
            let currentDate = new Date();
            let diff = techDate.getTime() - currentDate.getTime();

            let days = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((diff % (1000 * 60)) / 1000);

            let timerModel = this.getView().getModel("timer");
            timerModel.setData({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        }
    });
});
