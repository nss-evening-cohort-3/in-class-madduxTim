var app = angular.module("BasicsOfForms", []);
app.controller("FormController", function ($scope) {
    $scope.formSubmit = () => {
        alert("Business!");
    }
});