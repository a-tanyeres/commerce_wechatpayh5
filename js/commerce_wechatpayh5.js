(function($) {
    $(document).ready(function(){
        var outtradeno = $("#outtradeno").val();
        //alert(outtradeno);
        $('body').css('background-color', 'rgb(51, 51, 51)');
        // jQuery("#openpay").trigger("click");
        wechat_payment_status(outtradeno);
    });
})(jQuery);

function wechat_payment_status(outtradeno) {
    console.log('Out trade :' + outtradeno);
    var path = '/commerce_wechatpayh5/wechatpay-status';
    jQuery.ajax({
        type: 'POST',
        url: path,
        data: 'outtradeno='+outtradeno,
        success: function(msg) {
            // alert(msg);
            console.log('msg: ' + msg);
            if (msg == "SUCCESS") {
                jQuery("#wechatsubmit").trigger("click");
            } else {
                setTimeout(wechat_payment_status(outtradeno), 5000);
            }
        }
    });
    console.log('}');
}