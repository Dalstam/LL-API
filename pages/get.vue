<template>
	<html>
    <head>
    <title>TringTring</title>
    <meta name='viewport' content='initial-scale=1.0, maximum-scale=1.0' />
    <script type='text/javascript' src='https://code.jquery.com/jquery-3.0.0.min.js'></script>
    <script language="javascript">
	    var isMobile = {
		    Android: function() {
		        return /Android/i.test(navigator.userAgent);
		    },
		    iOS: function() {
		        return /iPhone|iPad|iPod/i.test(navigator.userAgent);
		    }
		};
		
	    function openStore() {
		    if (isMobile.Android()) {
			    window.location='https://play.google.com/store/apps/details?id=nl.tringtring.android.bestellen&hl=nl';
		    }
		    else if (isMobile.iOS()) {
			    window.location='https://geo.itunes.apple.com/nl/app/tringtring/id992808813?mt=8';
		    }
	        else {
		        window.location='https://tringtring.nl/';
	        }
	    }
	</script>
</head>
<body onload="javascript:openStore();">
</body>
</html>

</template>

