$( document ).ready(function() {

//intro fix
if(typeof year === 'undefined' || year === null){window.location.href = "../Intro.html";}
var today = new Date();
var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(yyyy>year||(yyyy==year&&mm>10)){	
	window.location.href = "../Intro.html";
}	

var currentFrame=0;
var container=$(".container");
$(".IWB").addClass("loading");


//Αρχικοποιήσεις μεταβλητών ήχου-βίντεο
var soundInterval;
var soundButtonInterval;
var videoInterval;
var justiInterval;
var soundCurrent;
var videoCurrent;
var subs;
var scrollY;
var srl={};
var irrV=0;

//Εικονίδια justification
var justF='<svg width="25px" height="25px" viewBox="0 0 25 25"> <circle fill="#C8C8C8" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#000000"> <path  d="M12.871,15.674c-0.47,0-0.851-0.381-0.851-0.85v-1.533c0-1.46,0.951-2.252,1.716-2.89 c0.761-0.634,1.191-1.03,1.191-1.792c0-1.263-1.026-2.29-2.289-2.29c-1.034,0-1.942,0.695-2.209,1.691 c-0.121,0.454-0.587,0.725-1.041,0.601C8.935,8.49,8.667,8.024,8.788,7.571c0.466-1.738,2.05-2.951,3.851-2.951 c2.199,0,3.988,1.79,3.988,3.99c0,1.595-0.998,2.428-1.803,3.098c-0.705,0.587-1.104,0.951-1.104,1.583v1.533 C13.721,15.293,13.34,15.674,12.871,15.674z"/> <circle cx="12.931" cy="18.668" r="1.123"/> </g> </svg>';
var justTips='<svg width="25px" height="25px" viewBox="0 0 25 25" > <circle fill="#C8C8C8" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#000000"> <circle cx="12.5" cy="19.093" r="1.248"/>	 <path  d="M12.476,15.848c-0.001,0-0.002,0-0.003,0c-0.531-0.003-0.969-0.418-0.996-0.949l-0.476-9.188 c-0.014-0.274,0.085-0.542,0.273-0.74c0.19-0.2,0.452-0.312,0.726-0.312h1c0.275,0,0.538,0.113,0.727,0.313 c0.189,0.199,0.287,0.469,0.271,0.743l-0.523,9.188C13.443,15.434,13.006,15.848,12.476,15.848z"/> </g> </svg>';
var justKey='<svg width="25px" height="25px" viewBox="0 0 25 25" > <circle fill="#C8C8C8" cx="12.5" cy="12.5" r="12.5"/> <g class="gMain" fill="#000000"> <path d="M20.375,10.745h-7.979c-0.432-1.997-2.208-3.5-4.333-3.5c-2.447,0-4.438,1.991-4.438,4.438 c0,2.447,1.99,4.437,4.438,4.437c2.079,0,3.815-1.441,4.294-3.375h3.675v2.015c0,0.553,0.447,1,1,1s1-0.447,1-1v-2.015h1.344v2 c0,0.553,0.447,1,1,1s1-0.447,1-1v-3C21.375,11.193,20.928,10.745,20.375,10.745z M8.063,14.119c-1.344,0-2.438-1.092-2.438-2.437 c0-1.344,1.094-2.438,2.438-2.438s2.438,1.094,2.438,2.438C10.5,13.027,9.406,14.119,8.063,14.119z"/> </g> </svg>';

//Εικονίδιο ήχου
var justSound=' <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g> ';

var vFlag=0;
var scale=1;
var inter;
var tlTip=1;

//'Ονομα project(Χρησιμεύει στην αποθήκευση των tools)
var projectName="Portal 10a";

//Click sound
$("body").append('<audio class="clickSound"><source src="../Audio/Click.mp3" type="audio/mpeg"></audio>');




if(Infos.Book){$(".mBook").html(Infos.Book);}
if(Infos.ModuleText){$(".mModule").html(Infos.ModuleText)}else{$(".mModule").parent().fadeOut(0);}

if(Infos.Type=='Student\'s Book'){$(".tSvg path").css("fill","#0037ff")}
if(Infos.Type=='Workbook'){$(".tSvg path").css("fill","#9b27ff")}
if(Infos.Type=='Grammar Pre-Intermediate'){$(".tSvg path").css("fill","#9bff00");$(".tSvg text").css("fill","black");$(".mType").css("transform","translateX(138px)")}
if(Infos.Type){$(".mType").html(Infos.Type);$(".mModule").addClass("mLeft");}



$(".mainWrapper").append('<div class="mainBack"><svg width="40px" height="40px" viewBox="0 0 40 40" class="secondBackbtn ">  <circle fill="white" cx="20" cy="20" r="19.5"></circle> <path fill="gray" d="M13.372,16.936L23.407,6.901c0.526-0.526,1.378-0.526,1.904,0c0.523,0.526,0.523,1.377,0,1.904L15.056,19.062 l10.256,10.257c0.263,0.264,0.395,0.606,0.395,0.952c0,0.344-0.132,0.688-0.395,0.952c-0.525,0.525-1.377,0.525-1.903,0 L13.374,21.188l-2.08-2.126L13.372,16.936z"></path>  </svg>  </div>');



if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
}

else{
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}
window.scale=scale;


function coords(e,rel){
	
	var IWB= $(".IWB").offset();
	var click={};
	var box={};	
	var str={};
	try{
		if(e.originalEvent){
			click.top=e.originalEvent.changedTouches[0].clientY;
			click.left=e.originalEvent.changedTouches[0].clientX;
		}
		else{
			click.top=e.changedTouches[0].clientY;
			click.left=e.changedTouches[0].clientX;
			
		}
	}
	catch(err){
		click.top=e.clientY;
		click.left=e.clientX;		
	}
	
	box.top  = $(rel).offset().top;
	box.left = $(rel).offset().left;
	
	str.top=(click.top-box.top)/scale;
	str.left=(click.left-box.left)/scale;	
	
	return str;
	
	
}









//Corelation coming from other HMTLS
try{
if(JSON.parse(window.name)){
	
	var cor=JSON.parse(window.name);
	console.log(cor);
	if(cor.Lesson){
		var exFlag=0;		
		$.each(Frame, function( index, value ) {
			if(value.Salon==false||exFlag==1){ return false;}		
			$.each(value.Lessons, function( index2, value2 ) {			
				if(value2==cor.Lesson){ 
					current=index;
					currentFrame=index;
					exFlag=1;
					return false;}			
			});
		});		
	}
	if(cor.Frame){		
		current=parseInt(cor.Frame)-1;
		currentFrame=parseInt(cor.Frame)-1;		
		if(Frame[currentFrame].Salon==false){$(".returnSallon").removeAttr("data-disabled")}
	}	
	if(cor.Image){
		$.each(Frame, function( index, value ) {
				if(value.Image==cor.Image){ 					
					current=index;
					currentFrame=index;
					return false;}					
				if(value.Salon==false){ return false;}
			});		
	}
	
}
}catch(err){}
	window.name = null;













InitialSalon(currentFrame);




function InitialSalon(current) {
        //	window.tmp_ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
        //window.ctx.clearRect(0, 0, tmp_canvas.width, tmp_canvas.height);
        $('.textTool').remove();
        $(".toolBox,#sketch").removeClass("enabled");
        var cor = window.name.split(":");

        if (cor[0] == "Lesson") {
            var exFlag = 0;

            $.each(Frame, function (index, value) {
                if (value.Salon == false || exFlag == 1) { return false; }
                $.each(value.Lessons, function (index2, value2) {
                    if (value2 == cor[1]) {
                        current = Frame[index - 1].id;
                        currentFrame = Frame[index - 1].id;
                        exFlag = 1;
                        return false;
                    }
                });
            });
            window.name = null;
        }
        if (cor[0] == "Frame") {

            current = cor[1] - 1;
            currentFrame = cor[1] - 1;
            window.name = null;
            if (Frame[currentFrame].Salon == false) { $(".returnSallon").removeAttr("data-disabled") }
        }

        if (cor[0] == "Image") {
            $.each(Frame, function (index, value) {
                if (value.Image == cor[1]) {
                    current = index;
                    currentFrame = index;
                    return false;
                }

                if (value.Salon == false) { return false; }

            });

            window.name = null;
        }






        //---------------gia panw

        container.html("");
        $(".preLoad").remove();
        $("body").append('<div class="preLoad"></div>');
        clearVideo();
        subs = null;
        $(".videoWrapper,.interactivePanel,.interactiveCorrect,.interactiveWrong").fadeOut(0);
        $(".txtmcBtn").attr("data-disabled", "true");
		
		//if ($(".txtmcBtn[data-disabled]").length == 1) { $(".textEnabled").removeClass("textEnabled"); console.log("vgike") } //change
		
        $("#sketch").html("");
        var url = (Frame[current].Salon == true ? "Spreads" : "Frames");

        if (Frame[current].StaticImage) {
            $(".txtmcBtn").removeAttr("data-disabled");

        }


        var img = new Image();
        img.onload = function () {
            $(this).addClass("backgroundImage");
            if (Frame[current].Salon == true && parseFloat(this.width) <= 500) { $(this).addClass("half") }
            if (Frame[current].Salon == true && parseFloat(this.width) > 500) { $(this).addClass("whole") }
            if (parseFloat(this.height) <= 740) {
                $(".scroll").fadeOut(0);
            }
            else {
                $(".scroll").fadeIn(0);
            }

            if (parseFloat(this.width) > 1000) {
                $(".main").addClass("containerExpanded");
            }
            else {
                $(".main").removeClass("containerExpanded");
            }

            if (Frame[current].ImageAlign != undefined) {
                if (Frame[current].ImageAlign == "right") {
                    img.style.left = "525px";
                }
            }

            try { $(".preLoad").html("<img src='../Images/" + url + "/" + Frame[current + 1].Image + ".jpg' />") } catch (err) { }
            container.append(img);

            if (Frame[current].Flashcard) {
                $(".main").addClass("containerExpanded");
                var top = parseFloat($(".container").height() - $(".container>img").height()) / 2;
                var left = parseFloat($(".container").width() - $(".container>img").width()) / 2;
                console.log();
                $(".container>img").css({ "top": top + "px", "left": left + "px" });
            }
            if (Frame[current].StaticImage) {

                $(".preLoad").append("<img  src='../Images/" + url + "/" + Frame[current].StaticImage + ".jpg'/>");
            }
        }
        img.src = "../Images/" + url + "/" + Frame[current].Image + ".jpg";








        $(".vocabularyBtn,.grammarBtn").attr("data-disabled", "true").removeAttr("data-correlation");
        if (Frame[current].Salon == true) { $(".mainImg").fadeOut(0); $(".salonShadow").fadeIn(0); $(".mainFrame").removeClass("mainFrame"); } else {
            $(".mainImg").fadeIn(0);
            $(".salonShadow").fadeOut(0);
            $(".IWB").addClass("mainFrame");


            try {
                $.each(Infos.Vocabulary_Correlation, function (index, value) {
                    if (value == Frame[current].Lesson) {
                        $(".vocabularyBtn").attr("data-correlation", value).removeAttr("data-disabled").attr("data-correlation", value).fadeIn(0);
                        return false;
                    }
                });

            } catch (err) { }

            try {
                $.each(Infos.Grammarbook_Correlation, function (index, value) {
                    if (value == Frame[current].Lesson) {
                        $(".grammarBtn").attr("data-correlation", value).removeAttr("data-disabled").fadeIn(0);

                        return false;
                    }
                });

            } catch (err) { }



        }
        if (Frame[current].Audio) {
            $(".extraInfo audio source").attr("src", "../Audio/" + Frame[current].Audio + ".mp3");
            //$(".extraInfo audio").removeAttr("data-end");
            $(".extraInfo audio")[0].load();
            $(".extraInfo").fadeIn(0);
        }
        else {
            $(".extraInfo").fadeOut(0);
            $(".extraInfo audio source").removeAttr("src");
        }

        if (Frame[current].Video) {
            $(".videoBtn").removeAttr("data-disabled");
        }
        else {
            $(".videoBtn").attr("data-disabled", "true");
        }

        if (Frame[current].Interactive) {
            if (Frame[current].Interactive.type == "multiple") {
                $.each(Frame[current].Interactive.Choices, function (index, value) {
                    var extra = "";
                    if (value.correct) { extra = "data-multiplecorrect='true'" }
                    container.append("<div " + extra + " class=\"interactive choice\" data-multiplegroup=\"" + value.group + "\" style=\"width:" + value.width + "px;height:" + value.height + "px;left:" + value.left + "px;top:" + value.top + "px;\">" + value.text + "</div>");
                });
            }

            else {
                $.each(Frame[current].Interactive.Choices, function (index, value) {
                    var extra = "";
                    if (value.correct) { container.append("<div class=\"interactive dropInteractive\" data-dropint=\"" + value.correct + "\" style=\"width:" + value.width + "px;height:" + value.height + "px;left:" + value.left + "px;top:" + value.top + "px;\"></div>"); }
                    else {
                        container.append("<div class=\"interactive dragInteractive\" data-dragint=\"" + value.text + "\" style=\"width:" + value.width + "px;height:" + value.height + "px;left:" + value.left + "px;top:" + value.top + "px;\">" + value.text + "</div>");
                    }

                });


            }
            $(".interactivePanel").fadeIn(0);

        }


        $(".correlation").html("");



        try {
            $.each(Frame[current].Stickers, function (index, value) {
                container.append("<div data-sticker='" + value.target + "' style='width:" + value.width + "px;height:" + value.height + "px;left:" + value.left + "px;top:" + value.top + "px;'></div>");






            });
        }
        catch (err) { }

        try {
            $.each(Frame[current].Phrases, function (index, value) {
                var color = "";
                if (value.color) { color += "background:" + value.color + ";"; }
                if (value.blending) { color += "mix-blend-mode:normal;"; }
                container.append("<div data-phrase='" + value.number + "' style='" + color + "left:" + value.left + "px;top:" + value.top + "px;width:" + value.width + "px;height:" + value.height + "px;'></div>");
            });
        }
        catch (err) { }

        $(".showAnswers").attr("class", "showAnswers");

        $(".showAnswers").attr("data-disabled", "true");


//Auto-scrolling fixed
			if(Frame[current].ScrollTo){
				$.each(Frame[current].ScrollTo, function( index, value ) {
					var flag=0;
						$.each(Frame[current].SoundPhrases, function( index2, value2 ) {
							if(value2>value.sec){
								Frame[current].SoundPhrases.splice(index2,0,value.sec);
								Frame[current].SoundPhrases.splice(index2,0,value.sec);
								tempAS=index2;
								tempAS2=current;
								flag=index2/2+1;
								return false;
								}					
						});					
						$("[data-phrase]").each(function( index2, value2 ) {
							var inp=parseInt($(this).attr("data-phrase"));
							if(inp>=flag){$(this).attr("data-phrase",inp+1)}
						});		
						container.append("<div data-phrase='"+ flag +"' style='left:0px;top:"+ value.top +"px;width:0px;height:0px;'></div>");
	
					});			
				}


        var count = 1;
        try {
            $.each(Frame[current].Fill, function (index, value) {

                var extra = "";
                var inner = "";

                if (value.target) {

                    $(".showAnswers").removeAttr("data-disabled");
                    extra = "data-fill='" + count + "'";
                    count++;
                    container.append("<div " + extra + " style='left:" + value.target.left + "px;top:" + value.target.top + "px;width:" + value.target.width + "px;height:" + value.target.height + "px'></div>");
                }

                if (value.svg) { $(".showAnswers").removeAttr("data-disabled"); inner = "<svg width=" + value.width + " height=" + value.height + ">" + value.svg + extra + "</svg>"; }
                if (value.mode == "gr") { $(".showAnswers").removeAttr("data-disabled"); container.append("<div class='fill gr' " + extra + " style='left:" + value.left + "px;top:" + value.top + "px'><svg>" + value.svg + "</svg></div>"); }//edit

                if (value.txt) { 
					$(".showAnswers").removeAttr("data-disabled"); inner = "<div class='txt'>" + value.txt + "</div>"; 
					if(value.txt=="lime"){inner = "<div class='txt lime'>" + value.txt + "</div>";}
					if(value.txt=="navy blue"){inner = "<div class='txt navyblue'>" + value.txt + "</div>";}
					if(value.txt=="light blue"){inner = "<div class='txt lightblue'>" + value.txt + "</div>";}
					if(value.txt=="reddish brown"){inner = "<div class='txt reddishbrown'>" + value.txt + "</div>";}
				}//edit (rotate)

                if (value.txtmc) {
                    inner = "<div class='txtmc'>" + value.txtmc + "</div>"; $(".txtmcBtn").removeAttr("data-disabled");

                    if (Frame[current].JustificationMask) {
                        $(".justificationMaskHighlights").append("<div " + extra + " class='fill fillTxt' style='left:" + (value.left - Frame[current].JustificationMask.left) + "px;top:" + (value.top - Frame[current].JustificationMask.top) + "px;width:" + value.width + "px;height:" + value.height + "px'>" + inner + "</div>");
                    }

                }
                if (value.mode == "fillTxt") { container.append("<div " + extra + " class='fill fillTxt' style='left:" + value.left + "px;top:" + value.top + "px;width:" + value.width + "px;height:" + value.height + "px'>" + inner + "</div>"); }
                if (value.mode == "circle") { container.append("<div " + extra + " class='fill circle' style='left:" + value.left + "px;top:" + value.top + "px;width:" + value.width + "px;height:" + value.height + "px'>" + inner + "</div>"); }
                if (value.mode == "check") {
                    var fSvg = ""; $(".showAnswers").removeAttr("data-disabled");
                    if (!value.tick) { fSvg = "<svg width='100%' height='100%' viewBox='0 0 22 22'><polygon fill='#FF0000' points='10.999,14.088 3.09,21.999 0.003,18.911 7.912,11.001 0,3.086 3.087,0 11.001,7.914 18.913,0 	22,3.086 14.086,11.001 21.998,18.911 18.911,22 '></polygon></svg>"; }
                    else { fSvg = "<svg width='100%' height='100%' viewBox='0 0 30 22'><polygon fill='#64E564' points='0,11.417 3.142,8.34 10.578,15.556 26.784,0 29.963,3.083 10.688,22 '></polygon></svg>"; }
                    container.append("<div " + extra + " class='fill check' style='left:" + value.left + "px;top:" + value.top + "px;width:" + value.width + "px;height:" + value.height + "px'>" + fSvg + "</div>");
                }
                if(value.mode=="fillImg"){
						$(".showAnswers").removeAttr("data-disabled");
						container.append("<div "+ extra +" class='fill fillImg' style='left:"+ value.left +"px;top:"+ value.top +"px;width:"+ value.width +"px;height:"+ value.height +"px'><img src='../Images/Fill/"+ value.img +"'/></div>");
					}

            });//edit


        }
        catch (err) { }

        try {
            $.each(Frame[current].Line, function (index, value) {
                var inner = "";
                if (value.svg) { inner = "<svg width=" + value.width + " height=" + value.height + ">" + value.svg + "</svg>"; }
                container.append("<div class='line' style='left:" + value.left + "px;top:" + value.top + "px;'>" + inner + "</div>");
            });

            $(".showAnswers").removeAttr("data-disabled");

        }
        catch (err) { }

        try {
/*             $.each(Frame[current].Audiobtn, function (index, value) {
                container.append('<div class="audioL" style="top:' + value.top + 'px;left:' + value.left + 'px" data-alstart="' + value.start + '" data-alend="' + value.end + '"><svg width="19px" height="15px" viewbox="0 0 19 15"> <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g></svg></div>');

            }); */
			if (Infos.ModuleText == "Irregular Verbs") {
				irrV=1;
				$.each(Frame[current].Audiobtn, function (index, value) {
					container.append('<div class="audioL" data-phraseA="' + value.number + '" style="left:' + (value.left+30) + 'px;top:' + value.top + 'px"><svg width="19px" height="15px" viewbox="0 0 19 15"> <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g></svg></div>');
				});
			}
			else{
				$.each(Frame[current].Audiobtn, function (index, value) {
					container.append('<div class="audioL" style="top:' + value.top + 'px;left:' + (value.left+30) + 'px" data-alstart="' + value.start + '" data-alend="' + value.end + '"><svg width="19px" height="15px" viewbox="0 0 19 15"> <g fill="#010101" class="justPlayBtn">	 <path  d="M10.877,10.639c-0.143,0-0.285-0.063-0.385-0.18c-0.176-0.213-0.148-0.527,0.064-0.705 c0.711-0.594,1.117-1.451,1.117-2.354c0-0.83-0.324-1.608-0.916-2.192c-0.197-0.194-0.199-0.51-0.004-0.707 c0.193-0.196,0.51-0.199,0.707-0.004c0.783,0.773,1.213,1.805,1.213,2.903c0,1.2-0.537,2.338-1.477,3.122 C11.104,10.6,10.99,10.639,10.877,10.639z"/> <path d="M12.846,12.605c-0.137,0-0.273-0.055-0.371-0.164c-0.186-0.205-0.17-0.521,0.035-0.707 c1.229-1.109,1.934-2.689,1.934-4.334c0-1.57-0.615-3.044-1.73-4.15c-0.195-0.194-0.197-0.511-0.002-0.707 c0.195-0.196,0.512-0.198,0.707-0.003c1.307,1.295,2.025,3.021,2.025,4.86c0,1.926-0.824,3.776-2.264,5.077 C13.084,12.563,12.965,12.605,12.846,12.605z"/> <path d="M15.146,14.908c-0.133,0-0.266-0.053-0.365-0.158c-0.188-0.201-0.178-0.518,0.023-0.707 c1.867-1.746,2.895-4.105,2.895-6.643c0-2.439-0.953-4.731-2.684-6.454c-0.195-0.195-0.195-0.512-0.002-0.707 c0.195-0.196,0.512-0.196,0.707-0.002c1.922,1.912,2.979,4.456,2.979,7.163c0,2.819-1.141,5.436-3.211,7.374 C15.393,14.863,15.27,14.908,15.146,14.908z"/> <path d="M8.3,2.27c0-0.55-0.318-0.682-0.707-0.293L5.148,4.422C4.759,4.811,3.991,5.129,3.441,5.129H1.3 c-0.55,0-1,0.45-1,1v3c0,0.551,0.45,1,1,1h2.024c0.55,0,1.318,0.318,1.707,0.707l2.562,2.563C7.982,13.787,8.3,13.654,8.3,13.105 V2.27z"/>	 </g></svg></div>');

				});
			}
        }
        catch (err) { }






        $(".justificationWrapper audio source").attr("src", "");
        $(".justSound,.justMask,.keyMask").html("");
        $(".keyMask").fadeOut(0); $(".justMask").fadeIn(0);
        $(".justHide").removeClass("justDisabled");
        $(".referenceBtn").attr("data-disabled", "true");
        if (Frame[current].JustificationImage != undefined) {
            $(".referenceBtn").removeAttr("data-disabled");
            $(".justMask").html("<img src='../Images/Frames/" + Frame[current].JustificationImage + ".jpg'/>");
            if (Frame[current].JustificationAudio) {
                $(".justificationWrapper audio source").attr("src", "../Audio/" + Frame[current].JustificationAudio + ".mp3");
                $(".justificationWrapper audio")[0].load();

            }
        }
		
		if (Frame[current].JustificationImage != undefined) {
            $(".referenceBtn").removeAttr("data-disabled");
            $(".justMask").html("<img src='../Images/Frames/" + Frame[current].JustificationImage + ".jpg'/>");
            if (Frame[current].JustificationAudio) {
                $(".justificationWrapper audio source").attr("src", "../Audio/" + Frame[current].JustificationAudio + ".mp3");
                $(".justificationWrapper audio")[0].load();

            }
        }

        /* if (Frame[current].KeyImage != undefined) {
            $(".keyMask").html("<img src='../Images/Frames/" + Frame[current].KeyImage + ".jpg'/>");
        } */




        try {
            $.each(Frame[current].Justifications, function (index, value) {
                var jTemp;
                switch (value.jusicon) {
                    case "tip":
                        jTemp = justTips;
                        break;
                    case "key":
                        jTemp = justKey;
                        break;
                    default:
                        jTemp = justF;
                }
                var ex = ""; if (value.justText) { ex = "data-justext='" + value.justText + "'" }
				var ex2="";if(value.keyImg){ex2="data-keyImg='"+ value.keyImg +"'"}
                container.append("<div " + ex + " class='justification' "+ ex2 +" data-jusicon='" + value.jusicon + "'data-justification='" + (index + 1) + "' style='left:" + value.left + "px;top:" + value.top + "px;'>" + jTemp + "</div>");
                if (value.Highlights) {
                    $.each(value.Highlights, function (index2, value2) {
                        var extra = "";
                        if (value2.justiPhrase) { extra = "data-justiphrase='" + value2.justiPhrase + "'"; }
                        var color = "";
                        if (value2.color) { color = "background:" + value2.color + ";"; }
                        console.log(color);
                        $(".justMask").append("<div class='highlight' data-highlight='" + (index + 1) + "' " + extra + " style='" + color + "top:" + value2.top + "px;left:" + value2.left + "px;width:" + value2.width + "px;height:" + value2.height + "px'></div>");

                    });
                }


            });
        } catch (err) { }

        try {
            $.each(Frame[current].jPhrases, function (index, value) {
                var color = "";
                if (value.color) { color = "background:" + value.color + ";"; }
                $(".justMask").append("<div data-phrase='" + value.number + "' style='" + color + "left:" + value.left + "px;top:" + value.top + "px;width:" + value.width + "px;height:" + value.height + "px;'></div>");
            });
        }
        catch (err) { }

        console.log(current);
        console.log(Frame.length - 1);

        if (current == 0 || Frame[current].Salon != Frame[current - 1].Salon) { $("[data-frame=previous]").attr("data-disabled", "true") } else { $("[data-frame=previous]").removeAttr("data-disabled") }
        if (current == Frame.length - 1 || Frame[current].Salon != Frame[current + 1].Salon) { $("[data-frame=next]").attr("data-disabled", "true") } else { $("[data-frame=next]").removeAttr("data-disabled") }
        $(".scroll,.justScroll").fadeOut(0);
        $(".scrollHandle,.justScrollHandle").css("top", "0px");
        if (Infos.SalonDisabled && Frame[current].Salon == true) { $("[data-frame]").attr("data-disabled", "true") }
        if (Infos.FramesDisabled) { $("[data-frame],.returnSallon").attr("data-disabled", "true") }




        $(".lessons").html("");
        try {
            $.each(Frame[current].Lessons, function (index, value) {

                if (Infos.Grammarbook_Correlation.length > 0 && value != "Song") {

                    /* if(value.length>1){$(".lessons").append("&nbsp;"+value+" - ");}
                    else{$(".lessons").append(value+" - ");} */

                }

		
			

				

                try {
                    $.each(Infos.Studentsbook_Correlation, function (index2, value2) {
                        if (value == value2) {
                            var iconSvg = '  <svg width="50px" height="50px" viewBox="0 0 50 50" >  <g class="sBlack" fill="#FFFFFF"> <path  d="M25.006,3c9.752,0,18.441,6.554,21.13,15.937c1.618,5.654,0.941,11.596-1.906,16.733 c-2.849,5.135-7.526,8.854-13.17,10.473C29.065,46.711,27.023,47,24.989,47c-9.756-0.002-18.447-6.561-21.136-15.949 C0.517,19.398,7.286,7.199,18.939,3.857C20.93,3.289,22.971,3,25.006,3 M25.006,0c-2.321,0-4.639,0.329-6.891,0.973 C4.869,4.771-2.823,18.633,0.969,31.877C4.023,42.543,13.9,49.998,24.988,50h0.003c2.318,0,4.636-0.33,6.892-0.973 c6.413-1.84,11.732-6.066,14.97-11.902c3.238-5.84,4.006-12.591,2.167-19.014C45.966,7.453,36.091,0,25.006,0L25.006,0z"/>  <path  d="M37.091,21.884l0.043,1.882c-0.039,0.031-0.076,0.065-0.107,0.106c0,0-9.639,11.644-10.292,12.435 C25.777,36,13.008,31.916,12.553,31.773c-0.904-1.1-1.227-2.135-1.227-3.035c0-1.063,0.429-1.93,0.803-2.485l13.918,4.524 c0.315,0.104,0.663,0.004,0.874-0.254l11.073-13.34c0.176-0.214,0.231-0.502,0.148-0.765c-0.084-0.263-0.296-0.466-0.563-0.539 l-14.527-3.912c-0.297-0.078-0.615,0.017-0.819,0.248L11.162,24.747c-0.072,0.08-0.121,0.176-0.155,0.276 C9.763,26.66,8.674,29.82,11.448,33c0.097,0.111,0.224,0.197,0.364,0.24l14.951,4.781c0.314,0.1,0.662-0.002,0.871-0.258 l9.83-11.874l0,0c0,0,1.49-1.336,1.428-2.423S37.091,21.884,37.091,21.884 M21.226,18.437l2.95-3.355l8.034,2.236l-2.847,3.459 L21.226,18.437z"/> </g> </svg> ';
                            var str = value;
                            if (Frame[current].Correlation) { str = Frame[current].Correlation }
                            $(".correlation").eq(index).append("<div data-correlation=\"" + str + "\" data-type='SB'>" + iconSvg + "<span>Student's book</span></div>"); return false;

                        }
                    });
                } catch (err) { }


                try {
                    $.each(Infos.Workbook_Correlation, function (index2, value2) {
                        if (value == value2) {
                            var iconSvg = '<svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> 	<path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" 			M24.988,50C13.9,49.998,4.023,42.544,0.969,31.877c-3.792-13.244,3.9-27.106,17.146-30.904C20.367,0.329,22.685,0,25.006,0 			c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014c-3.237,5.837-8.557,10.063-14.97,11.902 			C29.627,49.671,27.31,50,24.991,50H24.988z"/> 	</g> 	<g class="sBlack" fill="#FFFFFF"> 		<path  d="M25.043,15.061c0,0,1.956-0.06,4.756,2.2c2.801,2.263,3.276,4.289,3.276,4.289l-9.751,12.604 			c0,0-0.185,0.037-0.282,0.072l-9.516,4.154l1.758-10.421c0.016-0.103,0.005-0.292,0.005-0.292L25.043,15.061z M34.007,20.069 			c0,0-1.055-2.52-3.067-4.146c-2.015-1.628-4.792-2.208-4.792-2.208c1.71-2.209,4.853-2.576,7.021-0.819 			C35.342,14.648,35.716,17.863,34.007,20.069 M22.665,33.337c0.035-0.017,0.075-0.018,0.107-0.023 			c-0.563-0.797-1.566-2.048-2.978-3.188c-1.386-1.118-2.718-1.775-3.571-2.127c0.005,0.045,0.005,0.087-0.006,0.132 			c0,0-0.53,3.158-0.961,5.711l2.189,1.773C19.781,34.594,22.665,33.337,22.665,33.337"/> 	</g></svg> ';
                            var str = value;
                            if (Frame[current].Correlation) { str = Frame[current].Correlation }
                            $(".correlation").eq(index).append("<div data-correlation=\"" + str + "\" data-type='WB'>" + iconSvg + "<span>Workbook</span></div>"); return false;
                        }
                    });
                } catch (err) { }

                try {
                    $.each(Infos.Vocabulary_Correlation, function (index2, value2) {
                        if (value == value2) {
                            var iconSvg = ' <svg width="50px" height="50px" viewBox="0 0 50 50" >  <g class="sCircle"> <path  fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,49.973C13.9,49.971,4.023,42.517,0.969,31.85c-3.792-13.244,3.9-27.106,17.146-30.904c2.252-0.644,4.569-0.973,6.891-0.973 c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014C43.615,42.935,38.296,47.161,31.883,49 c-2.256,0.644-4.573,0.973-6.892,0.973H24.988z"/> </g> <g fill="#FFFFFF" class="sBlack">  <polygon  points="30.003,36.475 32.379,38.052 32.379,29.009 27.698,29.009 27.698,38.052 "/> <path  d="M22.033,17.269h-0.046c0,0-0.162,0.592-0.253,0.806l-0.953,2.233h1.824l-0.481-2.233 C22.094,17.91,22.033,17.269,22.033,17.269z"/> <path  d="M28.761,18.575c-0.721,0-1.04,0.616-0.98,1.872c0.056,1.216,0.419,1.87,1.12,1.87 c0.485,0,0.81-0.354,1.002-0.74l-0.217-2.235C29.503,18.915,29.123,18.575,28.761,18.575z"/> <path  d="M36.549,27.012c0.209-0.279,0.277-0.637,0.185-0.973l-3.085-12.341 c-0.302-1.067-1.273-1.804-2.383-1.804H18.482c-1.093,0-2.043,0.72-2.368,1.794c-0.212,0.705-3.822,14.218-4.009,14.868 c-0.161,0.563-0.273,1.009-0.273,1.727c0,2.428,1.546,4.401,3.442,4.401h19.674c0.863,0,1.565-0.702,1.565-1.566H15.274 c-1.016,0-1.876-1.299-1.876-2.835c0-1.535,0.86-2.833,1.876-2.833h20.391C36.011,27.45,36.339,27.288,36.549,27.012z  M24.745,23.761h-0.579c-0.381,0-0.669-0.064-0.724-0.265l-0.424-1.532h-2.985l-0.729,1.532 c-0.096,0.188-0.333,0.265-0.646,0.265h-0.528c-0.554,0-0.786-0.1-0.751-0.278c0.012-0.063,0.053-0.137,0.096-0.225l3.873-8.071 c0.088-0.2,0.33-0.264,0.633-0.264h0.551c0.308,0,0.534,0.063,0.583,0.264l2.258,8.071c0.025,0.088,0.039,0.162,0.039,0.225 C25.408,23.661,25.209,23.761,24.745,23.761z M30.716,23.746c-0.422,0-0.5-0.526-0.609-0.853 c-0.249,0.538-0.857,0.942-1.678,0.942c-1.428,0-2.473-1.206-2.479-3.389c-0.009-2.048,0.773-3.379,2.206-3.379 c0.682,0,1.28,0.518,1.52,0.868l0.005-0.277c0.008-0.263-0.027-0.515,0.443-0.515h0.317c0.469,0,0.689,0.138,0.729,0.402 l0.554,3.979c0.181,1.294,0.373,1.557,0.413,1.82C32.18,23.646,31.047,23.746,30.716,23.746z"/>  </g> </svg> ';
                            var str = value;
                            if (Frame[current].Correlation) { str = Frame[current].Correlation }
                            $(".correlation").eq(index).append("<div data-correlation=\"" + str + "\" data-type='VC' >" + iconSvg + "<span>Vocabulary List</span></div>"); return false;
                        }
                    });
                } catch (err) { }

                try {
                    $.each(Infos.Grammarbook_Correlation, function (index2, value2) {
                        if (value == value2) {
                            var iconSvg = '<svg width="50px" height="50px" viewBox="0 0 50 50" >   <g class="sCircle"><path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,50C13.9,49.998,4.023,42.544,0.969,31.877c-3.792-13.244,3.9-27.106,17.146-30.904C20.367,0.329,22.685,0,25.006,0 c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014c-3.237,5.837-8.557,10.063-14.97,11.902 C29.627,49.671,27.31,50,24.991,50H24.988z"/> </g><g class="sBlack" fill="#FFFFFF"> <path  d="M32.04,29.099c0.02,1.178-2.743,1.396-3.951,1.415c-3.822,0.064-5.646-1.833-5.72-6.046 c-0.067-4.06,1.809-6.107,5.597-6.169c1.501-0.026,3.661,0.414,3.673,1.132c0.006,0.479-0.656,1.614-1.083,1.621 c-0.206,0.006-0.981-0.531-2.604-0.502c-2.013,0.033-2.927,1.331-2.884,3.889c0.045,2.558,1.02,3.876,2.982,3.842 c0.478-0.009,0.869-0.051,1.327-0.144l-0.034-2.167l-1.502,0.025c-0.358,0.006-0.516-0.246-0.527-0.842l-0.009-0.548 c-0.011-0.597,0.139-0.854,0.499-0.861l3.464-0.06c0.476-0.007,0.684,0.193,0.692,0.671L32.04,29.099z"/>  <path  d="M39.933,20.842c-1.961-6.849-9.105-10.815-15.957-8.853s-10.818,9.107-8.855,15.959 c0.221,0.771,0.516,1.498,0.859,2.191L5.067,40.023c1.211,1.598,2.603,3.038,4.145,4.298l10.537-9.643 c3.126,2.361,7.277,3.289,11.334,2.128C37.935,34.842,41.899,27.698,39.933,20.842z M30.308,34.096 c-5.359,1.535-10.945-1.563-12.479-6.924c-1.532-5.353,1.567-10.94,6.922-12.473c5.356-1.533,10.945,1.564,12.475,6.918 C38.762,26.977,35.66,32.561,30.308,34.096z"/>  </g>  </svg> ';
                            var str = value;
                            if (Frame[current].Correlation) { str = Frame[current].Correlation }
                            $(".correlation").eq(index).append("<div data-correlation=\"" + str + "\" data-type='GR'>" + iconSvg + "<span>Grammar Book</span></div>"); return false;
                        }
                    });
                } catch (err) { }






            });

            $(".moduleInfos .lessons").html($(".moduleInfos .lessons").html().substring(0, $(".moduleInfos .lessons").html().length - 3));




            try {
                if (Frame[current].Portal.length == 1) {

                    $.each(Frame[current].Portal, function (index, value) {
                        var iconSvg = ' <svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> <path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,49.975C13.9,49.973,4.023,42.519,0.969,31.852c-3.792-13.244,3.9-27.106,17.146-30.904 c2.252-0.644,4.569-0.973,6.891-0.973c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014 c-3.237,5.837-8.557,10.063-14.97,11.902c-2.256,0.644-4.573,0.973-6.892,0.973H24.988z"/> </g><g class="sBlack" fill="#FFFFFF"> <path  d="M36.138,23.468l-4.966,3.897v-2.298c0-1.575-1.28-2.85-2.854-2.85H14.97c-1.576,0-2.852,1.274-2.852,2.85 v9.248c0,1.572,1.275,2.853,2.852,2.853h13.349c1.573,0,2.854-1.28,2.854-2.853v-2.301l4.966,3.899 c0.772,0.608,1.744-0.153,1.744-1.368v-9.709C37.882,23.622,36.91,22.86,36.138,23.468z"/> <circle  cx="16.85" cy="16.836" r="4.054"/> <path d="M25.896,20.891c2.236,0,4.051-1.815,4.051-4.056c0-2.241-1.814-4.053-4.051-4.053 c-2.241,0-4.054,1.812-4.054,4.053C21.843,19.075,23.655,20.891,25.896,20.891z"/> </g> </svg> ';


                        $(".correlation").eq(index).append("<div class=\"portalCor\" data-correlation=\"\" data-video=\"" + value.Video + "\" data-targetsubs=\"" + value.id + "\">" + iconSvg + "<span>" + value.Worksheet + "</span><span>Video</span></div>");
                        if (Infos.Type != "Worksheet") {
                            iconSvg = ' <svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> <path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,50C13.9,49.998,4.023,42.544,0.969,31.877c-3.792-13.244,3.9-27.106,17.146-30.904C20.367,0.329,22.685,0,25.006,0 c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014c-3.237,5.837-8.557,10.063-14.97,11.902 C29.627,49.671,27.31,50,24.991,50H24.988z"/> </g> <g class="sBlack" fill="#FFFFFF"> <path  d="M39.885,24.363l-3.468,2.718v-1.603c0-1.099-0.895-1.987-1.994-1.987h-9.326 c-1.101,0-1.992,0.889-1.992,1.987v6.446c0,1.097,0.892,1.989,1.992,1.989h9.326c1.1,0,1.994-0.893,1.994-1.989v-1.604 l3.468,2.718c0.541,0.424,1.22-0.106,1.22-0.953v-6.768C41.104,24.471,40.426,23.94,39.885,24.363z"/> <path  d="M32.73,22.567c1.564,0,2.83-1.266,2.83-2.828c0-1.562-1.266-2.825-2.83-2.825 c-1.566,0-2.832,1.264-2.832,2.825C29.898,21.302,31.164,22.567,32.73,22.567z"/>  <path d="M27.629,17.198l-3.356,4.376c0.52,0.604,1.28,0.993,2.139,0.993c1.564,0,2.832-1.266,2.832-2.828 C29.243,18.615,28.581,17.653,27.629,17.198z"/> <path  d="M17.446,14.35c0,0,1.452-0.044,3.53,1.634c2.079,1.68,2.433,3.184,2.433,3.184l-7.239,9.357 c0,0-0.137,0.027-0.209,0.054l-7.064,3.084l1.305-7.736c0.012-0.076,0.004-0.217,0.004-0.217L17.446,14.35z M24.101,18.068 c0,0-0.783-1.871-2.277-3.078c-1.495-1.209-3.558-1.64-3.558-1.64c1.27-1.64,3.603-1.912,5.213-0.608 C25.092,14.044,25.369,16.431,24.101,18.068 M15.681,27.918c0.026-0.013,0.056-0.014,0.08-0.018 c-0.418-0.592-1.163-1.521-2.211-2.367c-1.028-0.83-2.018-1.318-2.651-1.579c0.004,0.033,0.004,0.064-0.004,0.098 c0,0-0.394,2.345-0.714,4.24l1.626,1.316C13.54,28.851,15.681,27.918,15.681,27.918"/>  </g></svg> ';

                            $(".correlation").eq(index).append("<div class=\"portalCor\" data-correlation=\"" + value.Worksheet + "\" data-type=\"PO\">" + iconSvg + "<span>" + value.Worksheet + "</span><span>Worksheet</span></div>");
                        }
                    });
                }

                else if (Frame[current].Portal.length > 1) {
                    var pTxt = "Portal to Videos";
                    if (Frame[current].Portal[0].Worksheet.indexOf("Grammar") != -1) { pTxt = "Portal to Grammar" }
                    if (Infos.Type != "Worksheet") {
                        var iconSvg = ' <svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> <path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,49.975C13.9,49.973,4.023,42.519,0.969,31.852c-3.792-13.244,3.9-27.106,17.146-30.904 c2.252-0.644,4.569-0.973,6.891-0.973c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014 c-3.237,5.837-8.557,10.063-14.97,11.902c-2.256,0.644-4.573,0.973-6.892,0.973H24.988z"/> </g><g class="sBlack" fill="#FFFFFF"> <path  d="M36.138,23.468l-4.966,3.897v-2.298c0-1.575-1.28-2.85-2.854-2.85H14.97c-1.576,0-2.852,1.274-2.852,2.85 v9.248c0,1.572,1.275,2.853,2.852,2.853h13.349c1.573,0,2.854-1.28,2.854-2.853v-2.301l4.966,3.899 c0.772,0.608,1.744-0.153,1.744-1.368v-9.709C37.882,23.622,36.91,22.86,36.138,23.468z"/> <circle  cx="16.85" cy="16.836" r="4.054"/> <path d="M25.896,20.891c2.236,0,4.051-1.815,4.051-4.056c0-2.241-1.814-4.053-4.051-4.053 c-2.241,0-4.054,1.812-4.054,4.053C21.843,19.075,23.655,20.891,25.896,20.891z"/> </g> </svg> ';
                        $(".correlation").eq(0).append("<div class=\"portalCor\" data-correlation=\"\" data-videotarget='video'>" + iconSvg + "<span>" + pTxt + "</span><span>Videos</span></div>");
                        iconSvg = ' <svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> <path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,50C13.9,49.998,4.023,42.544,0.969,31.877c-3.792-13.244,3.9-27.106,17.146-30.904C20.367,0.329,22.685,0,25.006,0 c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014c-3.237,5.837-8.557,10.063-14.97,11.902 C29.627,49.671,27.31,50,24.991,50H24.988z"/> </g> <g class="sBlack" fill="#FFFFFF"> <path  d="M39.885,24.363l-3.468,2.718v-1.603c0-1.099-0.895-1.987-1.994-1.987h-9.326 c-1.101,0-1.992,0.889-1.992,1.987v6.446c0,1.097,0.892,1.989,1.992,1.989h9.326c1.1,0,1.994-0.893,1.994-1.989v-1.604 l3.468,2.718c0.541,0.424,1.22-0.106,1.22-0.953v-6.768C41.104,24.471,40.426,23.94,39.885,24.363z"/> <path  d="M32.73,22.567c1.564,0,2.83-1.266,2.83-2.828c0-1.562-1.266-2.825-2.83-2.825 c-1.566,0-2.832,1.264-2.832,2.825C29.898,21.302,31.164,22.567,32.73,22.567z"/>  <path d="M27.629,17.198l-3.356,4.376c0.52,0.604,1.28,0.993,2.139,0.993c1.564,0,2.832-1.266,2.832-2.828 C29.243,18.615,28.581,17.653,27.629,17.198z"/> <path  d="M17.446,14.35c0,0,1.452-0.044,3.53,1.634c2.079,1.68,2.433,3.184,2.433,3.184l-7.239,9.357 c0,0-0.137,0.027-0.209,0.054l-7.064,3.084l1.305-7.736c0.012-0.076,0.004-0.217,0.004-0.217L17.446,14.35z M24.101,18.068 c0,0-0.783-1.871-2.277-3.078c-1.495-1.209-3.558-1.64-3.558-1.64c1.27-1.64,3.603-1.912,5.213-0.608 C25.092,14.044,25.369,16.431,24.101,18.068 M15.681,27.918c0.026-0.013,0.056-0.014,0.08-0.018 c-0.418-0.592-1.163-1.521-2.211-2.367c-1.028-0.83-2.018-1.318-2.651-1.579c0.004,0.033,0.004,0.064-0.004,0.098 c0,0-0.394,2.345-0.714,4.24l1.626,1.316C13.54,28.851,15.681,27.918,15.681,27.918"/>  </g></svg> ';
                        $(".correlation").eq(0).append("<div class=\"portalCor\" data-correlation=\"\" data-videotarget='worksheet'>" + iconSvg + "<span>" + pTxt + "</span><span>Worksheets</span></div>");
                    }
                    else {

                        $.each(Frame[current].Portal, function (index, value) {
                            var iconSvg = ' <svg width="50px" height="50px" viewBox="0 0 50 50" > <g class="sCircle"> <path fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d=" M24.988,49.975C13.9,49.973,4.023,42.519,0.969,31.852c-3.792-13.244,3.9-27.106,17.146-30.904 c2.252-0.644,4.569-0.973,6.891-0.973c11.085,0,20.96,7.453,24.014,18.111c1.839,6.423,1.071,13.174-2.167,19.014 c-3.237,5.837-8.557,10.063-14.97,11.902c-2.256,0.644-4.573,0.973-6.892,0.973H24.988z"/> </g><g class="sBlack" fill="#FFFFFF"> <path  d="M36.138,23.468l-4.966,3.897v-2.298c0-1.575-1.28-2.85-2.854-2.85H14.97c-1.576,0-2.852,1.274-2.852,2.85 v9.248c0,1.572,1.275,2.853,2.852,2.853h13.349c1.573,0,2.854-1.28,2.854-2.853v-2.301l4.966,3.899 c0.772,0.608,1.744-0.153,1.744-1.368v-9.709C37.882,23.622,36.91,22.86,36.138,23.468z"/> <circle  cx="16.85" cy="16.836" r="4.054"/> <path d="M25.896,20.891c2.236,0,4.051-1.815,4.051-4.056c0-2.241-1.814-4.053-4.051-4.053 c-2.241,0-4.054,1.812-4.054,4.053C21.843,19.075,23.655,20.891,25.896,20.891z"/> </g> </svg> ';


                            $(".correlation").eq(index).append("<div class=\"portalCor\" data-correlation=\"\" data-video=\"" + value.Video + "\" data-targetsubs=\"" + value.id + "\">" + iconSvg + "<span>" + value.Worksheet + "</span><span>Video</span></div>");

                        });


                    }



                }


            } catch (err) { }

            if (Frame[current].SkipCorrelation) {
                $.each(Frame[current].SkipCorrelation, function (index, value) {
                    $.each(value.Correlation, function (index2, value2) {
                        $(".correlation [data-type='" + value.Type + "']").eq(index2).attr("data-skip", value2);
                    });
                });
            }

            if (Frame[current].Lessons.length == 1) { $(".lessonsHeader").html("Lesson: ") } else { $(".lessonsHeader").html("Lessons: ") }
            if (Infos.SalonDisabled) { $(".lessonsHeader").html("") }
        }
        catch (err) {


            try {
                if (Frame[current].Lessons[0] == "Song") {
                    $(".mainSvgs .mModule").html("Modules " + (parseInt(Infos.Module) - 1) + "&" + Infos.Module)
                }
                else {
                    $(".mainSvgs .mModule").html(Infos.ModuleText)
                }
            }
            catch (err) { $(".mainSvgs .mModule").html(Infos.ModuleText) }

            $(".lessons").html(Frame[current].Lesson.replace("Revision Units 1-26", "Units 1-26"));
            if (Frame[current].Lesson.length == 1) { $(".mainSvgs .mModule").append(Frame[current].Lesson); }
			else if (Frame[current].Lesson.indexOf("pp.") != -1){$(".mainSvgs .mModule").append(Frame[current].Lesson);}
            else { $(".mainSvgs .mModule").append(" " + Frame[current].Lesson); }
            if (Infos.ModuleText == "Hello" || Infos.ModuleText == "Revision Units 1-26") { $(".mainSvgs .mModule").html(Infos.ModuleText) }
            if (Frame[current].Lesson.indexOf("Portal") != -1) { $(".mainSvgs .mModule").html(Frame[current].Lesson) }	
			if(Frame[current].Lesson.indexOf("Task")!= -1){$(".mainSvgs .mModule").html(Frame[current].Lesson)}
        }

        soundCurrent = 1;
        videoCurrent = 1;
        $(".audioPause").removeClass("audioPause");
        try {
            clearInterval(soundInterval);
        }
        catch (err) { }



        $(".container,.justificationWrapper").scrollTop(0);







        currentFrame = current;

        $(".IWB").removeClass("loading");
    }





$(document).on("click", ".worksheetSelect", function (e) {
	if($(e.target).hasClass("worksheetSelect")){
		clearVideo();
	$(".videoWrapper").fadeOut(0);
	$(".videoExtra").remove();}
});


//Portal multiple video tabs
$(document).on("click", "[data-videotarget]", function () {
	$(".videoWrapper").prepend("<div class='videoExtra'></div>").addClass("worksheetSelect");
	if($(this).attr("data-videotarget")=="video"){
		$(".videoExtra").append("<span>Videos</span>");
		$.each(Frame[currentFrame].Portal, function( index, value ) {
			var str="";
			if(value.Video){str="data-video=\""+ value.Video +"\""}
			$(".videoExtra").append("<div "+ str +" data-targetsubs=\""+ value.id +"\"><span>"+ value.Worksheet +"</span></div>");
		});
	}
	
	else{
		$(".videoExtra").append("<span>Worksheets</span>");
		$.each(Frame[currentFrame].Portal, function( index, value ) {
			var str="";
			if(value.Video){str="data-correlation=\""+ value.Worksheet +"\" data-type=\"PO\""}
			$(".videoExtra").append("<div "+ str +" ><span>"+ value.Worksheet +"</span></div>");
		});		
	}	
	$(".videoWrapper").css("display","block");
});	








//Next-previous buttons
$(document).on("click", "[data-frame]:not([data-disabled])", function () {	
	if($(".textEnabled").length==1){	//fix Highlights
		$(".textEnabled")[0].classList.remove('textEnabled');
	}
	var minus=1;
	if(Infos.SalonDisabled){minus=0;}	
	var frame;var flag=-1;	
	clearSound();
	switch($(this).attr("data-frame")) {
    case "previous":
        if(Frame[currentFrame].Lesson!=Frame[currentFrame-1].Lesson || Frame[currentFrame].SpreadPrevious){
				$.each(Frame, function( index, value ) {
					try{
					$.each(value.Lessons, function( index2, value2 ) {
						
						if(value2==Frame[currentFrame-minus].Lesson){
							$(".returnSallon").attr("data-disabled","true");
							if(Frame[currentFrame].SpreadPrevious){flag=Frame[currentFrame].SpreadPrevious-1;}
							else{flag=index;}
						}
					});
					}catch(err){}
					
				});
			if(flag!=-1){InitialSalon(flag);}
			
			}
		else{InitialSalon(currentFrame-1);}			
        break;
    case "next":
		if(Frame[currentFrame].Lesson!=Frame[currentFrame+1].Lesson || Frame[currentFrame].SpreadNext){
			$.each(Frame, function( index, value ) {
				try{
				$.each(value.Lessons, function( index2, value2 ) {
					if(value2==Frame[currentFrame+minus].Lesson){
						$(".returnSallon").attr("data-disabled","true");
						if(Frame[currentFrame].SpreadNext){InitialSalon(Frame[currentFrame].SpreadNext-1);}
						else{InitialSalon(index);}
						flag=0;return false;}
				});
				}catch(err){}
				if(flag==0){return false;}
			});	
			
			}
		else{InitialSalon(currentFrame+1);}		
        break;
    default:
        InitialSalon($(this).attr("data-frame"));
}	
});	


//Salon sticker to frame
$(document).on("click", "[data-sticker]", function () {
	var inp=$(this).attr("data-sticker");
	$.each(Frame, function( index, value ) {		
		if(value.id==inp){
			currentFrame=index;
			InitialSalon(index);
			$(".returnSallon").removeAttr("data-disabled");
			return false;
			}
	});		
});





//Return to salon button
$(document).on("click", ".returnSallon:not([data-disabled])", function () {
	
	if($(".textEnabled").length==1){	//fix Highlights
		$(".textEnabled")[0].classList.remove('textEnabled');
	}
	
	var flag=1;var sMin=100;var sIndex=0;
	$.each(Frame, function( index, value ) {
		try{
		$.each(value.Stickers, function( index2, value2 ) {
			if(value2.target==Frame[currentFrame].id){InitialSalon(index);flag=0;return false;}
			if(Math.abs(Frame[currentFrame].id-value2.target)<sMin){sMin=Math.abs(Frame[currentFrame].id-value2.target);sIndex=index;}			
		});
		}catch(err){}
		if(flag==0){return false;}
	});	
	if(flag==1){InitialSalon(sIndex);}
	clearSound();
	clearJustiSound();
	$(".mainFrame").removeClass("mainFrame");
	$(".returnSallon").attr("data-disabled","true");
});



//Audio play-pause button
$(document).on("click", ".audioBtn svg", function () {	
	$(this).parent().toggleClass("audioPause");
	if(!$(this).parent().hasClass("audioPause")){
		$(".extraInfo audio")[0].pause();
		try{
			clearInterval(soundInterval);}
		catch(err){}}		
	else{
		if($(".extraInfo audio[data-start]").length==0){
			$(".extraInfo audio").attr("data-start","0");
			$(".extraInfo audio").attr("data-end",$(".extraInfo audio")[0].duration);
		}
		$(".extraInfo audio")[0].play();		
		clearJustiSound();
		soundInterval=setInterval(soundPhrases,20);
	}	
});	


//Audio stop button
$(document).on("click", ".stopBtn svg", function () {	
		clearSound();
});	



//Video stop button
$(document).on("click", ".videoPause ~ .videostopBtn svg", function () {	
	clearVideo();
	$(".videoPlayBtn").removeClass("videoPause");
	$(".subsSpan").html("");		
});	



//Sound phrase click trigger
$(document).on("click", "[data-phrase]", function () {	
if($(".txtmcBtn[data-disabled]").length==1 || $(".txtmcBtn.textEnabled").length==1){	
	if(!$(this).hasClass("phraseActive")){
		clearSound();
		clearJustiSound();
		soundCurrent=$(this).attr("data-phrase")*2-1;	
		$(".extraInfo audio")[0].currentTime=Frame[currentFrame].SoundPhrases[soundCurrent-1];
		$(this).addClass("phraseActive");
		$(".extraInfo audio").attr("data-start",Frame[currentFrame].SoundPhrases[soundCurrent-1]);
		$(".extraInfo audio").attr("data-end",Frame[currentFrame].SoundPhrases[soundCurrent]);
		$(".extraInfo audio")[0].play();
		$(".playBtnWrapper").addClass("audioPause");	
		soundInterval=setInterval(soundPhrases,20);
	}
	else{
		clearSound();
	}
}	

});


$(document).on("click", "[data-phraseA]", function () {	
if($(".txtmcBtn[data-disabled]").length==1 || $(".txtmcBtn.textEnabled").length==1){	
	$(this).parent().toggleClass("audioPause");
	if(!$(this).hasClass("audioPause")){
		clearSound();
		clearJustiSound();
		soundCurrent=$(this).attr("data-phraseA")*2-1;	
		$(".extraInfo audio")[0].currentTime=Frame[currentFrame].SoundPhrases[soundCurrent-1];
		$(this).addClass("soundSelected");
		$(".extraInfo audio").attr("data-start",Frame[currentFrame].SoundPhrases[soundCurrent-1]);
		$(".extraInfo audio").attr("data-end",Frame[currentFrame].SoundPhrases[soundCurrent]);
		$(".extraInfo audio")[0].play();
		$(".playBtnWrapper").addClass("audioPause");	
		soundInterval=setInterval(soundPhrases,20);
	}
	else{
		clearSound();
	}
}	

});

var pId=0;
//Video tab
$(document).on("click", "[data-video]", function () {
	clearSound();
	clearJustiSound();
	$(".IWB").addClass("loading");
	$(".videoWrapper").removeClass("worksheetSelect");
	$(".videoExtra").remove();
	$(".videoWrapper source").attr("src","../Video/"+ $(this).attr("data-video") +".mp4");
	$(".videoWrapper").css("display","block");	
	vFlag=1;
	pId=$(this).attr("data-targetsubs");
	console.log(pId);
	$.each(Frame[currentFrame].Portal, function( index, value ) {
		if(pId==value.id){
			if(value.SubsArray){		
				subs=value.SubsArray;				
			};
			if(value.TargetSub){
				$.each(Subs, function( index2, value2 ) {
					if(value2.id==value.TargetSub){subs=value2.SubsArray; return false;}
				});			
			};
		}
	});
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();
	videoCurrent=1;
});


//Video trigger
$(document).on("click", ".videoBtn:not([data-disabled])", function () {
	clearSound();
	clearJustiSound();
	$(".IWB").addClass("loading");	
	$(".videoWrapper").removeClass("worksheetSelect");
	$(".videoExtra").remove();
	$(".videoWrapper source").attr("src","../Video/"+ Frame[currentFrame].Video +".mp4");
	$(".videoWrapper").css("display","block");	
	vFlag=1;
	$(".videoWrapper video")[0].load();
	$(".videoWrapper video")[0].play();
});	


//On video load
$('.videoWrapper video').on('canplay', function(){	
	if(vFlag==1){
	$(".playBtn").removeClass("playBtn").addClass("pauseBtn");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").html("");	
	$(".subsSpan").fadeOut(0);
	$("[data-videopart]").remove();
	if(Frame[currentFrame].Parts){
		$.each(Frame[currentFrame].Parts, function( index, value ) {
			var left=value.time/1000/$(".videoWrapper video")[0].duration*200-12.5+"px";
			$(".videoBar").append("<div data-videopart="+ value.time +" style='left:"+ left +"'>"+ String.fromCharCode((index+65)) +"</div>");
			if(value.enabled){$(".videoWrapper video")[0].currentTime=value.time/1000;}			
		});	
	}	
	if(Frame[currentFrame].SubsArray){		
		subs=Frame[currentFrame].SubsArray;			
	};	
	if(Frame[currentFrame].TargetSub){
		$.each(Subs, function( index, value ) {
			if(value.id==Frame[currentFrame].TargetSub){subs=value.SubsArray; return false;}
		});			
	};	
	var RLCM=parseInt(pId)+100;
	if(Frame[currentFrame].Portal){
		console.log(RLCM);
		$.each(Frame[currentFrame].Portal, function( index, value ) {
				if(value.TargetSub==(RLCM)){
					$.each(Subs, function( index2, value2 ) {
						if(value.TargetSub==value2.id){
							subs=value2.SubsArray; 
							if(value2.Parts){
								console.log(value2.Parts);
								$.each(value2.Parts, function( index3, value3 ) {
									var left4=value3.time/1000/$(".videoWrapper video")[0].duration*200-12.5+"px";
									$(".videoBar").append("<div data-videopart="+ value3.time +" style='left:"+ left4 +"'>"+ String.fromCharCode((index3+65)) +"</div>");
								});
							}
							
							return false;
						}
					});	
					return false;
				}
		});
	}
	vFlag=0;
	videoInterval=setInterval(videoBar,20);
		$(".IWB").removeClass("loading");
	}

});


//Video pause trigger
$(document).on("click", ".videoPause", function () {	
	$(".videoWrapper video")[0].pause();
	$(".videoPause").removeClass("videoPause");	
	clearInterval(videoInterval);	
});

//Video play trigger
 $(document).on("click", ".videoPlayBtn:not(.videoPause)", function () {	
	$(".videoWrapper video")[0].play();
	$(this).addClass("videoPause");
	videoInterval=setInterval(videoBar,20);
}); 

//Close Video
$(document).on("click", ".closeVideo", function () {	
	clearVideo();
	$("[data-videopart]").remove();
	$(".videoWrapper").fadeOut(0);
});

//Enable subtitles 
$(document).on("click", ".subsOff", function () {	
	$(".subsOff").removeClass("subsOff");
	$(".subsSpan").fadeIn(0);
});

//Disable subtitles
$(document).on("click", ".subsOn:not(.subsOff)", function () {	
	$(".subsOn").addClass("subsOff");
	$(".subsOn").addClass("subsOff");
	$(".subsSpan").fadeOut(0);
});


//Reset interactive activity
$(document).on("click", ".interactiveReset", function () {	
	$(".dropInteractive").html("");		
	$(".dragTransparent").removeClass("dragTransparent");
	$(".interactive").removeClass("selected");	
	$(".interactiveCheck").attr("class","interactiveCheck");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");

});



//Show correct interactive values
$(document).on("click", ".interactiveShow", function () {
	$(".dropInteractive").html("");		
	$(".dragTransparent").removeClass("dragTransparent");
	$(".interactive").removeClass("selected");	
	$(".interactiveCheck").attr("class","interactiveCheck");
	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");
	
	if($(".intCorrect").length==0||$(".intWrong").length>0){
	$(".dropInteractive").each( function( index, value ) {
		$(this).html($("[data-dragint=\""+ $(this).attr("data-dropint") +"\"]")[0].outerHTML);
		$(this).children().css({top:$(this).css("top"),left:$(this).css("left")});
		if(!Frame[currentFrame].Interactive.dragMore){$(".container>.dragInteractive[data-dragint=\""+ $(this).attr("data-dropint") +"\"]").addClass("dragTransparent");}	
	});	
	$("[data-multiplecorrect=\"true\"]").addClass("selected");
	
	
	$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");
	$(".interactiveEnabled").click();
	$(".interactiveCheck").attr("class","interactiveCheck");

	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	}
	else{
		$(".interactiveReset").click();
		
	}
	
});


//Check interactive anwers
$(document).on("click", ".interactiveEnabled", function () {	
	var correct=0;var wrong=0;
	correct+=$("[data-multiplecorrect].selected").length;
	wrong+=$("[data-multiplecorrect]:not(.selected)").length;
	$("[data-multiplecorrect].selected").addClass("intCorrect");
	$(".selected:not([data-multiplecorrect])").addClass("intWrong");
	
	$(".dragging").removeClass("dragging");
	$(".dropInteractive").each( function( index, value ) {
		if($(this).attr("data-dropint")==$(this).children("[data-dragint]").attr("data-dragint")){
			correct++;	
			$(this).children("[data-dragint]").addClass("intCorrect")
		}
		else{wrong++;
		$(this).children("[data-dragint]").addClass("intWrong")
		}
	});	
	
	$(".interactiveCorrect > span").html(correct);
	$(".interactiveWrong > span").html(wrong);
	$(".interactiveCorrect,.interactiveWrong").fadeIn(0);
});



//Drag and drop interactive mousedown trigger
$(document).on("mousedown touchstart", ".dragInteractive", function (e) {	
	$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");

	$(".interactiveCorrect,.interactiveWrong").fadeOut(0);
	$(".dragging").removeClass("dragging");
	
	$(this).addClass("dragging");
	
	$(".container").append($(this)[0].outerHTML);
	
	if(!Frame[currentFrame].Interactive.dragMore){$(".dragging").eq(0).addClass("dragTransparent");}	

	$(".dragging").eq(0).removeClass("dragging");
	if($(this).closest(".dropInteractive").length>0){$(this).remove();}
	
	inter=coords(e,".dragging");
	$(document).on("mousemove touchmove", onInteractive);
	$(document).on("mouseup touchend", onInteractiveUp);
});


//On drag interactivetrigger
var onInteractive = function(e) {	
	var dim=coords(e,".container");
	
	$(".dragging").css({'left': (dim.left-inter.left) +'px','top': (dim.top-inter.top) +'px'});

};


//On mouse up interactive trigger
var onInteractiveUp = function(e) {
	e.preventDefault;
	var dim=coords(e,".container");
	var flag=0;var inp;
	$(".dropInteractive").each( function( index, value ) {
		var left = parseFloat($(this).css("left").replace("px"));
		var top = parseFloat($(this).css("top").replace("px"));
		if(dim.left>left&&dim.left<(left+$(this).width())&&dim.top>top&&dim.top<(top+$(this).height())){			
			if($(this).children().length==1){
				$(".container>[data-dragint=\""+ $(this).children().attr("data-dragint") +"\"]").removeClass("dragTransparent");
				$(this).html("");
			}	
			$(this).append($(".dragging")[0].outerHTML);
			inp=$(this);flag=1;			
			
		}
		
		if(!Frame[currentFrame].Interactive.dragMore){try{$(".container>[data-dragint=\""+ $(this).children().attr("data-dragint") +"\"]").addClass("dragTransparent");}catch(err){}
}					
	});
	
	if(flag==0){$(".container>[data-dragint=\""+ $(".container>.dragging").attr("data-dragint") +"\"]").removeClass("dragTransparent");
		}	
	$(".container>.dragging").remove();
	
		
	if($(".dropInteractive .dragInteractive").length==$(".dropInteractive").length){
		$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");		
	}
	else{
		$(".interactiveCheck").attr("class","interactiveCheck");	
		
	}	
	$(document).off("mousemove touchmove", onInteractive);
	$(document).off("mouseup touchend", onInteractiveUp);
};


//Go to vocabulary
$(document).on("click", "[data-type='VC']:not([data-disabled])", function () {	
	var glCor=$(this).attr("data-correlation").toUpperCase();var type="SB";
	if(Infos.Module=="Hello"){glCor="Hello";}
	if(Infos.Workbook_Correlation.length==0&&Infos.Studentsbook_Correlation.length>0){glCor+=" (WB)";type="WB"}
	
	if($(this).attr("data-correlation")){
		window.name = '{"GlossaryModule":"'+ Infos.Module +'","GlossaryLesson":"'+glCor+'","Type":"'+type+'","Return":"'+(parseInt(currentFrame)+1)+'"}'		
	}		
	setTimeout(function(){ window.location.href = "../EX/Vocabulary.html";}, 200);	
});

//Workbook-Student's book correlation
$(document).on("click", "[data-type='WB'],[data-type=SB]", function () {
	var loc=""
	if(!$(this).is("[data-skip]")){
		var mCor=$(this).attr("data-correlation");	
		window.name = '{"Lesson":"'+mCor+'"}';	
	}
	else{
		window.name = '{"Frame":"'+$(this).attr("data-skip")+'"}';		
	}
	var url = $(this).attr("data-type");
	
	if(Infos.Module=="0"||Infos.Module=="Hello"){
		loc = "../"+url+"/Hello.html";
	}
	else{
		loc = "../"+url+"/Module"+ Infos.Module +".html";	
	}
	
	setTimeout(function(){ window.location.href = loc;}, 200);
	
	
});	


//Portal to correlation
$(document).on("click", "[data-type='PO']", function () {
	
	window.name = '{"Lesson":"'+$(this).attr("data-correlation")+'"}';
	var url = $(this).attr("data-type");
	setTimeout(function(){window.location.href = "../EX/Portal"+ Infos.Module +".html";	}, 200);
});	



//Grammarbook correlation
$(document).on("click", "[data-type='GR']", function () {
	var loc=""
	if(!$(this).is("[data-skip]")){
		var mCor=$(this).attr("data-correlation");	
		window.name = '{"Lesson":"'+mCor+'"}';	
	}
	else{
		window.name = '{"Frame":"'+$(this).attr("data-skip")+'"}';		
	}
	
		loc = "../GB/Module"+ Infos.Module +".html";	
	
	
	setTimeout(function(){ window.location.href = loc;}, 200);
	
});	

$(document).on("click", ".mainBack", function () {
	
	var str=window.location.href;
	var type=str.substring(str.lastIndexOf("\/")-2,str.lastIndexOf("\/"));
	if(Infos.MainBack){type=Infos.MainBack;}
	
	if(Frame[currentFrame].Lessons[0].indexOf("to Grammar")!=-1){type="PG"}
	if(Frame[currentFrame].Lessons[0].indexOf("to Real")!=-1){type="PR"}
	if(Frame[currentFrame].Lessons[0].indexOf("to Communication")!=-1){type="PC"}
	if(Frame[currentFrame].Lessons[0].indexOf("to Module")!=-1){type="PM"}
	
	var Main={Module:Infos.Module,Type:type};
	window.name = '{"Module":"'+Infos.Module+'","Type":"'+type+'"}';
	
	setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);
	
	
});	



