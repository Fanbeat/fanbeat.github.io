$(document).ready(function(){function n(){var n=$("#input-email").val();t(n)?$.ajax({url:"https://docs.google.com/a/ingamemobile.com/forms/d/18dHWU0ki-ijnUAEhzLAu7RL4OFoKGKiXrk_L3mLqnlE/formResponse",data:{"entry.1123898644":n},type:"POST",dataType:"xml",statusCode:{0:function(){o("Thank you. We'll be in touch.")},200:function(){o("Thank you. We'll be in touch.")}}}):i("Your email is not valid.")}function i(n){$("#failBox").remove(),$("#signup-form").prepend("<div id='failBox'>"+n+"</div>"),$("#failBox").css("display","none").slideDown()}function o(n){$("#signup-form").fadeOut(),$("#successBox").html(n)}function t(n){var i=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i.test(n)}$(".tagline").fitText(),$("#input-submit").click(function(i){i.preventDefault(),n()})});
//# sourceMappingURL=./global-min.js.map