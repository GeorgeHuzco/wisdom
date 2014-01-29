'use strict';

var queryPrefix = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=";
var apiKey = "AIzaSyBRsops2-sGNOAR2KzHvZwYTgqjPWEbD9k";

/* Controllers */

angular.module('myApp.controllers', [])

    .controller('MyCtrl1', ['$scope', '$http', function ($scope, $http) {
        var player = null,
            viewWidth = document.getElementById("guts").clientWidth,
            aspectRatio = 16 / 9,
            padding = 0.95,
            width = viewWidth * padding,
            height = width / aspectRatio,
            videoHtml,
            options = "";


        $scope.search = function () {
            if (!$scope.query) {
                $scope.query = "tull";
            }
            options = $scope.fullAlbum ? "+full+album" : "";
            var queryString = queryPrefix + ($scope.query).replace(" ", "+") + options + "&key=" + apiKey;
            console.log("do the search for: " + queryString);

            $http.get(queryString).success(function (data) {
                $scope.vids = data.items;
                if (data && data.items) {
                    $scope.loadVideo(data.items[0].id.videoId);
                }
            });
        };

        $scope.loadVideo = function (videoId) {
            console.log('Load video with id = ' + videoId);
            var url = 'http://www.youtube.com/watch?v=' + videoId;

            if (player) {
                player.dispose();
                $("#vid").remove();
            }

            console.log("width: " + width + " height: " + height);

            videoHtml = '<video id="vid" src="" class="video-js vjs-default-skin" controls preload="auto" ></video>';
            $("#player").prepend(videoHtml);

            window.scrollTo(0, 0);

            videojs('vid', { "techOrder": ["youtube"], "src": url }).ready(function () {
                player = this;
                player.width(width);
                player.height(height);
                player.play();
            });
        };
    }])

    .controller('MyCtrl2', [function () {}]);
