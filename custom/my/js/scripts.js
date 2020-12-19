

$('.catalog__map-del').click(function(){
  $(this).parents('.catalog__map-info').removeClass('active');
});
$(document).ready(function(){
$('.desc_row tbody').find("tr:gt(1)").remove();
 if( window.innerWidth >575 ) {


	$('.search-on-main .col_radio br').remove();
	$(".mob-filter-main").html("");
 	$('search-on-main .col_radio br').remove();
 	$('.search-on-main .footer_buttons input').remove();

 	$('.search-on-main .input_block').append('<input type="submit" value="Поиск" id="find-objects" class="button solid" data-callibri_parse_form="true">');
	$('.search-on-main .footer_buttons a').html('<a href="/poselki">Расширенный поиск</a>');


 }

 if( window.innerWidth < 500 ) {
	 $(".search-on-main").html("");
 }



	$('.offer_look').smoothScroll({
		beforeScroll: function() {
			$('#map').addClass('active');
			$('.objects_hidemap').addClass('active');
			$('.objects_hidemap div').text('Скрыть карту объектов');
		}
	});
	$('.footer_back, .ab_to_map').smoothScroll();

	if ($(".type_objects_header").length)
	{
		$(".type_location_one").each(function(index, element) {
			$(this).on('click',function(e) {
				e.preventDefault();
				$.smoothScroll({
					scrollTarget: '#'+$(this).data('hr')
				});
			});
		});
	}

	if ($(".ab_rel_count").length)
	{
		$(".ab_rel_count").text($('.ab_rel_item').length/2);
	}

	if( $('.owl-carousel').length > 0 ) {
		$(".owl-carousel").owlCarousel({
			items : 3,
			itemsCustom : false,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [991,2],
			itemsTablet: [768,2],
			itemsTabletSmall: false,
			itemsMobile : [479,1],
			singleItem : false,
			itemsScaleUp : false,
			slideSpeed : 200,
			paginationSpeed : 800,
			rewindSpeed : 1000,
			responsiveRefreshRate : 20,

			//Autoplay
			autoPlay : false,
			stopOnHover : true,

			// Navigation
			navigation : true,

			//Pagination
			pagination : false,
			paginationNumbers: false
		});
	}
	if ($(".shop-item-previews .item").length)
	{
		$(".shop-item-previews .item").each(function(index, element) {
			$(this).on('click',function(e) {
				e.preventDefault();
				$('.js_shop_preview_img').removeClass('active');
				$(this).addClass("active");
				$(".shop-item-big-images .shop-item-image").hide();
				$(".shop-item-big-images .shop-item-image").eq(index).addClass("active");
				$(".shop-item-big-images .shop-item-image").eq(index).show();
			});
		});
	}
	if ($(".ob_text_wrap").length)
	{
		$('input[name=p22]').val($(".ob_text_wrap").data('ob'));
	}
          /*var $section = $('.type_content').first();
          $section.find('.panzoom').panzoom({
            $zoomRange: $section.find(".zoom-range")
          });*/

    
    
	/*if ($(".genpl").length) {
		$('.genpl').panzoom({
            $zoomRange: $(".zoom-range"),
			$zoomIn: $(".zoom-in"),
            $zoomOut: $(".zoom-out"),
			increment: 0.1
        });
	}*/

	$("#range_input").ionRangeSlider({
		 type: "double",
		 grid: false,
		 skin: "round",
		 min: 0,
		 max: 300000,
		 from: $(".from_1").val(),
		 to: $(".to_1").val(),
		 step: 1000,
		 prettify_enabled: true,
         prettify_separator: " ",
		 prefix: "",
		 onChange: function(data) {
		 	$(".from_1").val(data.from);
		 	$(".to_1").val(data.to)
		 }
	});

	$("#range_input_distance").ionRangeSlider({
		 type: "double",
		 grid: false,
		 skin: "round",
		 min: 10,
		 max: 150,
		 from: $(".from_7").val(),
		 to: $(".to_7").val(),
		 step: 5,
		 prettify_enabled: true,
         prettify_separator: " ",
		 prefix: "",
		 onChange: function(data) {
		 	$(".from_7").val(data.from);
		 	$(".to_7").val(data.to)
		 }
	});

	// $('#find-objects').click(function(){
	// 	$(".from_1").val($(".irs-from").html());
	// 	$(".to_1").val($(".irs-to").html());
	//   $("#slider_pr_1").parents('form.ab_search').submit();
	// });

	if ($(".type_filters_form").length)
	{
		$("#slider_pr_1").slider({
			min: 10,
			max: 400,
			values: [10,400],
			step: 5,
			range: true,
			stop: function(event, ui) {
				$("input#min_1").val($("#slider_pr_1").slider("values",0));
				$("input#max_1").val($("#slider_pr_1").slider("values",1));
				$(".from_1").val($("#slider_pr_1").slider("values",0)*1000);
				$(".to_1").val($("#slider_pr_1").slider("values",1)*1000);
				// $(this).parents('form.ab_search').submit();
			},
			slide: function(event, ui){
				$("input#min_1").val($("#slider_pr_1").slider("values",0));
				$("input#max_1").val($("#slider_pr_1").slider("values",1));
				$(".from_1").val($("#slider_pr_1").slider("values",0)*1000);
				$(".to_1").val($("#slider_pr_1").slider("values",1)*1000);
			}
		});
		if ($("input#max_1").val() != 400) $("#slider_pr_1").slider("values",1,$("input#max_1").val());
		if ($("input#min_1").val() != 10) $("#slider_pr_1").slider("values",0,$("input#min_1").val());

		$("#slider_pr_7").slider({
			min: 10,
			max: 120,
			values: [10,120],
			step: 5,
			range: true,
			stop: function(event, ui) {
				$("input#min_7").val($("#slider_pr_7").slider("values",0));
				$("input#max_7").val($("#slider_pr_7").slider("values",1));
				$(this).parents('form.ab_search').submit();
			},
			slide: function(event, ui){
				$("input#min_7").val($("#slider_pr_7").slider("values",0));
				$("input#max_7").val($("#slider_pr_7").slider("values",1));
			}
		});
		if ($("input#max_7").val() != 120) $("#slider_pr_7").slider("values",1,$("input#max_7").val());
		if ($("input#min_7").val() != 10) $("#slider_pr_7").slider("values",0,$("input#min_7").val());
	}

	$("input#min_1").change(function(){
		var value1=$("input#min_1").val();
		var value2=$("input#max_1").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#min_1").val(value1);
			$(".from_1").val(value1*1000);
		}
		$("#slider_pr_1").slider("values",0,value1);
		$(this).parents('form.ab_search').submit();
	});


	$("input#max_1").change(function(){
		var value1=$("input#min_1").val();
		var value2=$("input#max_1").val();

		if (value2 > 400) { value2 = 400; $("input#max_1").val(400)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#max_1").val(value2);
			$(".to_1").val(value2*1000);
		}
		$("#slider_pr_1").slider("values",1,value2);
		$(this).parents('form.ab_search').submit();
	});

	$("input#min_7").change(function(){
		var value1=$("input#min_7").val();
		var value2=$("input#max_7").val();

		if(parseInt(value1) > parseInt(value2)){
			value1 = value2;
			$("input#min_7").val(value1);
		}
		$("#slider_pr_7").slider("values",0,value1);
		$(this).parents('form.ab_search').submit();
	});


	$("input#max_7").change(function(){
		var value1=$("input#min_7").val();
		var value2=$("input#max_7").val();

		if (value2 > 120) { value2 = 120; $("input#max_7").val(120)}

		if(parseInt(value1) > parseInt(value2)){
			value2 = value1;
			$("input#max_7").val(value2);
		}
		$("#slider_pr_7").slider("values",1,value2);
		$(this).parents('form.ab_search').submit();
	});
});

