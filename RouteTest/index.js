var server=require('./ServerTest');
var router=require('./routetest1');
server.start(router.route);
