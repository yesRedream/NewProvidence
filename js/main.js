<<<<<<< HEAD
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});

//var individual_price_table = $('#price_tables').find('.individual');
//var company_price_table = $('#price_tables').find('.company');


$('#plan .switch-toggle').find('.individual-toggle ').addClass('active');
//$('#price_tables').find('.individual').addClass('active');

$('.switch-toggle').find('.individual-toggle ').on('click', function(){
	$(this).addClass('active');
	$(this).closest('.switch-toggle').removeClass('active');
	$(this).siblings().removeClass('active');
//	individual_price_table.addClass('active');
//	company_price_table.removeClass('active');
});

$('#plan .switch-toggle').find('.company-toggle ').on('click', function(){
	$(this).addClass('active');
	$(this).closest('.switch-toggle').addClass('active');
	$(this).siblings().removeClass('active');
//	company_price_table.addClass('active');
//	individual_price_table.removeClass('active');			
});
=======
$(window).scroll(function() {
	if ($(this).scrollTop() > 1){
		$('header').addClass("sticky");
	}
	else{
		$('header').removeClass("sticky");
	}
});

//var individual_price_table = $('#price_tables').find('.individual');
//var company_price_table = $('#price_tables').find('.company');


$('#plan .switch-toggle').find('.individual-toggle ').addClass('active');
//$('#price_tables').find('.individual').addClass('active');

$('.switch-toggle').find('.individual-toggle ').on('click', function(){
	$(this).addClass('active');
	$(this).closest('.switch-toggle').removeClass('active');
	$(this).siblings().removeClass('active');
//	individual_price_table.addClass('active');
//	company_price_table.removeClass('active');
});

$('#plan .switch-toggle').find('.company-toggle ').on('click', function(){
	$(this).addClass('active');
	$(this).closest('.switch-toggle').addClass('active');
	$(this).siblings().removeClass('active');
//	company_price_table.addClass('active');
//	individual_price_table.removeClass('active');			
});
>>>>>>> origin/master
