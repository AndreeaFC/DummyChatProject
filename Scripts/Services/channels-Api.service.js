﻿/// <reference path="../angular.js" />

angular.module("mainModule")
    .service("channelsApi", [
        "$http",
        "$q",
        function ($http, $q) {
            var api = "http://dummyapi.kodalagom.se/api";
            var channels = api + "/channels";

            this.getChannels = function () {
                var deferred = $q.defer();

                $http.get(channels)
                  .then(function (response) {
                      deferred.resolve(response.data);
                  }, function (response) {
                      deferred.resolve([]);
                  });

                return deferred.promise;
            };

            this.addChannel = function (newChannel) {
                var deferred = $q.defer();

                $http.channel(channels, newChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.updateChannel = function (updateChannel) {
                var deferred = $q.defer();

                $http.put(channel + "/" + updateChannel.id, updateChannel)
                    .then(function (response) {
                        deferred.resolve(response.data);
                    }, function (response) {
                        deferred.resolve([]);
                    });

                return deferred.promise;
            };

            this.deleteChannel = function (id) {
                var deferred = $q.defer();

                $http.delete(channel + "/" + id)
                    .then(function (response) {
                        deferred.resolve();
                    }, function (response) {
                        deferred.resolve();
                    });

                return deferred.promise;
            };            
        }
    ])