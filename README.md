jFlipswitch
===========

jQuery plugin to create beautiful on/off flip switch http://proto.io/freebies/onoff/

##Installation

```html
<link href="jquery.flipswitch.css" rel="stylesheet">

<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
<script src="jquery.flipswitch.js"></script>

<script>
    $(function() {
        $('input[type=checkbox]').flipswitch({
            onLabel: 'On',
            offLabel: 'Off',
            onOnState: function() { 
                console.log('on state!') 
            },
            onOffState: function() {
                console.log('off state!')
            },
            onChangeState: function() {
                console.log('state changed!')
            }
        });
    });		
</script>
```
