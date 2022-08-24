import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const SAVED_TIME = 'videoplayer-current-time';

onPageUpdate();

player.on('play', onStartPlaying);

player.on('timeupdate', throttle(onPlayingProcess, 1000));


function onStartPlaying () {
  localStorage.removeItem(SAVED_TIME);
}

function onPlayingProcess(e) {
//   console.log(e);
  localStorage.setItem(SAVED_TIME, JSON.stringify(e));
}

function onPageUpdate() {
  const playerData = JSON.parse(localStorage.getItem(SAVED_TIME));

  if (playerData) {
    // console.log(`Страница обновилась, запись есть`)
    // console.log(playerData)
    let sec = playerData.seconds;
    player.setCurrentTime(sec);
    return;
  }

  // console.log(`Начали заново, записей нет`)
}

