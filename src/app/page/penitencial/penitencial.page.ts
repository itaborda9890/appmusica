import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

import { Howl } from 'howler';

export interface Track {
  name: string;
  path: string;
}

@Component({
  selector: 'app-penitencial',
  templateUrl: './penitencial.page.html',
  styleUrls: ['./penitencial.page.scss'],
})
export class PenitencialPage {
  playlist: Track[] = [
    {
      name: 'Hoy quisiera llorar igual que Pedro',
      path: './assets/canciones/penitenciales/Hoy quisiera llorar igual que Pedro.mp3',
    },
    {
      name: '',
      path: './assets/canciones/penitenciales/vieneconalegria.mp3',
    },
    {
      name: '',
      path: './assets/canciones/penitenciales/Juntos_como hermanos.mp3',
    },
    {
      name: '',
      path: './assets/canciones/penitenciales/jesus pasa por aqui.mp3',
    },
    {
      name: '',
      path: './assets/canciones/penitenciales/alto escuchame.mp3',
    },
    {
      name: '',
      path: './assets/canciones/penitenciales/el espiritu  dios.mp3',
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
