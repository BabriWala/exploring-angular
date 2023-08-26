import { Component } from '@angular/core';
import { Room, RoomList } from './rooms';
import { ChangeDetectionStrategy } from '@angular/compiler';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
  
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

  selectedRoom! : RoomList;

  roomList: RoomList[] = [
    { roomNumber: 1,
      roomType: "Deluxe",
      amenities: "Air Conditionar",
      price: 300,
      photos: "htttps://facebook.com",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 5.03
    },
    { roomNumber: 2,
      roomType: "Deluxe",
      amenities: "Air Conditionar",
      price: 300,
      photos: "htttps://facebook.com",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 2.5
    },
    { roomNumber: 3,
      roomType: "Deluxe",
      amenities: "Air Conditionar",
      price: 300,
      photos: "htttps://facebook.com",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 3.5
    },
  ]

  

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  addRoom(){
    const room: RoomList = {
      roomNumber: 4,
      roomType: "Deluxe",
      amenities: "Air",
      price: 400,
      photos: "image",
      checkInTime: new Date("11-Nov-2021"),
      checkOutTime: new Date("12-Nov-2021"),
      rating: 3.5
    }

    // this.roomList.push(room)
    this.roomList = [...this.roomList, room]
  }

  selectRoom(room: RoomList){
    console.log(room)
    this.selectedRoom = room;
  }
}
