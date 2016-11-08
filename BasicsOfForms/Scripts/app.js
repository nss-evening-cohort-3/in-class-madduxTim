var app = angular.module("BasicsOfForms", []);
app.controller("FormController", function ($scope, $http, $document) {

    $scope.user = {
        email: "",
        password: "",
        passwordconfirmation: ""
    }

    $scope.formSubmit = function (event) {
        event.preventDefault();
        $scope.user.email = $document.find("Email").val();
        $scope.user.password = $document.find("Password").val();
        $scope.user.passwordconfirmation = $document.find("PasswordConfirmation").val();
        console.log($scope.user);
        //$http.post("/api/Response", $scope.user);
        alert(`Form Submit called. You submitted: ${$scope.user}`);
    };
});