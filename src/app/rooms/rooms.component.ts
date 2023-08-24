import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Cox'sBAzar Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
