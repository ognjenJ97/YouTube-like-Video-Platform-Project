import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChannelService } from './channel.service';
import { UserDto } from './channels.model';
import { Subscription } from 'rxjs';
import { ChannelsHttpService } from './channel-http.service';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css'],
})
export class ChannelsComponent implements OnInit, OnDestroy {
  channels: UserDto[];
  subscription: Subscription;
  loadMoreButton: boolean;

  constructor(
    private channelService: ChannelService,
    private channelHttpService: ChannelsHttpService
  ) {}

  ngOnInit() {
    this.subscription = this.channelService.channelsChanged.subscribe(
      (updatedChannels: UserDto[]) => {
        this.channels = updatedChannels;
        this.loadMoreButton = this.channelService.getLoadMoreButton();
      }
    );

  }

  onLoadMore() {
    const pageNo = this.channelService.getPageNo();
    this.channelService.setPageNo(pageNo + 1);
    this.channelHttpService.fetchUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
