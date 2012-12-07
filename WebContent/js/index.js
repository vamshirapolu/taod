$(function(){
	var docHgt = $(document).height();
	$("#overlay").height(docHgt);
	
	$("#login-tab a").click(function(){
		if($(this).hasClass("signin")){
			if($("#login-form").hasClass("in-actv")){
				$("#login-form").removeClass("in-actv").slideUp();
			}else{
				$("#login-form").addClass("in-actv").slideDown();
			}
		}else{
			if($("#login-form").hasClass("in-actv")){
				$("#login-form").removeClass("in-actv").slideUp();
			}
			$("#reg_popup").css("visibility","hidden").show();
			
			$("#signup-lnk").effect("transfer", {
				to: "#reg_popup",
				className: "ui-effects-transfer"
			  }, 500, function() {
				$("#reg_popup").css("visibility","visible");
				$("#overlay").fadeTo(100,0.5);
			  });
		}
	});

	$(".frm-fld").focus(function(){
		$(this).addClass("on-focus");
	}).blur(function(){
		$(this).removeClass("on-focus");
	});

	$("#top-menu a.nav-lnk").click(function(){
		if(!$(this).parent().hasClass("active")){
			$("#top-menu li.active").removeClass("active");
			$(this).parent().addClass("active")
		}
	});

	$("#cancel_reg,#close_reg").click(function(){
		$("#overlay").hide();
		$("#reg_popup").effect( "drop", {}, 500, function(){} );
	});
});