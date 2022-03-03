
// app.js
angular.module('maycur', ['ionic','maycur.controllers']);
angular.module('maycur.controllers', []);

(function(){
  // 监听基座下发的数据变化,tab切换
  const dataListener = (data) => {
    switch (data.type) {
        case 'switchTab':
            console.log('microNg switchTab')
            // 使用$state.go有延迟，keep-alive下会闪屏
            window.location.hash = '#/microNg' + data.path
            return;
    }
  }
  window.microApp && window.microApp.addDataListener(dataListener, true)

  // router.js
  angular.module('maycur')
    .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
      $locationProvider.hashPrefix('/microNg').html5Mode(false);

      $stateProvider
        .state('main', {
          url: '/main',
          abstract: true,
          templateUrl: 'http://localhost:7105/views/main.html',
          controller: 'mainCtrl as vm',
          css: 'assets/css/index.css'
        })
        .state('main.page1', {
          url: '/page1',
          views: {
              'main-home': {
                  templateUrl: 'http://localhost:7105/views/page1',
              }
          }
        })
        .state('main.page2', {
          url: '/page2',
          views: {
              'main-home': {
                  templateUrl: 'http://localhost:7105/views/page2',
                  controller: 'pagectrl as vm',
              }
          }
        })

      $urlRouterProvider.otherwise(function ($injector) {
        var $state = $injector.get('$state');
        $state.go('main.page1');
      });
    }]);
})();