(function() {

    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });

        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeCtrl as home',
                templateUrl: '/templates/home.html'
            })
    }

    function BlocChatCookies($cookies, $uibModal, $firebaseAuth) {
        var modalInstance = $uibModal.open({
            templateUrl: '/templates/loginModal.html',
            controller: 'LoginModalCtrl',
            controllerAs: 'login',
            backdrop: 'static',
            keyboard: false
        });
        modalInstance.result.then(function(user) {
            this.username = user.username;
            this.email =user.email;
            this.password = user.password;
            $cookies.put('blocChatCurrentUser', this.username);
            var auth = $firebaseAuth();
            auth.$signInWithEmailAndPassword(this.email, this.password).then(
                function(firebaseUser) {
                    console.log("Signed in as: " + firebaseUser.uid);
                }).catch(function(error) {
                    console.error("Authentication failed: ", error);
                });
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log(currentUser);
        });
    }

    angular
        .module('blocChat', ['ngCookies', 'ui.bootstrap','ui.router', 'firebase'])
        .config(config)
        .run(['$cookies', '$uibModal', '$firebaseAuth', BlocChatCookies]);

})();
