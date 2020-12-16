import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   inactiveGold: boolean = false;
   inactiveSilver: boolean = false;
   inactiveCopper: boolean = false;
   location: string = "center";


   constructor() { }

   ngOnInit() { }

   reactivate(): void {
      this.inactiveGold = false;
      this.inactiveSilver = false;
      this.inactiveCopper = false;
   }

   evade(oldLocation: string) {
      let possiblePositions = ['left', 'right', 'center'];
      while (this.location === oldLocation) {
         this.location = possiblePositions[Math.floor(Math.random()*3)];
      }
      return this.location;
   }
}
