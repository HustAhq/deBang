
var jobMassage = require('./jobMassage.js');
var page = {
    page : function () {
       jobMassage.pageMain(0);
       var bob = document.getElementsByClassName('bob')[0];
       var  oBtn =  document.getElementsByClassName('jobclass')[0].getElementsByTagName('li');
        for(var i = 0; i < oBtn.length; i++){
            (function (j) {
               oBtn[j].onclick = function () {
                   for(var n = 0; n < oBtn.length; n++){
                       oBtn[n].className = '';
                   }
                   this.className = 'bg-head';
                   jobMassage.pageMain(j);
                    return false;
               }
            }(i));
         }
    }
}

module.exports = page;
