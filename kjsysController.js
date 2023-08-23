(function () {
    'use-strict';

    angular.module('myApp', []).controller('myController', myController);
    myController.$inject = ['$scope'];
    function myController($scope) {

        var myCtrl = this;
        var toggler = true;
        myCtrl.$onInit = myControllerPageInit;

        function myControllerPageInit() {
            myCtrl.dashboardContent = true;
            myCtrl.inboxContent = false;
            myCtrl.patientChartContent1 = false;
            myCtrl.patientChartContent3 = false;
            myCtrl.patientChartContent2 = false;
            myCtrl.leftCollapseClass = 'left_block';
            myCtrl.rightExpandClass = 'right_block';
            myCtrl.topNavPracticeBaseOn_1 = true;
            myCtrl.activeButton = 1;
        }

        myCtrl.toggleSideBar = function () {
            toggler = !toggler;
            if (!toggler) {
                myCtrl.leftCollapseClass = 'left_block_hidden';
                myCtrl.rightExpandClass = 'right_block_expanded';
            } else {
                myCtrl.leftCollapseClass = 'left_block';
                myCtrl.rightExpandClass = 'right_block';
            }
        }

        myCtrl.tabsClick = function (buttonType) {
            myCtrl.activeButton = buttonType;
            if (buttonType == 1) {
                myCtrl.dashboardContent = true;
                myCtrl.inboxContent = false;
                myCtrl.patientChartContent1 = false;
                myCtrl.patientChartContent3 = false;
                myCtrl.patientChartContent2 = false;
            }
            else if (buttonType == 2) {
                myCtrl.dashboardContent = false;
                myCtrl.inboxContent = true;
                myCtrl.patientChartContent1 = false;
                myCtrl.patientChartContent3 = false;
                myCtrl.patientChartContent2 = false;
            }
            else if (buttonType == 3) {
                myCtrl.dashboardContent = false;
                myCtrl.inboxContent = false;
                myCtrl.patientChartContent1 = true;
                myCtrl.patientChartContent3 = false;
                myCtrl.patientChartContent2 = false;
            }
            else if (buttonType == 4) {
                myCtrl.dashboardContent = false;
                myCtrl.inboxContent = false;
                myCtrl.patientChartContent1 = false;
                myCtrl.patientChartContent2 = true;
                myCtrl.patientChartContent3 = false;
            }
            else if (buttonType == 5) {
                myCtrl.dashboardContent = false;
                myCtrl.inboxContent = false;
                myCtrl.patientChartContent1 = false;
                myCtrl.patientChartContent3 = true;
                myCtrl.patientChartContent2 = false;
            }
        }
    }

})()