//Sound bar click trigger
$(document).on("click", ".soundBar", function (e) {	
	$(".extraInfo audio")[0].pause();
	clearInterval(soundInterval);
	if($(".extraInfo audio[data-start]").length==0){
			$(".extraInfo audio").attr("data-start","0");
			$(".extraInfo audio").attr("data-end",$(".extraInfo audio")[0].duration);
		}
	var left=coords(e,".soundBar").left;
	var percentage = (left)/$(this).width();	
	var start=parseFloat($(".extraInfo audio").attr("data-start"));
	var end=parseFloat($(".extraInfo audio").attr("data-end"));
	var soundWidth = (end-start);	
	var cr=percentage*soundWidth+start;
	$(".phraseActive").removeClass("phraseActive");	
	 try{$.each(Frame[currentFrame].SoundPhrases, function( index, value ) {
		if(cr<=value){			
			soundCurrent=index+1;
			if(soundCurrent%2==0){soundCurrent--;}			
			return false;}			
	});}
	catch(err){}			
	$(".extraInfo audio")[0].currentTime=cr;
	$(".extraInfo audio")[0].play();
	$(".audioBtn").addClass("audioPause");
	clearJustiSound();
	soundInterval=setInterval(soundPhrases,20);
});	


//Videobar
$(document).on("click", ".videoBar", function (e) {
	$(".subsSpan").html("");
	if(!$(e.target).is("[data-videopart]")){
    clearInterval(videoInterval);
	var left=coords(e,".videoBar").left;
	var percentage = (left)/$(this).width();
	var crTime=percentage*$(".videoContainer video")[0].duration*1000;
	$(".videoContainer video")[0].currentTime=percentage*$(".videoContainer video")[0].duration;
	
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){
			$(".subsSpan").html("");videoCurrent=1;return false;
			}
		try{
			if(value.Start<crTime){
				videoCurrent=index+1;
				if(value.End>crTime){
					$(".subsSpan").html(subs[videoCurrent-2].Text);
				}
				return false;
			}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
	}
});

	
//Video part click
$(document).on("click", "[data-videopart]", function (e) {
	$(".subsSpan").html("");
    clearInterval(videoInterval);
	
	$(".videoContainer video")[0].currentTime=$(this).attr("data-videopart")/1000;
	var crTime=$(".videoContainer video")[0].currentTime;
	$.each(subs, function( index, value ) {
		if(index==0&&value.Start>crTime){$(".subsSpan").html("");videoCurrent=1;return false;}
		try{if(value.Start<crTime){videoCurrent=index+1;if(value.End>crTime){$(".subsSpan").html(subs[videoCurrent-2].Text);}return false;}
		}catch(err){}
	});
	videoInterval=setInterval(videoBar,20);
});

