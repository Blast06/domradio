		


		
          $(document).ready(function(){

	  			var audio = $('#reproductor')[0]

	  			audio.addEventListener('waiting', function () {
					$('#con-btn-play').html('<img src="assets/imgs/preloader.gif" width="100">');
			    }, false);
			    audio.addEventListener('playing', function () {
					$('#con-btn-play').html('<img src="assets/imgs/btn-pause.png" width="100">');
			    }, false);

	  			$('#player').click(function(){
	  				if (audio.paused){
	  				audio.play();
	  				$('#con-btn-play').html('<img src="assets/imgs/btn-pause.png" width="100">');
	  				
	  				}else {
	  				audio.pause();	  				
	  				$('#con-btn-play').html('<img src="assets/imgs/btn-play.png" width="100">');
	  				}
	  			});
	  	});
		 