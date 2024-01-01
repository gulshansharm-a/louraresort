jQuery(document).ready(function(b){"use strict";b.fn.yith_wcbk_datepicker=function(){var m={message:null,overlayCSS:{background:"#fff",opacity:.7},ignoreIfBlocked:!0},t=new Date,y=new Date(t.getFullYear(),t.getMonth(),t.getDate()),h=function(t){var a=t.data("type"),e=b(t.data("related-from"));return"to"===a&&0<e.length&&(t=e),t},f=function(t){return{all_day:(t=h(t)).data("all-day"),allow_same_date:t.data("allow-same-date")||"yes",ajax_load_months:t.data("ajax-load-months"),month_to_load:t.data("month-to-load"),year_to_load:t.data("year-to-load"),min_duration:t.data("min-duration"),notAvailableDates:t.data("not-available-dates")||[],product_id:t.data("product-id"),"static":t.data("static")||"no"}};return b(this).each(function(){var _=b(this),u=_.data("type"),t=_.data("min-date"),a=_.data("max-date"),k=b(_.data("related-to")),e=b(_.data("on-select-open")),p=b(_.data("related-from")),o=_.next(".yith-wcbk-date-picker--formatted"),d=function(t,a){a=a||0;var e,o,d=f(_);0<k.length&&(e="yes"===bk.settings.check_min_max_duration_in_calendar?d.min_duration:1,"yes"===d.allow_same_date&&(e-=1),o=0<e?yith_wcbk_dates.add_days_to_date(t,e):t,k.val()&&yith_wcbk_dates.date_diff(k.val(),o)<0&&k.datepicker("setDate",null),a?setTimeout(function(){k.datepicker("option","minDate",o)},a):k.datepicker("option","minDate",o))};_.on("yith_wcbk_datepicker_load_non_available_dates",function(t,a){var e=f(_),o=h(_);b.ajax({type:"POST",data:{product_id:e.product_id,action:"yith_wcbk_get_product_not_available_dates"},url:bk.ajaxurl,success:function(t){try{t.error?console.log(t.error):(o.data("month-to-load",t.month_to_load),o.data("year-to-load",t.year_to_load),o.data("not-available-dates",t.not_available_dates),_.datepicker("refresh"))}catch(a){console.log(a.message)}},complete:function(){"undefined"!=typeof a.callback&&a.callback()}})}),_.datepicker({dateFormat:"yy-mm-dd",minDate:t,maxDate:a,showAnim:!1,showButtonPanel:!0,closeText:yith_wcbk_datepicker_params.i18n_clear,altField:o,altFormat:bk.settings.datepickerFormat,popup:{position:"bottom left",origin:"top left"},beforeShow:function(t,a){_.addClass("yith-wcbk-datepicker--opened"),b("#ui-datepicker-div").addClass("yith-wcbk-datepicker"),"yes"===f(_)["static"]&&b("#ui-datepicker-div").addClass("yith-wcbk-datepicker--static").appendTo(_.parent().parent()),a.yith_booking_date_selected=!1,setTimeout(function(){b(".ui-datepicker-close").on("click",function(t){_.datepicker("setDate",null).trigger("change")})},10)},beforeShowDay:function(t){var e,o,a=!0,d=_.data("allowed-days")||[],i=f(_),n=[];if(15===t.getDate()&&function(t,a,e){var o=f(_=e);if("yes"===o.ajax_load_months){var d=t+"-"+a+"-01",i=o.year_to_load+"-"+o.month_to_load+"-01";if(yith_wcbk_dates.date_diff(d,i,"months")<1)return!0}return!1}(t.getFullYear(),t.getMonth()+1,_)&&(e=f(_),o=h(_),b("#ui-datepicker-div").block(m),b.ajax({type:"POST",data:{product_id:e.product_id,month_to_load:e.month_to_load,year_to_load:e.year_to_load,action:"yith_wcbk_get_product_not_available_dates"},url:bk.ajaxurl,success:function(t){try{t.error?console.log(t.error):(o.data("month-to-load",t.month_to_load),o.data("year-to-load",t.year_to_load),o.data("not-available-dates",e.notAvailableDates.concat(t.not_available_dates)),b("#ui-datepicker-div").unblock(),_.datepicker("refresh"))}catch(a){console.log(a.message)}}})),0<d.length){var r=t.getDay();0===r&&(r=7),a=-1!==d.indexOf(r.toString())}if(a&&0<i.notAvailableDates.length){var c,l,s="yes"===bk.settings.check_min_max_duration_in_calendar?i.min_duration:1;"yes"===i.all_day&&(s-=1),c="to"===u?yith_wcbk_dates.add_days_to_date(t,-s):t,l=b.datepicker.formatDate("yy-mm-dd",c),a=-1===i.notAvailableDates.indexOf(l)}return!a&&t.getTime()>y.getTime()&&n.push("bk-non-available-date"),"from"===u&&k.length&&b.datepicker.formatDate("yy-mm-dd",t)===k.val()&&n.push("bk-to-date"),"to"===u&&p.length&&b.datepicker.formatDate("yy-mm-dd",t)===p.val()&&n.push("bk-from-date"),[a,n.join(" ")]},onClose:function(t,a){b("#ui-datepicker-div").removeClass("yith-wcbk-datepicker"),"yes"===f(_)["static"]&&b("#ui-datepicker-div").removeClass("yith-wcbk-datepicker--static").appendTo(b("body")),a.yith_booking_date_selected&&0<e.length&&!e.val()&&(e.trigger("focus"),setTimeout(function(){e.trigger("focus")},50)),_.removeClass("yith-wcbk-datepicker--opened")},onSelect:function(t,a){t&&(d(t),a.yith_booking_date_selected=!0),b(this).trigger("change")}}),o.on("focus",function(){_.trigger("focus")});var i=_.parent().find(".yith-wcbk-booking-date-icon"),n=!1;i.on("mousedown",function(t){n=!!_.datepicker("widget").is(":visible")}).on("click",function(){n||_.trigger("focus")}),_.is(".yith-wcbk-date-picker--inline")&&_.val(_.data("value")),_.val()&&(_.datepicker("setDate",_.val()),d(_.val(),100))})}});