//On end of sound
$('.extraInfo audio').on('ended', function() {	
   clearSound();
});


//On end of video
$('.videoContainer video').on('ended', function() {
	clearVideo();
	$(".pauseBtn").removeClass("pauseBtn").addClass("playBtn");
	$(".videoWrapper").fadeOut(0);
});


//Fill fade in
$(document).on("click", ".fill:not([data-fill])", function () {
	if($(this).find(".txtmc").length==0){
		$(this).toggleClass("fillVisible");
		$(".clickSound")[0].play();
		}
	
});	

//Fill fade out
$(document).on("click", ".fillVisible:not([data-fill])", function () {
	if($(this).find(".txtmc").length==0){
		$(this).removeClass("fillVisible");
		$(".clickSound")[0].play();
		}	
});	

//Line fade in-out
$(document).on("click", ".line circle", function () {
	$(this).closest(".line").toggleClass("lineVisible");
	$(".clickSound")[0].play();
});	

//Fill with target fade in out
$(document).on("click", "[data-fill]:not(.fill)", function () {
	$(".fill[data-fill="+ $(this).attr("data-fill") +"]").toggleClass("fillVisible");
	$(".clickSound")[0].play();
});	


//Show justifications
$(document).on("click", "[data-justification]", function () {
	var inp=$(this);
	$(".highlightActive").removeClass("highlightActive");
	$(".justSound").html("");	
	
	if(!inp.hasClass("justActive")){
		$(".justActive").removeClass("justActive");		
		$(this).addClass("justActive");
		
		if(!$(this).attr("data-justext")){
			$("[data-highlight='"+ $(this).attr("data-justification") +"']").addClass("highlightActive");
			//if($(this).attr("data-keyImg")){$(".justMask").fadeOut(0);$(".keyMask").fadeIn(0);}
			//else{$(".justMask").fadeIn(0);$(".keyMask").fadeOut(0);}
			$(".justMask").fadeIn(0);
			$(".keyMask").fadeOut(0);
			var mintop=100000;
			$(".highlightActive").each( function( index2, value2 ) {	
			 
				if(mintop>parseFloat($(this).css("top"))){mintop=parseFloat($(this).css("top"))}
				if($(this).attr("data-justiphrase")){$(".justSound").append("<svg width='19px' height='15px' viewBox='0 0 19 15' data-justiphrase='"+ $(this).attr("data-justiphrase") +"' style='top:"+ (parseFloat($(this).css("top")) -5) +"px'>"+ justSound +"</svg>");}
			});			
			//if($(this).attr("data-keyImg")){mintop=parseFloat($(this).css("top"))}
			if(parseFloat($(".justMask img").height())<=740 || parseFloat($(".keyMask img").height())<=740){		
				$(".justScroll").fadeOut(0);
			}
			else{
				$(".justScroll").fadeIn(0);	
				srl.Container=$(".justificationWrapper");
				srl.Handle=$(".justScrollHandle");		
				scrollTo(mintop-80);
			}
			
		}
		
		else{
			$(".justMask").fadeOut(0);
			$(".keyMask").fadeIn(0);
			if(!$(this).attr("data-keyImg")){
				$(".keyMask").html($(this).attr("data-justext"));
				$(".justScroll").fadeOut(0);
				$(".keyMaskBig").removeClass("keyMaskBig");
			}
			else{
				$(".keyMask").addClass("keyMaskBig").html("<img src='../Images/Frames/" + $(this).attr("data-keyImg") + ".jpg'/><div style='position:absolute;top:20px;left:30px;width:338px'>"+$(this).attr("data-justext")+"</div>");
				

				var mintop2=0;

				if(parseFloat($(".keyMask div").height()+40)<=740){		
					$(".justScroll").fadeOut(0);
				}
				else{
					$(".justScroll").fadeIn(0);	
					srl.Container=$(".justificationWrapper");
					srl.Handle=$(".justScrollHandle");		
					scrollTo(mintop2-80);
				}
			}

			
		}
		
		$(".justificationWrapper").fadeIn(0);
		$(".justHide").addClass("justDisabled justRemovePhrases");
		
		
	}
	
	else{	
		$(".highlightActive").removeClass("highlightActive");	
		$(".justActive").removeClass("justActive");
		$(".justHide").removeClass("justDisabled justRemovePhrases");
		if($(this).attr("data-justext")){$(".justHide").removeClass("justDisabled");}		
	}
	
	
	 
});	







