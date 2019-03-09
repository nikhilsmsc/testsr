// Form Wizard JavaScripts

(function ($) {
	'use strict';

	

	function validationChecking() {
	    
	}

  	$('#rootwizard').bootstrapWizard({
  		tabClass: '',
	    'nextSelector': '.button-next',
	    'previousSelector': '.button-previous',
  		onTabShow: function(tab, navigation, index) {
			var $total = navigation.find('li').length;
			var $current = index+0;
			var $percent = ($current/$total) * 133;
			$('#rootwizard .progress-bar').css({width:$percent+'%'});
		}});
})(jQuery);
