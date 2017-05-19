require('../less/head.less');
require('../less/navigation.less');
require('../less/container.less');
require('../less/footer.less');
var search = require('../js/serch.js');
search.focu();

var city = require('../js/city.js');
city.aj();

var entry1 = require('../js/entry1.js');
entry1.page();

var silder = require('./silder.js');
silder.play();
silder.initM();