//Play justification sound
$(document).on("click", ".justSound [data-justiphrase]:not(.justiActive)", function () {
	
	$('audio').each(function () {
		 try{this.pause();this.currentTime = 0;}catch(err){}
	});
	try{clearInterval(justiInterval);}
	catch(err){}	
	try{$(".justiActive")[0].classList.remove("justiActive");}catch(err){}
	$(this)[0].classList.add("justiActive");	
		
	
	soundCurrent=$(this).attr("data-justiphrase")*2-1;
	
	$(".justificationWrapper audio")[0].currentTime=Frame[currentFrame].JustiPhrases[soundCurrent-1];
	
	$(".justificationWrapper audio").attr("data-end",Frame[currentFrame].JustiPhrases[soundCurrent]);
	
	$(".justificationWrapper audio")[0].play();
	clearSound();
	justiInterval=setInterval(justiPhrases,20);
	
});

//Stop justification sound
$(document).on("click", "[data-justiphrase].justiActive", function () {
	clearJustiSound();
});

//Interactive, choice click trigger
$(document).on("click", ".choice", function () {
$(".interactiveCorrect,.interactiveWrong").fadeOut(0);	
$(".intWrong,.intCorrect").removeClass("intWrong intCorrect");

	$("[data-multiplegroup='"+ $(this).attr("data-multiplegroup") +"']").removeClass("selected");	
	$(this).addClass("selected");
	if($("[data-multiplegroup].selected").length==$("[data-multiplecorrect]").length){
		$(".interactiveCheck").attr("class","interactiveCheck interactiveEnabled");		
		}	
});







