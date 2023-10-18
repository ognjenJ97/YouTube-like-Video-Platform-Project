import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { VideosService } from "./video.service";
import { catchError, map, throwError } from "rxjs";
import { Router } from "@angular/router";
import { VideoDto } from "../video.model";

@Injectable({ providedIn: 'root' })
export class VideosHttpService {
  constructor(
    private http: HttpClient,
    private videosService: VideosService,
    private router: Router
  ) {}

  fetchVideos() {
    const pageNo = this.videosService.getPageNo().toString();
    const title = this.videosService.getTitle();
    const sort = this.videosService.getSort();

    const params = new HttpParams()
      .set('pageNo', pageNo)
      .set('title', title)
      .set('sortOrder', sort);

    console.log('params iz http servisa : ' + params);
    this.videosService.setLoading(true);
    this.videosService.setError(false);

    return this.http
      .get<any>('http://localhost:8080/api/videos', {
        params,
        observe: 'response',
      })
      .pipe(
        map((response) => {
          this.videosService.setLoading(false);
          this.videosService.setError(false);
          console.log('odgovor iz http', response);

          const totalPages = +response.headers.get('total-pages');
          this.videosService.setTotalPage(totalPages);

          const oldList = this.videosService.getVideos();
          const updateList = [...oldList, ...response.body];
          this.videosService.setVideos(updateList);
          return response;
        }),
        catchError((error) => {
          this.videosService.setLoading(false);
          this.videosService.setError(true);
          console.log('odgovor los iz http', error);
          return throwError('Error occurred. Please try again');
        })
      )
      .subscribe();
  }

  fetchSingleVideo() {
    this.videosService.setLoadingSingle(true);
    this.videosService.setError(false);
    const id = this.videosService.getId();

    return this.http
      .get<any>(`http://localhost:8080/api/videos/${id}`)
      .pipe(
        map((response) => {
          this.videosService.setLoadingSingle(false);
          this.videosService.setError(false);
          console.log('odgovor iz http-a video single', response);

          this.videosService.setVideo(response);
          return response;
        }),
        catchError((error) => {
          this.videosService.setLoadingSingle(false);
          this.videosService.setError(true);
          console.log('odgovor los iz http-a Video single', error);
          return throwError('Error occurred. Please try again');
        })
      )
      .subscribe();
  }

  deleteVideo(id: number) {
    this.http.delete(`http://localhost:8080/api/videos/${id}`).subscribe(
      (response) => {
        console.log('Obrisan je video');
        this.router.navigate(['/videos']);
      },
      (error) => {
        alert('Neuspešna brisanje videa.');
        console.error(error);
      }
    );
  }

  newView(id: number) {
    this.http.get(`http://localhost:8080/api/videos/${id}/view`).subscribe(
      (response) => {
        console.log('Dodat je pregled');
      },
      (error) => {
        alert('Neuspešna dodavanje pregleda');
        console.error(error);
      }
    );
  }

  addVideo(
    ownerId: number,
    title: string,
    videoUrl: string,
    thumbnailUrl: string,
    description: string
  ) {

    const params = {
        ownerId: ownerId,
        title: title,
        videoUrl: videoUrl,
        thumbnailUrl: thumbnailUrl,
        description: description
    }

    this.http.post('http://localhost:8080/api/videos', params)
    .subscribe(
        (response) => {
            console.log('New video: ' + response);
            alert('You added video successfuly')
            this.router.navigate(['/profile/' + ownerId]);
        },
        (error) => {
            alert('Neuspešna dodavanje videa.');
            console.error(error);
        }
    )
  }


  editVideo(updateVideo: VideoDto) {

    var params = {
        id: updateVideo.id,
        title: updateVideo.title,
        videoUrl: updateVideo.videoUrl,
        thumbnailUrl: updateVideo.thumbnailUrl,
        description: updateVideo.description,
        visibility: updateVideo.visibility,
        allowComments: updateVideo.allowComments,
        showRatings: updateVideo.showRatings,
        blocked: updateVideo.blocked,
        views: updateVideo.views,
        creationDate: updateVideo.creationDate,
        ownerId: updateVideo.ownerId,
        ownerUsername: updateVideo.ownerUsername,
        comments: updateVideo.comments,
        likedDislikedVideos: updateVideo.likedDislikedVideos,
    };

    this.http.put(`http://localhost:8080/api/videos/${updateVideo.id}`, params)
    .subscribe(
        (response) => {
            console.log(response);
            alert('Edit was successfule')
            this.router.navigate(['/videos/' + updateVideo.id]);
        },
        (error) => {
            alert('Neuspešna editovanje videa.');
            console.error(error);
        }
    )



  }



}