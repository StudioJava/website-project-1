// highlight current day on opeining hours
$(document).ready(function() {
"use strict";	
$('.opening-hours li').eq(new Date().getDay()).addClass('today');
});