//Show split screen
$(document).on("click", ".referenceBtn:not([data-disabled])", function (e) {
	$(".justHide").toggleClass("justDisabled");
	$(".highlightActive").removeClass("highlightActive");		
	$(".justActive").removeClass("justActive");
	$(".justHide").removeClass("justRemovePhrases");
	$(".keyMask").fadeOut(0);
	$(".justMask").fadeIn(0);
	$(".justSound").html("");	
	if(parseFloat($(".justMask img").height())<=740){		
			$(".justScroll").fadeOut(0);		
			}
			else{$(".justScroll").fadeIn(0);	
			}
});	

	
//Show-hide answers	
$(document).on("click", ".showAnswers:not([data-disabled])", function (e) {	
	var flag=0;
	if(($(".fill").length+$(".line").length)-$(".fill .txtmc").length==$(".fillVisible").length+$(".lineVisible").length-$(".fillVisible .txtmc").length){flag=1;}	
	$(".fill").each( function (index, value) {		
		if($(this).find(".txtmc").length==0){$(this).addClass("fillVisible")}
	});	
	$(".line").addClass("lineVisible");
	$(this).attr("class","showAnswers hideAnswers");
	if(flag==1){$(".lineVisible").removeClass("lineVisible");
	$(".fill").each( function (index, value) {		
		if($(this).find(".txtmc").length==0){$(this).removeClass("fillVisible")}
	});	
	$(this).attr("class","showAnswers");}
});	




