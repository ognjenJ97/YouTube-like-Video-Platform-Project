import { Component, Input } from '@angular/core';
import { VideoDto } from '../video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos-single',
  templateUrl: './videos-single.component.html',
  styleUrls: ['./videos-single.component.css']
})
export class VideosSingleComponent {

  @Input() video: VideoDto;

  constructor(private router: Router) {}

  onSingleVideo() {
    this.router.navigate(['/videos', this.video.id]);
  }
}
