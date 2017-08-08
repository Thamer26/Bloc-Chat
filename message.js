(function() {
    function Message($firebaseArray, $cookies, $filter) {

        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        return {
           getByRoomId: function(roomId) {
               return $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
           },
            send: function(newMessage, currentRoom) {
                var date = new Date();
                var post = {
                    content: newMessage,
                    username: $cookies.get('blocChatCurrentUser'),
                    roomId: currentRoom.$id,
                    sentAt: $filter('date')(date, 'shortTime')
                };
                messages.$add(post);
                this.message = '';
            }
        };
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', '$filter', Message]);
})();
