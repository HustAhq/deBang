
var tool = require('./tool.js');

var jobMassage = {
    pageMain : function (index) {
         $.ajax({
             url : 'http://localhost:8080/src/get/work.txt',
             type : 'GET',
             dataType : 'json',
              success : function (data) {
                var json = {
                    id : 'div1',
                    nowNum: 1,
                    allNum : Math.ceil(data[index].length / 10),
                    callBack : function (now, all){
                        var num = now * 10 < data[index].length ? 10 : data[index].length % 10;
                        var len = ($('.jobclass li').length);
                        var ol = $('.bob ul');
                        var jb = $('.jobclass li');
                        var contentList = document.getElementsByClassName('content-list')[0];
                        var bob = document.getElementsByClassName('bob')[0];
                        show (index, 'bg-head');
                       function show (index, clan) {
                         $(index).addClass(clan);
                            if(bob.innerHTML === ''){
                                $('.bob ul').remove();
                                for(var i = 0; i < num; i++){
                                        var oUl = document.createElement('ul');
                                        for(var n = 0; n < 6; n++){
                                            (function (j) {
                                                if( j === 0){
                                                    $(oUl).append($('<li class="spl"><a href="#">'+ data[index][(now - 1)*10 + i][0] +'</a></li>'));
                                                }
                                                if(j === 1){
                                                    $(oUl).append($('<li class="spl1">' + data[index][(now - 1)*10 + i][1] + '</li>'));
                                                }
                                                if(j === 2){
                                                    $(oUl).append($('<li class="splm">' + data[index][(now - 1)*10 + i][2] + '</li>'));
                                                }

                                                if(j === 3){
                                                    $(oUl).append($('<li class="splw">' + data[index][(now - 1)*10 + i][3] + '</li>'));
                                                }

                                                if(j === 4) {
                                                    $(oUl).append($('<li class="spls">' + data[index][(now - 1)*10 + i][4] + '</li>'));
                                                }
                                                if(j === 5) {
                                                    $(oUl).append($('<li class="date">' + data[index][(now - 1)*10 + i][5] + '</li>'));
                                                }
                                            }(n));
                                        }
                                    bob.appendChild(oUl);
                                }
                            }else{
                                $('.bob ul').remove();
                                for(var i = 0; i < num; i++){
                                    var oUl = document.createElement('ul');
                                    for(var n = 0; n < 6; n++){
                                       (function (j) {
                                            if( j === 0){
                                                $(oUl).append( $('<li class="spl"><a href="#">'+ data[index][(now - 1)*10 + i][0] +'</a></li>') );
                                            }
                                            if(j === 1){
                                                $(oUl).append($('<li class="spl1">' + data[index][(now - 1)*10 + i][1] + '</li>'));
                                            }
                                            if(j === 2){
                                                $(oUl).append($('<li class="splm">' + data[index][(now - 1)*10 + i][2] + '</li>'));
                                            }

                                            if(j === 3){
                                                $(oUl).append($('<li class="splw">' + data[index][(now - 1)*10 + i][3] + '</li>'));
                                            }

                                            if(j === 4) {
                                                $(oUl).append($('<li class="spls">' + data[index][(now - 1)*10 + i][4] + '</li>'));
                                            }
                                            if(j === 5) {
                                                $(oUl).append($('<li class="date">' + data[index][(now - 1)*10 + i][5] + '</li>'));
                                            }
                                       }(n))  
                                    }
                                bob.appendChild(oUl);
                            }
                            }
                       }
                   }
                }
              tool.creatPage(json);
             },
             error: this.err
         });
    },
    err: function (err) {
       console.log(err);
    }
}

module.exports = jobMassage;