import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsHttpService } from 'src/app/channels/channel-http.service';
import { ChannelService } from 'src/app/channels/channel.service';
import { UserDto } from 'src/app/channels/channels.model';

@Component({
  selector: 'app-profile-subscribers',
  templateUrl: './profile-subscribers.component.html',
  styleUrls: ['./profile-subscribers.component.css'],
})
export class ProfileSubscribersComponent implements OnInit {

  profile: UserDto;
  subscribers: UserDto[];
  subscriptions: UserDto[];

  constructor(
    private channelService: ChannelService,
    private channelHttpService: ChannelsHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.profile = this.channelService.getSingleUser();
    this.subscribers = this.profile.subscribers;
    this.subscriptions = this.profile.subscriptions;

    this.channelService.getSingleUserChange().subscribe((updateSingleUser: UserDto) => {
      this.profile = updateSingleUser;
      this.subscribers = this.profile.subscribers;
      this.subscriptions = this.profile.subscriptions;
    })

  }








}
