angular.module('userControllers', [])

.controller('regCtrl', function($http) {

   this.regUser = function(regData) {
        console.log('form submtted');
        $http.post('/api/users', this.regData)
        .then(function(data){
            console.log(data);
        });
   };
});