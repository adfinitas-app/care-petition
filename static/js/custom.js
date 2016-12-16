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
	});

  (function formToDb() {
    function pureField(string) {
      return (string.replace(/'/g, "%27").replace(/"/g, "&quot;"));
    }
    var $form = $('form.custom');
    $form.on('submit', function(e) {
      e.preventDefault();
      if ($form.valid() === true) {
	var optin = 'non';
	if ($form.find('#form-newsletter').is(':checked')) { optin = 'oui' }
	var now = new Date();
	var data = {
	  "schema": "care_petition",
	  "db": {
	    "campaign_code": $form.data('campaign'),
	    "signin_date": now.toString(),
	    "firstname": pureField($form.find('#form-firstname').val()),
	    "lastname": pureField($form.find('#form-lastname').val()),
	    "email": pureField($form.find('#form-email').val()),
	    "optin": optin,
	    "phone": pureField($form.find('#form-phone').intlTelInput('getNumber'))
	  }
	};
	var params = {
	  "firstname": data.db.firstname,
	  "lastname": data.db.lastname,
	  "email": data.db.email,
	  "optin": data.db.optin
	};
	var success = function() {
	  window.location = $form.attr('action') + '?' + $.param(params);
	};
	makeCorsRequest(data, success);
      }
    });
  })();

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
      return false;
    }
  }, "Numéro incorrect");

  $('form.custom').validate({
    rules: {
      phone:{
          required: false,
          validatePhone: false
      }
    }
  });
});