$(document).on('click', ".objects_hidemap", function (e) {
	e.preventDefault();
	if ($(this).hasClass('active'))
	{
		$('#map').removeClass('active');
		$('.objects_hidemap div').text('Показать карту объектов');
	}
	else
	{
		$('#map').addClass('active');
		$('.objects_hidemap div').text('Скрыть карту объектов');
	}
	$('.objects_hidemap').toggleClass('active');
});

$(document).on('click', ".to_full", function (e) {
	if (!$(this).hasClass('full'))
	{
		//$(document).fullScreen(true);
		$(".genplan").fullScreen(true);
		$(this).addClass('full');
	}
	else
	{
		//$(document).fullScreen(false);
		$(".genplan").fullScreen(false);
		$(this).removeClass('full');
	}
});

$("body").on("keypress", "input", function(e) {
    $(this).removeClass('error_input');
});

	$(window).scroll(function(){
		if ($(document).width() > 768 && ($(".type_objects_header").length))
		{
			if($(window).scrollTop() > 385) {
				$('.sidebar').css({'top':'0px', 'position':'fixed', 'maxHeight':$(window).height()});
			}
			if($(window).scrollTop() > 555) {
				$(".sidebar .events_container").fadeOut();
			}
			if($(window).scrollTop() < 385) {
				$('.sidebar').css({'top':'auto', 'position':'static'});
			}
			if($(window).scrollTop() < 555) {
				$(".sidebar .events_container").fadeIn();
			}
		}
	});


