function scrollToEl(el) {
	$('html, body').animate({
		scrollTop: $(el).offset().top
	});
}

$(document).ready(function() {
	if(screen.width > 1400) {
		$('.bg1').height(screen.width*535/1400);
		$('.bg2').height(screen.width*200/1400);
		$('.bg3').height(screen.width*463/1400);
		$('.bg4').height(screen.width*535/1400);
	}
	
	$(window).on('resize', function() {
		if(screen.width > 1400) {
			$('.bg1').height(screen.width*535/1400);
			$('.bg2').height(screen.width*200/1400);
			$('.bg3').height(screen.width*463/1400);
			$('.bg4').height(screen.width*535/1400);
		}
		else {
			$('.bg1, .bg2, .bg3, .bg4').css('height', 'auto');
		}
	})

  var phoneInput = $("#form-phone"),
    phoneError = $("#phone-error"),
    phoneOk = $("#phone-ok");

  phoneInput.intlTelInput({
    autoPlaceholder: false,
    utilsScript: "lib/js/vendor/utils.js",
    defaultCountry: "auto",
      geoIpLookup: function(callback) {
        $.get('http://ipinfo.io', function() {}, "jsonp").always(function(resp) {
          var countryCode = (resp && resp.country) ? resp.country : "";
          callback(countryCode);
        });
      }
  });
  phoneInput.blur(function() {
    if ($.trim(phoneInput.val())) {
      if (phoneInput.intlTelInput("isValidNumber")) {
        phoneOk.removeClass("hide");
      } else {
        phoneInput.addClass("error");
        phoneError.removeClass("hide");
        phoneOk.addClass("hide");
      }
    }
  });
  phoneInput.keydown(function() {
    phoneInput.removeClass("error");
    phoneError.addClass("hide");
    phoneOk.addClass("hide");
  });


  jQuery.validator.addMethod('validatePhone', function () {
    if ($("#form-phone").intlTelInput("isValidNumber")) {
      return true;
    }
    else {
        console.log("hey");
      return false;
    }
  }, "Numéro incorrect");

  $('form.custom').validate({
    rules: {
      phone:{
          required: true,
          validatePhone: true
      }
    }
  });
});