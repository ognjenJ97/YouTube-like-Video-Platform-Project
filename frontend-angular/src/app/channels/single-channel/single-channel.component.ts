import { Component, Input } from '@angular/core';
import { UserDto } from '../channels.model';

@Component({
  selector: 'app-single-channel',
  templateUrl: './single-channel.component.html',
  styleUrls: ['./single-channel.component.css']
})
export class SingleChannelComponent {

  @Input() channel: UserDto;



}
