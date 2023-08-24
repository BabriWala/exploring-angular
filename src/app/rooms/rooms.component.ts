import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
  hotelName = "Cox'sBAzar Hotel";
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5
  }

  roomList: RoomList[] = [
    {
      roomType: "Deluxe",
      amenities: "Air Conditionar",
      price: 300,
      photos: "htttps://facebook.com",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
    },
    {
      roomType: "Deluxe",
      amenities: "Air Conditionar",
      price: 300,
      photos: "htttps://facebook.com",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
    },
    {
      roomType: "Deluxe",
      amenities: "Air Conditionar",
      price: 300,
      photos: "htttps://facebook.com",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
    },
  ]

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
