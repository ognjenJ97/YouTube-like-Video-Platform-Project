import { Component } from '@angular/core';
import { VideosService } from '../video.service/video.service';
import { VideosHttpService } from '../video.service/video-http.service';

@Component({
  selector: 'app-videos-search',
  templateUrl: './videos-search.component.html',
  styleUrls: ['./videos-search.component.css']
})
export class VideosSearchComponent {
  title: string = '';
  selectedSort: number = 2;

  constructor(private videosHttpService: VideosHttpService, private videosService: VideosService) {}

  onSearch() {
    this.videosService.clearPageNo();
    this.videosService.clearVideos();
    this.videosService.setTitle(this.title);
    this.videosService.setSort(this.selectedSort);
    this.videosHttpService.fetchVideos();
  }
}
