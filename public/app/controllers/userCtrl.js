angular.module('userControllers', [])

.controller('regCtrl', function($http, $location, $timeout) {

    var app = this;
   this.regUser = function(regData) {
       app.errorMsg = false;
       app.loading = true;
        console.log('form submtted');
        $http.post('/api/users', this.regData).then(function(data){
            console.log(data.data.success);
            console.log(data.data.message);
            if (data.data.success) {
                app.loading = false;
                // create success message
                app.successMsg = data.data.message;
                // redirect to home page
                $timeout(function() {
                    $location.path('/');
                }, 2000);
            } else {
                app.loading = false;
                // create an error message
                app.errorMsg = data.data.message;
            }
        });
   };
});