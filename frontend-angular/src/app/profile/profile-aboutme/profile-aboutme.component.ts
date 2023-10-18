import { Component, OnInit } from '@angular/core';
import { ChannelService } from 'src/app/channels/channel.service';
import { UserDto } from 'src/app/channels/channels.model';

@Component({
  selector: 'app-profile-aboutme',
  templateUrl: './profile-aboutme.component.html',
  styleUrls: ['./profile-aboutme.component.css']
})
export class ProfileAboutmeComponent implements OnInit {
  profile: UserDto;

  constructor(private channelService: ChannelService) {}

  ngOnInit() {
    this.profile = this.channelService.getSingleUser();
  }
}