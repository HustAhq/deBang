
var tool = {
    creatPage : function (json) {
        if(!json.id) {
             return false;
           }
           var $Div = document.getElementById(json.id);
           var nowNum = json.nowNum;//当前的页数
           var allNum = json.allNum;//总页数
           var callBack = json.callBack;
            $('#div1').get(0).innerHTML = '';
            if(nowNum > 5 && allNum > 9){
                var $A = document.createElement('a');
                $A.href = '#1';
                $A.innerText = '首页';
                $Div.appendChild($A);
            }
            if(nowNum > 2) {
                var $A = document.createElement('a');
                $A.href = '#' + (nowNum - 1);
                $A.innerText = '上一页';
                $Div.appendChild($A);
            }

            if(allNum < 9) {
                for(var i = 1 ; i <= allNum; i++){
                    var $A = document.createElement('a');
                    $A.href = '#' + i;
                    if( i === nowNum ){
                       $A.innerText = i ;
                    }else{
                       $A.innerText = '[' + i + ']';
                    }
                    $Div.appendChild($A);
                }
            }else{
                for(var i = 1; i <= 9; i++){
                    var $A = document.createElement('a');
                    if(nowNum < 5){
                        $A.href = '#' + i;
                        if(i === nowNum){
                           $A.innerText = i;
                        }else{
                           $A.innerText ='[' + i + ']';
                        }
                    }else if((allNum - nowNum) < 4) {
                        //后面四页
                        $A.href = '#' + (allNum - 9 + i);
                        if((allNum - nowNum) === 0 && i === 9){
                           $A.innerText = (allNum - 9 + i);
                        }else if((allNum - nowNum) === 1 && i === 8){
                           $A.innerText = (allNum - 9 + i);
                        }else if((allNum - nowNum) === 2 && i === 7){
                           $A.innerText = (allNum - 9 + i);
                        }else if((allNum - nowNum) === 3 && i === 6){
                           $A.innerText = (allNum - 9 + i);
                        }else{
                           $A.innerText ='[' + (allNum - 9 + i) + ']';
                        }
                    }else{
                        $A.href = '#' + (nowNum - 5 + i);
                        if( i === 5){
                           $A.innerText = (nowNum - 5 + i);
                        }else{
                           $A.innerText ='[' + (nowNum - 5 + i) + ']';
                        }
                    }

                    $Div.appendChild($A);
                }
            }

            if((allNum - nowNum) > 2) {
                var $A = document.createElement('a');
                $A.href = '#' + (nowNum + 1);
                $A.innerText = '下一页';
                $Div.appendChild($A);
            }

            if((allNum - nowNum) > 5) {
                var $A = document.createElement('a');
                $A.href = '#25';
                $A.innerText = '尾页';
                $Div.appendChild($A);
            }


            var $oA = document.getElementsByTagName('a');
            for(var i = 0; i < $oA.length; i++){
                $oA[i].onclick = function(){
                    var nowNum = parseInt(this.getAttribute('href').substring(1));
                    $Div.innerHTML = '';
                    json.nowNum = nowNum;
                    tool.creatPage(json);
                }
            }

        json.callBack(nowNum, allNum);
    }
}


module.exports = tool;