

var silder = {
    initM : function () {
        var oLi = $('.main22 .move');
        var intiData = {
                'left': '900px',
                'top': '50%',
                'margin-top':'0px',
                'z-index': '1',
                'height':'0px'
            }
            var intiData1 = {
                'width':'329px',
                'height':'190px',
                'opacity':'1',
                'z-index':'10',
                'top':'50%',
                'left':'0px',
                'margin-top':'-95px'
            }
            var intiData2 = {
                'width':'410px',
                'height':'238px',
                'opacity':'1',
                'z-index':'60',
                'top':'50%',
                'left':'43px',
                'margin-top':'-119px'
            }
            var intiData3 = {
                'width':'512px',
                'height':'296px',
                'opacity':'1',
                'z-index':'100',
                'top':'50%',
                'left':'86.67px',
                'margin-top':'-148px'
            }
            var intiData4 = {
                'width':'640px',
                'height':'370px',
                'opacity':'1',
                'z-index':'400',
                'top':'0',
                'left':'130px',
                'margin-top':'0px'
            }
            var intiData5 = {
                'width':'512px',
                'height':'296px',
                'opacity':'1',
                'z-index':'100',
                'top':'50%',
                'left':'301px',
                'margin-top':'-148px'
            }
            var intiData6 = {
                'width':'410px',
                'height':'238px',
                'opacity':'1',
                'z-index':'60',
                'top':'50%',
                'left':'447px',
                'margin-top':'-119px'
            }
            var intiData7 = {
                'width':'328px',
                'height':'190px',
                'opacity':'1',
                'z-index':'10',
                'top':'50%',
                'left':'572.32px',
                'margin-top':'-95px'
            }
            oLi.css(intiData);
            oLi.eq(0).css(intiData1);
            oLi.eq(1).css(intiData2);
            oLi.eq(2).css(intiData3);
            oLi.eq(3).css(intiData4);
            oLi.eq(4).css(intiData5);
            oLi.eq(5).css(intiData6);
            oLi.eq(6).css(intiData7);
    },
    play : function () {
        var oLi = $('.main22 .move');
        var flag = true;
        var index = 0;
        var data2 = {
            'width':'328px',
            'height':'190px',
            'opacity':'1',
            'z-index':'10',
            'top':'50%',
            'left':'0px',
            'margin-top':'-90px'
        }
         var data3 = {
                'width':'410px',
                'height':'238px',
                'opacity':'1',
                'z-index':'60',
                'top':'50%',
                'left':'43px',
                'margin-top':'-119px'
        }
       var data4 = {
                'width':'512px',
                'height':'296px',
                'opacity':'1',
                'z-index':'100',
                'top':'50%',
                'left':'86.67px',
                'margin-top':'-148px'
        }
        var data5 = {
                'width':'640px',
                'height':'370px',
                'opacity':'1',
                'z-index':'400',
                'top':'0',
                'left':'130px',
                'margin-top':'0px'
        }

        var data6 = {
                'width':'512px',
                'height':'296px',
                'opacity':'1',
                'z-index':'100',
                'top':'50%',
                'left':'301px',
                'margin-top':'-148px'
        }
       var data7 = {
            'width':'410px',
            'height':'238px',
            'opacity':'1',
            'z-index':'60',
            'top':'50%',
            'left':'447px',
            'margin-top':'-119px'
        }
         var data8 = {
                'width':'328px',
                'height':'190px',
                'opacity':'1',
                'z-index':'10',
                'top':'50%',
                'left':'572.32px',
                'margin-top':'-90px'
         }

         function leftMove(){
            if(flag){
                flag = false;
                oLi.css('z-index', '1');
                oLi.eq((index + 1 ) %  7).animate(data2);
                oLi.eq((index + 2) % 7).animate(data3);
                oLi.eq((index + 3) % 7).animate(data4);
                oLi.eq((index + 4) % 7).animate(data5);
                oLi.eq((index + 5) % 7).animate(data6);
                oLi.eq((index + 6) % 7).animate(data7);
                oLi.eq((index + 7) % 7).css({'left':'900px'});
                oLi.eq((index + 7) % 7).animate(data8, function (){
                    index++;
                    flag = true;
                });
            }
         }
        function rightMove (){
            if(flag){
                flag = false;
                oLi.css('z-index', '1');
                
                oLi.eq((index - 1) % 7).css({'left':'-328px'});
                oLi.eq((index - 1) % 7).animate(data2);
                oLi.eq(index % 7).animate(data3);
                oLi.eq((index + 1) % 7).animate(data4);
                oLi.eq((index + 2) % 7).animate(data5);
                oLi.eq((index + 3) % 7).animate(data6);
                oLi.eq((index + 4) % 7).animate(data7);
                oLi.eq((index + 5) % 7).animate(data8, function (){
                    index--;
                    flag = true;
                });

            }
        }

        $('.left').on('click', function (){
            leftMove();
        });
        $('.right').on('click', function (){

           rightMove();
        });
   }
   
}

module.exports = silder;