var app = angular.module("BasicsOfForms", []);
app.controller("FormController", function ($scope) {
    $scope.formSubmit = (event) => {
        //alert("Business!");
        var form = $("#myform").serialize();
        console.log(form);

        event.preventDefault();
    }
});