//Show-hide text button
$(document).on("click", ".txtmcBtn:not([data-disabled])", function (e) {
	if($(".fillVisible .txtmc").length==0){
			$(".phraseActive").fadeIn(0);
			$(".txtmc").parent().addClass("fillVisible").css("z-index","2");
	}
	else{
		$(".phraseActive").fadeOut(0);
		$(".txtmc").parent().removeClass("fillVisible").css("z-index","60");
		if(Frame[currentFrame].StaticImage){
			$(".backgroundImage").attr("src","../Images/Frames/"+ Frame[currentFrame].Image +".jpg")
		}

	}

	if(Frame[currentFrame].StaticImage){	
		if($(".staticImage").length==0){
			$(".backgroundImage").attr("src","../Images/Frames/"+ Frame[currentFrame].StaticImage +".jpg").addClass("staticImage");
			}
		else{
			$(".backgroundImage").attr("src","../Images/Frames/"+ Frame[currentFrame].Image +".jpg").removeClass("staticImage");
			$(".phraseActive").fadeOut(0);
			}	
	}
	

	this.classList.toggle('textEnabled');
	console.log(this);


});





//Sticker on hover
$(document).on("mouseenter touchstart", "[data-sticker]", function () {
	$("[data-sticker='"+ $(this).attr("data-sticker") +"']").addClass("hovered");		
});

