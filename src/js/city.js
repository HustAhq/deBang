

var city1 = {
    aj : function () {
        $.ajax({
            url : 'http://localhost:8080/src/get/city.txt',
            type : 'GET',
            dataType : 'json',
            success : this.callback,
            error : this.miss
        });
    },
    callback : function (data) {
        var len = $('.city_title li').length,
            frag = document.createDocumentFragment(),
            oUl = document.getElementsByClassName('city_detail')[0];
        $('.invitePosition').on('mousemove', function () {
            $('.xinxi-title div').removeClass('dis_non');
            $('.city_title li').each(function (index) {
                 $(this).on('mouseenter', function (){
                     $('.city_detail li').detach();
                     for(var i = 0; i < data[index].length; i++){
                        var oLi = document.createElement('li');
                        oLi.innerText = data[index][i];
                        frag.appendChild(oLi);
                     }
                    oUl.appendChild(frag);
                 });
            });
            $('.city_catalog').on('mouseleave', function (){
                 $('.xinxi-title div').addClass('dis_non')
            })
        });
    },
    miss : function (er) {
        console.log(er);
    }
}

module.exports = city1;