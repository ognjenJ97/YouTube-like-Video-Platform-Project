import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../channels/channel.service';
import { ChannelsHttpService } from '../channels/channel-http.service';
import { VideosService } from './video.service/video.service';
import { VideosHttpService } from './video.service/video-http.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private channelService: ChannelService, private channelHttpService: ChannelsHttpService, private videosService: VideosService, private videosHttpServce: VideosHttpService) {}

  ngOnInit() {

    this.channelService.clearPageNo();
    this.channelService.clearChannels();
    this.channelHttpService.fetchUsers();

    this.videosService.clearVideos();
    this.videosService.clearPageNo();
    this.videosService.cleartTitle();
    this.videosService.clearSort();
    this.videosHttpServce.fetchVideos();
  }

}
