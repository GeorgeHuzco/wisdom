'use strict';

/* global angular, $, videojs */

var queryPrefix = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";
var apiKey = "AIzaSyBRsops2-sGNOAR2KzHvZwYTgqjPWEbD9k";

/* Controllers */

angular.module('myApp.controllers', [])

    .controller('MyCtrl1', ['$scope', '$http', function ($scope, $http) {

        $scope.search = function () {	
            var queryString = queryPrefix + ($scope.query).replace(" ", "+") + "&key=" + apiKey;
            console.log("do the search for: " + queryString);

            $http.get(queryString).success(function (data) {
                $scope.vids = data.items;
                console.log($scope.vids[0].snippet.description);
                console.log($scope.vids[0].snippet.thumbnails.high.url);
            });
        };

        // inital values
        $scope.query = "Black Sabbath";

        var player = null;
        $scope.loadVideo = function (event) {
            var videoId = event.currentTarget.id;
            console.log('Load video with id = ' + videoId);
            var url = 'http://www.youtube.com/watch?v=' + videoId;

            if (player) {
                player.dispose();   
                $("#vid").remove();
                var videoHtml = '<video id="vid" src="" class="video-js vjs-default-skin" controls preload="auto" width="640" height="360"></video>';
                $("#player").prepend(videoHtml);   
            }

            videojs('vid', { "techOrder": ["youtube"], "src": url }).ready(function () {
                player = this;
                player.play();
            });
        };
    }])

    .controller('MyCtrl2', [function () {}]);
