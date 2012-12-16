$(document).ready(function(e) {
    $.getJSON('project.json',function(e){
		var data = e;
		var projects = '';
		for(var i=0; i < data.length ; i++){
			
			var head = '<a href="'+data[i].href+'">'+data[i].name+'</a>';
			
			var pic = '<div class="proj-pic">';
			for(var j=0; j < data[i].picture.length ; j++){
				pic += '<a class="fancybox" href="'+data[i].picture[j].big+'" data-fancybox-group="gallery" title="'+data[i].picture[j].desc+'"><img width="50" height="50" src="'+data[i].picture[j].small+'" alt="'+data[i].name+' '+i+' picture" /></a>';
			}
			pic += '<div class="clear"></div></div>';
			
			var description = '<p>'+data[i].description+'</p>'
			projects += '<li>'+head+pic+description+'</li>'
			
		}
		$('#pastprojul').html(projects);
		$('.fancybox').fancybox({
			wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'elastic',
				closeEffect : 'elastic',
				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
		});
		
		$("#pastproj").mCustomScrollbar({
					scrollButtons:{
						enable:true
					}
				});
	});
	
	
	
});