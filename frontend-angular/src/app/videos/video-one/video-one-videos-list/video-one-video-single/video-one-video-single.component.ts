import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { VideoDto } from 'src/app/videos/video.model';

@Component({
  selector: 'app-video-one-video-single',
  templateUrl: './video-one-video-single.component.html',
  styleUrls: ['./video-one-video-single.component.css']
})
export class VideoOneVideoSingleComponent {

  @Input() video: VideoDto;

  constructor(private router: Router) {}

  onSingleVideo() {
    this.router.navigate(['/videos', this.video.id]);
  }
}
