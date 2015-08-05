angular.module('starter.services', [])


.factory('Login', function(){
  var app = {
    username: window.localStorage.getItem('app.username'),
    password: window.localStorage.getItem('app.password')
  }
  return {
    all: function() {
      return app;
    }
  }
})

//pFvKE8Vv2cqnebfLOsOmVw
//052f8033ace47ea94331867fc0dce083

.factory('Metrics', function(){
  var url = "https://api.chartmogul.com/v1/metrics/all?start-date=2015-07-01&end-date=2015-07-31&interval=month",
      accountToken = window.localStorage.getItem('app.username'),
      secretKey    = window.localStorage.getItem('app.password'),
      metrics      = [],
      xmlHttp      = new XMLHttpRequest();
      
      xmlHttp.open( "GET", url, false );
      xmlHttp.setRequestHeader( 'Authorization', 'Basic ' + btoa( accountToken + ':' + secretKey ) )
      
  function getMetrics() {

    xmlHttp.send();

    var response = JSON.parse(xmlHttp.response),
            data = response.entries[0];
                 
    for (var key in data) {
      i = 0
      if (data.hasOwnProperty(key)) {
        metrics.push({
          id: i++,
          name: key,
          value: data[key]
        })
      }
    }
  }

  getMetrics();

  return {
    all: function() {
      return metrics;
    }
  };
});
