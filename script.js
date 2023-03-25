
function selectLang(language) {
    document.querySelector('.app-wrapper').dataset.lang = language
    localStorage.setItem('language', language)
}

var i = window[sharedNames.images];
let test = false,
    images = i

let w = 0;

function select(n) {
    return Math.floor(Math.random() * n) 
    // return 0
    // return w++;
}

function getRandomImage() {
    return images[select(images.length)]
}

/**
 * @param screenToOpen String
 */
function showScreen(screenToOpen) {
    const screens = ['opener', 'player', 'loading']

    document.querySelector(`[role=${screenToOpen}]`).classList.remove('hidden')

    screens
        .filter(name => name !== screenToOpen)
        .forEach(name =>
            document.querySelector(`[role=${name}]`).classList.add('hidden')
        )
}

function doPrediction() {
    const random = getRandomImage();

    const predictionImage = document.getElementById('qweshtrjydhstrdthalgajrbaovbaouergbuelrhgblxhbdrg')
    predictionImage.src = random.image;

    document.getElementById('translation').innerHTML = random.html;

    predictionImage.addEventListener('load', onImageLoaded)


    showScreen('loading')
    toggleLoaderVideo(true)

    function onImageLoaded() {
        predictionImage.removeEventListener('load', onImageLoaded)
        setTimeout(() => {
            toggleLoaderVideo(false)
            showScreen('player')
        }, Math.random() * 0 + 1700)
    }

    function toggleLoaderVideo(isPlay) {
        const loadingVideoElement = document.getElementById('loading-video-element')

        if (isPlay) {
            loadingVideoElement.play()
        } else {
            loadingVideoElement.pause()
            loadingVideoElement.currentTime = 0;
        }
    }
}
