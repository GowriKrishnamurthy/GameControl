import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent  {
  @Output('intervalFired') intervalFired = new EventEmitter<number>();
  counterValue = 1;
  interval;
  onStartGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.counterValue);
      this.counterValue++;
    }, 1000);
  }
  onStopGame() {
    clearInterval(this.interval);
  }
}

