var app = angular.module("BasicsOfForms", []);
app.controller("FormController", function ($scope) {
    $scope.formSubmit = function(event) {
        //alert("Barf!");
        var form = $("#myform").serialize();
        console.log(form);
        event.preventDefault();
    }   
});