import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})


export class App {
  userStatus = signal<'online' | 'offline'>('offline');

  online() {
    this.userStatus.set('online');
  }

  offline() {
    this.userStatus.set('offline');
  }

  toggle() {
    this.userStatus.update((current) => (current === 'online' ? 'offline' : 'online'));
  }
}