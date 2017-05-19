
var serch = {
    focu : function () {
       $('.select input').on('focus', function () {
           this.value = '';
           this.style.color = '#999';
       }).on('blur', function () {
           this.value = '请输入关键字';
           this.style.color = '#ccc';
       });
    }   
};

module.exports = serch;
