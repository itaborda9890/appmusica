import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange,  } from '@ionic/angular';

import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.page.html',
  styleUrls: ['./introduccion.page.scss'],
})
export class IntroduccionPage {
  playlist: Track[] = [
    {
      name: 'GOZO EN MI ALMA',
      path: './assets/canciones/introduccion/gozo en mi alma.mp3',
    },
    {
      name: 'VIENE CON ALEGRIA',
      path: './assets/canciones/introduccion/vieneconalegria.mp3',
    },
    {
      name: 'Juntos como Hermanos',
      path: './assets/canciones/introduccion/Juntos_como hermanos.mp3',
    },
    {
      name: 'Jesus esta pasando por aqui',
      path: './assets/canciones/introduccion/jesus pasa por aqui.mp3',
    },
    {
      name: 'Alto escuchame',
      path: './assets/canciones/introduccion/alto escuchame.mp3',
    },
    {
      name: 'El espiritu de Dios',
      path: './assets/canciones/introduccion/el espiritu  dios.mp3',
    },
  ];
  show = false;
  activeTrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progress = 0;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  @ViewChild('range', { static: false }) range: IonRange;
  constructor() {}
  start(track: Track) {
    if (this.player) {
      this.player.stop();
    }
    this.player = new Howl({
      src: [track.path],
      html5: true,
      onplay: () => {
        console.log('onplay');
        this.isPlaying = true;
        this.activeTrack = track;
        this.updateProgress();
      },
      onend: () => {
        console.log('onend');
        window.location.href = '/dashboard';
      },
    });
    this.player.play();
    this.show = true;
  }
  togglePlayer(pause) {
    this.isPlaying = !pause;
    if (pause) {
      this.player.pause();
    } else {
      this.player.play();
    }
  }

  next() {
    const index = this.playlist.indexOf(this.activeTrack);
    if (index !== this.playlist.length - 1) {
      this.start(this.playlist[index + 1]);
    } else {
      this.start(this.playlist[0]);
    }
  }

  prev() {
    const index = this.playlist.indexOf(this.activeTrack);
    if (index > 0) {
      this.start(this.playlist[index - 1]);
    } else {
      this.start(this.playlist[this.playlist.length - 1]);
    }
  }

  seek() {
    const newValue = +this.range.value;
    const duration = this.player.duration();
    this.player.seek(duration * (newValue / 100));
  }
  updateProgress() {
    const seek = this.player.seek();
    this.progress = (seek / this.player.duration()) * 100 || 0;

    setTimeout(() => {
      this.updateProgress();
    }, 1000);
  }
}