$(document).scroll(function highlight(){
	if ($(document).width() > 768 && ($(".type_objects_header").length))
	{
		var s = $(document).scrollTop();
		for(i=0;i<$(".type_objects_header[id]").length;i++){
			var offset = offsetPosition($(".type_objects_header[id]")[i])[1];
			if(offset-150 < s){
				$(".type_location_one").removeClass("active");
				$(".type_location_container a[class='"+$(".type_objects_header[id]").eq(i).attr("id")+" type_location_one']").addClass("active");
			}
		}
	}
});
function offsetPosition(element) {
	if(element!=undefined){
		var offsetLeft = 0, offsetTop = 0;
		do {
			offsetLeft += element.offsetLeft;
			offsetTop  += element.offsetTop;
		} while (element = element.offsetParent);
		return [offsetLeft, offsetTop];
	}
}

$(document).on('click', ".abid_mainlabel_btn", function (e) {
	e.preventDefault();
	$('.modal_window_wrapper').load('/zvon/', function( response, status, xhr ) {
		$(".phone_field").mask("+7-999-999-99-99");
		$('input[name=p22]').val($(".ob_text_wrap").data('ob'));
		$(".modal_window_wrapper").fadeToggle(600);
	});
});

$(document).on('click', ".ban_one", function (e) {
	e.preventDefault();
	href = $(this).attr('href');
	$('.modal_window_wrapper').load('/ban/', function( response, status, xhr ) {
		$(".phone_field").mask("+7-999-999-99-99");
		$('input[name=p25]').val(href);
		$(".modal_window_wrapper").fadeToggle(600);
	});
});

$(document).on('click', ".modal_window_container_close, .modal_window_wrapper", function (z) {
	z.preventDefault();
	z.stopPropagation();
	$(".modal_window_wrapper").fadeToggle(600);
});

$(document).on('click', ".modal_window_container", function (c) {
	c.stopPropagation();
});

$(document).on('click', "#mob_menu_opener", function (e) {
    e.preventDefault();
    $('.hat_menu').slideToggle();
});

$(document).on('click', "#mob_filter_closer", function (e) {
    e.preventDefault();
		$('.mob-filter-main').slideToggle();
		$('#mob_filter_closer').slideToggle();
		$('.type_filters_block').slideToggle();
});


$(document).on('click', ".icon-ready", function (e) {
    e.preventDefault();
		$('.mob-filter-main').slideToggle();
		$('#mob_filter_closer').slideToggle();
		$('.type_filters_block').slideToggle();
});

$(document).on('click', ".type_location_title", function (e) {
    e.preventDefault();
    $('.type_location_container').slideToggle();
});


$(document).on('click', ".show_all_previews", function (e) {
    e.preventDefault();
    $('.other_previews').slideToggle();
	$(this).hide();
});

$(function() {
  $('select').selectric();
});

$('.hat_phone > span').click(function(){
  $(".modal_oveflow").fadeToggle(600);
  $(".modal__calbeck").fadeToggle(600)
});

$('.modal_oveflow').click(function(){
  $(".modal_oveflow").fadeToggle(600);
  $(".modal__calbeck").fadeToggle(600)
});

$('.modal__calbeck-close').click(function(){
  $(".modal_oveflow").fadeToggle(600);
  $(".modal__calbeck").fadeToggle(600)
});