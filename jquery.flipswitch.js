(function($) {
	$.fn.jFlipswitch = function(options) {

		var getRandomNumber =  function(range) {
			return Math.floor(Math.random() * range);
		}

		var getRandomChar = function () {
			var chars = "0123456789abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";
			return chars.substr( getRandomNumber(62), 1 );
		}

		var randomID = function(size) {
			var str = "";
			for(var i = 0; i < size; i++) {
				str += getRandomChar();
			}
			return str;
		}

		var settings = $.extend({
			onChangeState: function(e) {
			},
			onOnState: function() {
			},
			onOffState: function() {
			},
			onLabel: 'Включено',
			offLabel: 'Выключено'
		}, options);


		return this.each(function() {
			$(this).on('change', {
				onHandler:settings.onOnState, 
				offHandler:settings.onOffState, 
				anyStateHandler: settings.onChangeState
			}, function(e) {
				e.data.anyStateHandler();

				if (this.checked) {
					e.data.onHandler();
				} else {
					e.data.offHandler();
				}			
			});

			$(this).css('display', 'none');
			$(this).addClass('onoffswitch-checkbox');

			if (!$(this).attr('id')) {
				$(this).attr('id', randomID(8));
			}

			var checkboxId = $(this).attr('id');
			var $container = $('<div>', {class: 'onoffswitch'});
			$(this).wrap($container);
			$('<label>',{class:'onoffswitch-label', for:checkboxId})
			   .append('<div class="onoffswitch-inner" \
			   	data-content-after="' + settings.offLabel
			   	+ '" data-content-before="' + settings.onLabel +'">'
			   	+ '</div><div class="onoffswitch-switch"></div>')
			   .insertAfter(this);
		});

	};
}(jQuery));