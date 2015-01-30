var app = angular.module('parseQ');

    app.factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers = {'X-Parse-Application-Id': 'WF1YVkGn4Iovn81jbd2SlbVnfdr0lzqvTNTtHzGb', 'X-Parse-REST-API-Key': 'nnzj4wIHTFX7Gdq1YE8zzRF6vrhzn4UPwlDKntWm'}
          return config;
        }
      };
    });