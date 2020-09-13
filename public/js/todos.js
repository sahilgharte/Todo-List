$(".item").on("click","p",function(){
	$(this).toggleClass("line");
});

// $(".item").on("click","span",function(event){
// 	$(this).parent().fadeOut(500,function(){
// 		$(this).remove();
// 	});
// 	event.stopPropagation();
// });

// $("input[type='text']").on("keypress",function(event){
// 	if(event.which===13){
// 		var todoText=$(this).val();
// 		$(this).val("");
// 		$(".item").append("<p><span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todoText +"</li>");
// 	}
// })
