var app = angular.module("BasicsOfForms", []);
app.controller("FormController", function ($scope,$http) {
        //alert("Business!");
        //var form = $("#myform").serializeArray();
        //console.log(JSON.stringify(user));
        //console.log(form);//

    $scope.user = {
        email: "",
        password: "",
        passwordconfirmation: ""
    }

    $scope.formSubmit = function (event) {
        //alert("Form Submit called!");
        //var form = $("#myform").serialize();
        //console.log(user);

        $scope.user.email = $("#myform input[name=Email]").text();
        $scope.user.password = ("#myform input[name=Password]").val();
        $scope.user.passwordconfirmation = ("#myform > input[name=PasswordConfirmation]").text();

        $http({
            method: "POST",
            url: "/api/AngularApi",
            data: $scope.user
        }).then(function (response) {
            console.log("POST successful");
            console.log($scope.user);
        }).then(function (error) {
            console.log("Error");
        })

        event.preventDefault();
    };
});