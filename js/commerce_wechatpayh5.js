(function($) {
    $(document).ready(function(){
        var outtradeno = $("#outtradeno").val();
        // $('body').css('background-color', 'rgb(233, 150, 122)');
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
            // console.log('msg: ' + msg);
            if (msg == "SUCCESS") {
                $("#suctext").css('display', 'contents');
                $("#wechatsubmit").css('display', 'block');
                $("#openpay").css('display', 'none');
                $("#wechatsubmit").click();
            } else {
               setTimeout(wechat_payment_status(outtradeno), 5000);
            }
        }
    });
    // console.log('}');
}