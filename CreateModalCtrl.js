(function() {
    function CreateModalCtrl($uibModalInstance) {
        this.ok = function(isValid) {
            if (isValid) {
                var user = {
                    username: this.username,
                    email: this.email,
                    password: this.password
                };
                $uibModalInstance.close(user);
            }
        };
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('CreateModalCtrl', ['$uibModalInstance', CreateModalCtrl]);
})();
