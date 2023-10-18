import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelsHttpService } from 'src/app/channels/channel-http.service';
import { ChannelService } from 'src/app/channels/channel.service';
import { UserDto } from 'src/app/channels/channels.model';
import { VideoDto } from 'src/app/videos/video.model';
import { VideosModule } from 'src/app/videos/videos.module';

@Component({
  selector: 'app-profile-videos',
  templateUrl: './profile-videos.component.html',
  styleUrls: ['./profile-videos.component.css']
})
export class ProfileVideosComponent implements OnInit {

  profile: UserDto;

  videosPopular: VideoDto[];
  minPopular: number = 0;
  maxPopular: number = 3;
  videosPopularHtml: VideoDto[];

  videosDate: VideoDto[];
  minDate: number = 0;
  maxDate: number = 3;
  videosDateHtml: VideoDto[];

  videosPrivate: VideoDto[];
  minPrivate: number = 0;
  maxPrivate: number = 3;
  videosPrivateHtml: VideoDto[];

  videosBlocked: VideoDto[];
  minBlocked: number = 0;
  maxBlocked: number = 3;
  videosBlockedHtml: VideoDto[];

  profileId: number;
  userId: number;

  isAdmin: boolean = false;
  isOwner: boolean = false;

  constructor(
    private channelService: ChannelService,
    private channelHttpService: ChannelsHttpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
    this.profile = this.channelService.getSingleUser();
    this.profileId = this.profile.id;
    this.userId = +localStorage.getItem('userId');

    if(localStorage.getItem("role") === "ROLE_ADMIN") {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }

    if(this.profileId === this.userId) {
      this.isOwner = true;
    } else {
      this.isOwner = false;
    }

      this.videosPopular = this.profile.videos.filter(video => (
        video.visibility === 'PUBLIC' && !video.blocked)).sort((a, b) => b.views - a.views);
        this.updatePopularVideosHtml(this.videosPopular);

        this.videosDate = this.profile.videos.filter(video => (
        video.visibility === 'PUBLIC' && !video.blocked)).sort((a, b) => Date.parse(b.creationDate) - Date.parse(a.creationDate));
        this.updateDateVideosHtml(this.videosDate);

        this.videosBlocked = this.profile.videos.filter(video => video.blocked).sort((a, b) => b.views - a.views);
        this.updateBlockedVideosHtml(this.videosBlocked);

        this.videosPrivate = this.profile.videos.filter(video => video.visibility === 'PRIVATE').sort((a, b) => b.views - a.views); 
        this.updatePrivateVideosHtml(this.videosPrivate);
  }

  updatePopularVideosHtml(videoList: VideoDto[]) {
    this.videosPopularHtml = videoList.slice(this.minPopular, this.maxPopular);
  }

  updateDateVideosHtml(videoList: VideoDto[]) {
    this.videosDateHtml = videoList.slice(this.minPopular, this.maxPopular);
  }

  updatePrivateVideosHtml(videoList: VideoDto[]) {
    this.videosPrivateHtml = videoList.slice(this.minPopular, this.maxPopular);
  }

  updateBlockedVideosHtml(videoList: VideoDto[]) {
    this.videosBlockedHtml = videoList.slice(this.minPopular, this.maxPopular);
  }

  onLessPopular() {
    if(this.minPopular <= 0) {
      return
    }
    this.minPopular = this.minPopular - 3;
    this.maxPopular = this.maxPopular - 3;
    this.updatePopularVideosHtml(this.videosPopular);
  }

  onMorePopular() {
    if(this.maxPopular > this.videosPopular.length) {
      return;
    }
    this.minPopular = this.minPopular + 3;
    this.maxPopular = this.maxPopular + 3;
    this.updatePopularVideosHtml(this.videosPopular);
  }



  onLessDate() {
    if(this.minDate <= 0) {
      return
    }
    this.minDate = this.minDate - 3;
    this.maxDate = this.maxDate - 3;
    this.updateDateVideosHtml(this.videosDate);
  }

  onMoreDate() {
    if(this.maxDate > this.videosDate.length) {
      return;
    }
    this.minDate = this.minDate + 3;
    this.maxDate = this.maxDate + 3;
    this.updateDateVideosHtml(this.videosDate);
  }



  onLessPrivate() {
    if(this.minPrivate <= 0) {
      return
    }
    this.minPrivate = this.minPrivate - 3;
    this.maxPrivate = this.maxPrivate - 3;
    this.updatePrivateVideosHtml(this.videosPrivate);
  }

  onMorePrivate() {
    if(this.maxPrivate > this.videosPrivate.length) {
      return;
    }
    this.minPrivate = this.minPrivate + 3;
    this.maxPrivate = this.maxPrivate + 3;
    this.updatePrivateVideosHtml(this.videosPrivate);
  }



  onLessBlocked() {
    if(this.minBlocked <= 0) {
      return
    }
    this.minBlocked = this.minBlocked - 3;
    this.maxBlocked = this.maxBlocked - 3;
    this.updateBlockedVideosHtml(this.videosBlocked);
  }

  onMoreBlocked() {
    if(this.maxPrivate > this.videosBlocked.length) {
      return;
    }
    this.minBlocked = this.minBlocked + 3;
    this.maxBlocked = this.maxBlocked + 3;
    this.updateBlockedVideosHtml(this.videosBlocked);
  }



}
