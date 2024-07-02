var bgMusic = document.getElementById('bgMusic');
var toggleButton = document.getElementById('toggleButton');

        function toggleMusic() {
            if (bgMusic.paused) {
                bgMusic.play();
            } else {
                bgMusic.pause();
            }
        }