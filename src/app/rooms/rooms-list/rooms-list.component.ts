import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:  ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges{
  @Input() rooms: RoomList[] = []
  @Output() selectedRoom = new EventEmitter<RoomList>();

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnChanges(changes: SimpleChanges): void{
    // throw new Error('Method not implemented');
    console.log(changes)
  }
}
