angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,Topics) {
  $scope.topics = Topics.all();
  $scope.remove = function(topic) {
    Topics.remove(topic);
  };
})

.controller('TopicDetailCtrl', function($scope, $stateParams, Topics) {
  $scope.topic = Topics.get($stateParams.topicId);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('GamesCtrl', function($scope, Games) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.games = Games.all();
  $scope.remove = function(game) {
    Games.remove(game);
  };
})

.controller('GameDetailCtrl', function($scope, $stateParams, Games) {
  $scope.game = Games.get($stateParams.gameId);
})

.controller('QuizCtrl', function($scope) {

})

.controller('QuizDetailCtrl', function($scope) {
  
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
;
