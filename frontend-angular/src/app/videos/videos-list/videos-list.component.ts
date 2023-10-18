import { Component, OnDestroy, OnInit } from '@angular/core';
import { VideoDto } from '../video.model';
import { Subscription } from 'rxjs';
import { VideosHttpService } from '../video.service/video-http.service';
import { VideosService } from '../video.service/video.service';

@Component({
  selector: 'app-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.css']
})
export class VideosListComponent implements  OnInit, OnDestroy {

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
