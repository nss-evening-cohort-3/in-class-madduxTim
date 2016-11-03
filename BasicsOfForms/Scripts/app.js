var app = angular.module("BasicsOfForms", []);
app.controller("FormController", function ($scope) {
    $scope.formSubmit = function(event) {
        alert("Barf!");
        event.preventDefault();
    }   
});