//Sticker on hover out
$(document).on("mouseleave touchend", "[data-sticker]", function () {
	   $(".hovered").removeClass("hovered");
});



//Mouse down styles
$(document).on("mousedown", "[data-video],.portalCor,[data-type],.secondBackbtn,toolsWrapper>svg,.saveTool,.justmaskClose,[data-justification],[data-sticker],.homeBtn.mainActive,.exitBtn.mainActive,[data-frame]:not([data-disabled]),.mainGroupLeft svg:not([data-disabled]),.mainGroupRight svg:not([data-disabled]),.audioBtn svg,.videoPlayBtn svg,.stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo", function (e) {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
	$(".clickSound")[0].play();
});

//Hover styles
$(document).on("mouseenter touchstart", ".portalCor,[data-video],[data-type]:not([data-disabled]),.secondBackbtn,.toolsWrapper>svg,.saveTool,.justmaskClose,[data-justification],[data-sticker],.homeBtn.mainActive,.exitBtn.mainActive,[data-frame]:not([data-disabled]),.mainGroupLeft svg:not([data-disabled]),.mainGroupRight svg:not([data-disabled]),.audioBtn svg,.videoPlayBtn svg,.stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo", function (e) {
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});	
	$(this).attr('class', function(index, classNames) {return classNames + ' pressed';});
	
});

//Mouse up reset 
$(document).on("mouseup", function () {	//fix
	
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});	
});

//Hover out reset
$(document).on("mouseleave touchend", "[data-video],.secondBackbtn,.toolsWrapper>svg,.saveTool,.justmaskClose,.secondButton,[data-extramodule]>span,.modulesExtraSub>span,[data-correlation],[data-justification],[data-sticker],.homeBtn.mainActive,.exitBtn.mainActive,[data-frame]:not([data-disabled]),.mainGroupLeft svg:not([data-disabled]),.mainGroupRight svg:not([data-disabled]),.audioBtn svg,.videoPlayBtn svg,.stopBtn svg,.videoPause ~ .videostopBtn svg,.closeVideo", function (e) {
	
	$('.pressed').attr('class', function(index, classNames) {return classNames.replace('pressed', '');});
	
});


//Return to Main menu
$(document).on("click", ".homeBtn", function () {
	setTimeout(function(){window.location.href = "../MainMenu.html";}, 200);		
});	


//Save sticker
$(document).on("click", ".saveTool,.toolX", function (e) {
	
	try{
	var inp="";
	
	$(".textTool").each(function( index, value ) {
		inp+=$(".textTool")[index].outerHTML;			
	});
	
	
	var root=JSON.parse(localStorage.getItem("project"));
	var flag=-1;
	$.each(root.Projects, function( index, value ) {
		if(value.Project==projectName){
			var sFlag=-1;
			
			if(value.save){
				$.each(value.save, function( index2, value2 ) {
					if(value2.id==Frame[currentFrame].id&&value2.mode==Infos.Type){sFlag=index2;
						root.Projects[index].save[index2].tool=inp;
						return false;
					}
					
					
				});
					if(sFlag==-1){ root.Projects[index].save.push({"id":Frame[currentFrame].id,"tool":inp,"mode":Infos.Type});}		
				
			}
			else{
				root.Projects[index].save=[{"id":Frame[currentFrame].id,"tool":inp,"mode":Infos.Type}];
				}
				
				return false;
			}		
	}); 
	localStorage.setItem("project", JSON.stringify(root));
	}
	
	catch(err){}


});



