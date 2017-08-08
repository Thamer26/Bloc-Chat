(function() {
    function ForgotModalCtrl($uibModalInstance) {
        this.ok = function(isValid) {
            if (isValid) {
                $uibModalInstance.close(this.email);
            }
        };
        this.cancel = function() {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ForgotModalCtrl', ['$uibModalInstance', ForgotModalCtrl]);
})();
