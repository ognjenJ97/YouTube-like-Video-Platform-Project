import { Component, Input, OnInit } from '@angular/core';
import { VideosHttpService } from '../video.service/video-http.service';

@Component({
  selector: 'app-video-add',
  templateUrl: './video-add.component.html',
  styleUrls: ['./video-add.component.css']
})
export class VideoAddComponent implements OnInit {

  title: string;
  videoUrl: string;
  thumbnailUrl: string;
  description: string;

  userId: number = null;
  isLoged: boolean = false;


  constructor(private videoHttpService: VideosHttpService) {}

  ngOnInit() {
      this.userId = +localStorage.getItem('userId');

      if(localStorage.getItem('jwt')) {
        return this.isLoged = true;
      }

  }

  onAddVideo() {

    if (
      this.title.trim() === '' ||
      this.videoUrl.trim() === '' ||
      this.thumbnailUrl.trim() === '' ||
      this.description.trim() === ''
    ) {
      alert('Please fill in all fields.');
      return;
    }

    this.videoHttpService.addVideo(this.userId, this.title, this.videoUrl, this.thumbnailUrl, this.description);
  }



}
