import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercises: Angular Lesson 3';

  color = 'green';
  height = 0;
  width = 0;
  message = 'Space shuttle ready for takeoff!';

  takeOffEnabled: boolean = true;
  upEnabled: boolean = true;
  downEnabled: boolean = true;
  leftEnabled: boolean = true;
  rightEnabled: boolean = true;


handleTakeOff() {
  let result = window.confirm('Are you sure the shuttle is ready for takeoff?');
  if (result) {
    this.color = 'blue';
    this.height = 10000;
    this.width = this.width;
    this.message = 'Shuttle in flight.';
    this.takeOffEnabled = false;
  }
}

handleLanding(rocketImage) {
  window.alert('The shuttle is landing. Landing gear engaged.');
  
  this.color = 'green';
  this.height = 0;
  this.width = this.width;
  this.message = 'The shuttle has landed.';
  this.takeOffEnabled = true;
  rocketImage.style.bottom = '0px';
}

handleAbort(rocketImage) {
  let result = window.confirm('Are you sure you want to abort the mission?');
  if (result) {
    this.color = 'red';
    this.height = 0;
    this.width = this.width;
    this.message = "Mission aborted";
    this.takeOffEnabled = true;
    rocketImage.style.bottom = '0px';
  }
}

edgeCheck() {
  if (this.height <= 10000) {
    this.color = 'orange';
    this.downEnabled = false;
  }else if (this.height >= 340000) {
    this.color = 'orange';
    this.upEnabled = false;
  }else if (this.width <= -20000) {
    this.color = 'orange';
    this.leftEnabled = false;
  }else if (this. width >= 470000) {
    this.color = 'orange';
    this.rightEnabled = false;
  } else {
    this.color = 'blue';
    this.downEnabled = true;
    this.upEnabled = true;
    this.leftEnabled = true;
    this.rightEnabled = true;
  }
}

moveRocket(rocketImage, direction) {
  if (direction === 'right' && this.width < 470000) {
    let movement = parseInt(rocketImage.style.left) + 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width + 10000;
    this.edgeCheck();
  } else if (direction === 'left' && this.width > -20000) {
    let movement = parseInt(rocketImage.style.left) - 10 + 'px';
    rocketImage.style.left = movement;
    this.width = this.width - 10000;
    this.edgeCheck();
  } else if (direction === 'down' && this.height > 10000) {
    let movement = parseInt(rocketImage.style.bottom) - 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height - 10000;
    this.edgeCheck();
  } else if (direction === 'up' && this.height < 340000) {
    let movement = parseInt(rocketImage.style.bottom) + 10 + 'px';
    rocketImage.style.bottom = movement;
    this.height = this.height + 10000;
    this.edgeCheck();
  }
}

}

