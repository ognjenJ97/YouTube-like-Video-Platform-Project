import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoDto } from '../../video.model';
import { VideosService } from '../../video.service/video.service';
import { VideosHttpService } from '../../video.service/video-http.service';

@Component({
  selector: 'app-video-one-videos-list',
  templateUrl: './video-one-videos-list.component.html',
  styleUrls: ['./video-one-videos-list.component.css']
})
export class VideoOneVideosListComponent {
  videos: VideoDto[];
  subscription: Subscription;
  loadMoreButton: boolean;

  
  constructor(private videosService: VideosService, private videosHttpServce: VideosHttpService) {}

  ngOnInit() {
    this.subscription = this.videosService.videosChanged.subscribe(
      (updateVideos: VideoDto[]) => {
        this.videos = updateVideos;
        this.loadMoreButton = this.videosService.getLoadMoreButton();
      }
    )
  }

  onLoadMore() {
    const pageNo = this.videosService.getPageNo();
    this.videosService.setPageNo(pageNo + 1);
    this.videosHttpServce.fetchVideos();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
