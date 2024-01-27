
jQuery(document).ready(function($){

if (jQuery().quicksand) {

 	// // Կլոնավորել հավելվածները՝ երկրորդ հավաքածուն ստանալու համար
	var $data = $(".portfolio,.team").clone();
	
	//ԾԱՆՈԹՈՒԹՅՈՒՆ. Զտեք միայն հիմնական պորտֆելի էջում, այլ ոչ թե ենթակատեգորիաների էջերում
	$('.filter li').click(function(e) {
		$(".filter li").removeClass("active");	
		// Օգտագործեք վերջին կատեգորիայի դասը որպես կատեգորիա՝ ըստ զտման: Սա նշանակում է, որ մի քանի կատեգորիաներ չեն աջակցվում (դեռ)
		var filterClass=$(this).attr('class').split(' ').slice(-1)[0];
		
		if (filterClass == 'all') {
			var $filteredData = $data.find('.item-thumbs');
		} else {
			var $filteredData = $data.find('.item-thumbs[data-type=' + filterClass + ']');
		}
		$(".portfolio,.team").quicksand($filteredData, {
			duration: 600,
			adjustHeight: 'auto'
		}, function () {

		$("a[data-pretty^='prettyPhoto']").prettyPhoto();

			});		
			
		$(this).addClass("active"); 			
		return false;
	});
	
}//եթե արագավազ

});