//Load sticker
$(document).on("click", ".toolsWrapper>svg", function () {	
	
	try{
	var root=JSON.parse(localStorage.getItem("project"));
	var flag=-1;
	if($(".textLoaded").length==0){
	$.each(root.Projects, function( index, value ) {
		if(value.Project==projectName){
			var sFlag=-1;
			
			if(value.save){
				$.each(value.save, function( index2, value2 ) {
					if(value2.id==Frame[currentFrame].id&&value2.mode==Infos.Type){
						
						$("#sketch").append(value2.tool);
					}
					
					
				});
						
				
			}
			
				
				return false;
			}		
	}); }
	$(".textTool").addClass("textLoaded");
	
	localStorage.setItem("project", JSON.stringify(root));}
	catch(err){tlTip=1;}
});



//Mouse wheel Scroll
$(document).on( 'mousewheel DOMMouseScroll', '.container,.justificationWrapper,.scroll,.justScroll', function(e){
		var delta;var inp;var inpScroll;
		 if (e.originalEvent) {
			if (e.originalEvent.wheelDelta) delta = e.originalEvent.wheelDelta / -40;
			if (e.originalEvent.deltaY) delta = e.originalEvent.deltaY;
			if (e.originalEvent.detail) delta = e.originalEvent.detail;
		}
		delta = (delta<0 ? -1 : 1);
			
		if($(this).hasClass("container")||$(this).hasClass("scroll")){			
			
			srl.Container=$(".container");
			srl.Handle=$(".scrollHandle");			
			}
		else{
			srl.Container=$(".justificationWrapper");
			srl.Handle=$(".justScrollHandle");
			}
		
		scrollTo(srl.Container.scrollTop() + 100 * delta);				   
});


//Scrollbars Scroll
$(document).on("mousedown touchstart", ".scroll,.justScroll", function (e) {	
	if($(this).hasClass("container")||$(this).hasClass("scroll")){			
		srl.Container=$(".container");
		srl.Handle=$(".scrollHandle");
		scrollY=$(".container>img").height()-$(".container").height();	
		}
	else{
		srl.Container=$(".justificationWrapper");
		srl.Handle=$(".justScrollHandle");
		scrollY=$(".justificationWrapper img").height()-$(".justificationWrapper").height();
		}	
	$(document).on("mousemove touchmove",scrollMove);	
	$(document).on("mouseup touchend",scrollUp);	
});

function scrollMove(e)
{		
	var top=coords(e,srl.Handle.parent()).top-10;
	
	scrollTo(scrollY*top/115);	
	
}	

function scrollUp(e)
{	
	e.preventDefault;
	var top=coords(e,srl.Handle.parent()).top-10;	
	scrollTo(scrollY*top/115);
    $(document).off("mousemove touchmove",scrollMove);	
	$(document).off("mouseup touchend",scrollUp);	
}


//Scroll to Position
function scrollTo(position){	
	if(srl.Container.find("img").last().height()>740){
		if(position<0){
			position=0;
		}
		else if(position>srl.Container.find("img").last().height()-740){
			position=srl.Container.find("img").last().height()-740;
		}
		
		srl.Container.scrollTop( position);
		srl.Handle.css("top",115*position/(srl.Container.find("img").last().height()-740)+"px");		
	}	
}





//Keyboard keys next-previous
$(document).keyup(function(e) {
if(e.which == 37 || e.which == 39) {
    var frame;var flag=1;	
	clearSound();
	if((e.which == 39&& $("[data-frame='next'][data-disabled='true']").length==0)||(e.which == 37&& $("[data-frame='previous'][data-disabled='true']").length==0)){
		switch(e.which) {
		case 37:
			if(Frame[currentFrame].Lesson!=Frame[currentFrame-1].Lesson){

				$.each(Frame, function( index, value ) {
					try{
					$.each(value.Lessons, function( index2, value2 ) {					
						if(value2==Frame[currentFrame-1].Lesson){$(".returnSallon").attr("data-disabled","true");InitialSalon(index);flag=0;return false;}
					});
					}catch(err){}
					if(flag==0){return false;}
				});				
				}
			else{InitialSalon(currentFrame-1);}			
			break;
		case 39:
			if(Frame[currentFrame].Lesson!=Frame[currentFrame+1].Lesson){
				$.each(Frame, function( index, value ) {
					try{
					$.each(value.Lessons, function( index2, value2 ) {
						if(value2==Frame[currentFrame+1].Lesson){
							$(".returnSallon").attr("data-disabled","true");
							InitialSalon(index);flag=0;return false;}
					});
					}catch(err){}
					if(flag==0){return false;}
				});	
				
				}
			else{InitialSalon(currentFrame+1);}		
			break;
		default:
			InitialSalon($(this).attr("data-frame"));
	}	
}}






});







//Sound Phrases, soundbar and autoscrolling function
function soundPhrases() {
        var currentTime = $(".extraInfo audio")[0].currentTime;
        if (Frame[currentFrame].SoundPhrases && irrV==0) {
            if (soundCurrent % 2 == 1) {
                if (currentTime >= Frame[currentFrame].SoundPhrases[soundCurrent - 1]) {
                    if ($(".fill:not(.fillVisible) .txtmc").length == 0 && $(".soundSelected").length == 0) {
                        $("[data-phrase=" + parseInt((soundCurrent + 1) / 2) + "]").addClass("phraseActive");
                        var par;
                        if ($(".phraseActive").closest(".justificationWrapper").length > 0) { par = $(".justificationWrapper"); } else { par = $(".container"); }
                        if (parseFloat($(".phraseActive").css("top").replace("px", "")) + parseFloat($(".phraseActive").css("height").replace("px", "")) > par.scrollTop() + 740 || parseFloat($(".phraseActive").css("top").replace("px", "")) < par.scrollTop()) {
                            var top = parseFloat($(".phraseActive").css("top").replace("px", ""));
                            var height = parseFloat($(".phraseActive").css("height").replace("px", ""));
                            if (top < par.scrollTop() || (top + height > par.scrollTop() + 720)) { top -= 40; }
                            if ($(".phraseActive").closest(".justificationWrapper").length > 0) {
                                var jusTop = 115 * top / (par.find("img").last().height() - 740);
                                if (jusTop > 115) { jusTop = 115; }
                                $(".justScrollHandle").css("top", jusTop + "px");

                            }
                            else {
                                var jusTop = 115 * top / (par.find("img").last().height() - 740);
                                if (jusTop > 115) { jusTop = 115; }
                                $(".scrollHandle").css("top", jusTop + "px");
                            }
                            par.animate({ scrollTop: top }, 100);

                        }
                    }
                    soundCurrent++;
                }
            }
            else {
                if (currentTime >= Frame[currentFrame].SoundPhrases[soundCurrent - 1]) {
                    $(".phraseActive").removeClass("phraseActive");
                    soundCurrent++;
                }
            }
        }

        if ($("[data-txtmc]:not(.fillVisible)").length > 0) { $(".phraseActive").removeClass("phraseActive"); }
		
		if($(".textEnabled").length==0 && $(".txtmcBtn[data-disabled]").length == 0){	//fix Highlights
			//$(".phraseActive").fadeOut(0);
			$(".phraseActive").removeClass("phraseActive");
		}


        if ($(".extraInfo audio").attr("data-end") <= $(".extraInfo audio")[0].currentTime) {
            clearSound();
        }
        else {
            var start = parseFloat($(".extraInfo audio").attr("data-start"));
            var end = parseFloat($(".extraInfo audio").attr("data-end"));
            var soundWidth = (end - start);
            var soundBarWidth = $(".soundBar").width();
            var percentage = (currentTime - start) / soundWidth;
            if (percentage > 1) { percentage = 1; }
            var bWidth = percentage * soundBarWidth;
            $(".soundBar .barRed").css("width", bWidth + "px");
            var tr = minTwoDigits(Math.floor(((currentTime - start) + 1) / 60)) + ":" + minTwoDigits(Math.ceil((currentTime - start)) % 60);
            $(".soundTimer").html(tr);
        }

    }




//Video Interval, videobar and subs
function videoBar(){
var percentage=$(".videoContainer video")[0].currentTime/$(".videoContainer video")[0].duration;
var phrTime=$(".videoContainer video")[0].currentTime*1000;
if(percentage>1){percentage=1;}
var soundBarWidth=$(".videoBar").width();
var bWidth=percentage*soundBarWidth;
$(".videoBar .videobarRed").css("width",bWidth+"px");

var tr = minTwoDigits(Math.floor(($(".videoContainer video")[0].currentTime + 1) / 60)) + ":" + minTwoDigits(Math.ceil($(".videoContainer video")[0].currentTime) % 60);
$(".videoTimer").html(tr);	
if(subs){
	try{if(phrTime>=subs[videoCurrent-1].Start){
			$(".subsSpan").html(subs[videoCurrent-1].Text);
		}	
	}catch(err){}

	try{if(phrTime>=subs[videoCurrent-1].End){
			$(".subsSpan").html("");
			videoCurrent++;		
		}
	}catch(err){}
}	
}



	

function minTwoDigits(n) {
		return (n < 10 ? '0' : '') + n;
	}



//Justifications inerval
function justiPhrases(){
var currentTime=$(".justificationWrapper audio")[0].currentTime*1000;	
var intervalFlag=0;

 if(currentTime>=$("[data-end]").attr("data-end")*1000){
	clearJustiSound();
	intervalFlag=1;} 
}


//Sound button
$(document).on("click", "[data-alstart]", function () {	
	
	
	if(!$(this).hasClass("soundSelected")){
		clearSound();clearJustiSound();
		
		$(".extraInfo audio")[0].currentTime=$(this).attr("data-alstart");
		$(this).addClass("soundSelected");
		$(".extraInfo audio").attr("data-start",$(this).attr("data-alstart"));
		$(".extraInfo audio").attr("data-end",$(this).attr("data-alend"));
		
		$(".playBtnWrapper").addClass("audioPause");
		$(".extraInfo audio")[0].play();
		soundInterval=setInterval(soundPhrases,20);
	}
	else{clearSound();}
	
});



//Clear all sound variables and reset
function clearSound(){
	try{
	clearInterval(soundInterval);
	}
	catch(err){}
	$(".extraInfo audio").removeAttr("data-start").removeAttr("data-end")
	$(".extraInfo audio")[0].pause();
	try{$(".extraInfo audio")[0].currentTime=0;}catch(err){}
	soundCurrent=1;
	$(".audioPause").removeClass("audioPause");
	$(".phraseActive").removeClass("phraseActive");
	$(".soundTimer").html("00:00");
	$(".barRed").css("width","0px");
	$(".soundSelected").removeClass("soundSelected");	
}

//Clear video variables and reset
function clearVideo(){
try{
clearInterval(videoInterval);
}
	catch(err){}
$(".videoContainer video")[0].pause();
try{$(".videoContainer video")[0].currentTime=0;}catch(err){}
$(".videoPlayBtn").addClass("videoPause");
$(".videoTimer").html("00:00");
$(".videobarRed").css("width","0px");
videoCurrent=1;	
	
}


//Clear all sound variables and reset
function clearJustiSound(){
try{
clearInterval(justiInterval);
}
catch(err){}
$(".justificationWrapper audio")[0].pause();
try{$(".justificationWrapper audio")[0].currentTime=0;}catch(err){}
$(".justificationWrapper audio").removeAttr("data-end");
try{$(".justiActive").attr("class",$(".justiActive").attr("class").replace("justiActive",""));}catch(err){}	
	
	
}



//On windows resize apply scaling
$(window).resize(function() {
	


  if($(window).width()<1280 || $(window).height()<960){
	if($(window).height()/$(window).width()>0.75){
		scale=$(window).width()/1280;
		
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': '0px'});
	$('.IWB').css({'top': ($(window).height()-(scale*960))/2+ 'px'});

	}
	else{
		scale=$(window).height()/960;
	$('.IWB').css({'-webkit-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'-ms-transform': 'scale(' + scale + ')'});
	$('.IWB').css({'transform': 'scale(' + scale + ')'});
	$('.IWB').css({'left': ($(window).width()-(scale*1280))/2+ 'px'});
	$('.IWB').css({'top':'0px'});

		}
		window.scale=scale;
}

else{
$('.IWB').css({'-webkit-transform': 'scale(1)'});
	$('.IWB').css({'-ms-transform': 'scale(1)'});
	$('.IWB').css({'transform': 'scale(1)'});	
$('.IWB').css({'left': ($(window).width()-1280)/2+ 'px'});
$('.IWB').css({'top': ($(window).height()-960)/2+ 'px'});
}
   
});



});