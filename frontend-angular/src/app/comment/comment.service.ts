import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { VideosHttpService } from "../videos/video.service/video-http.service";


@Injectable({
    providedIn:'root' 
})
export class CommentService {

    loading: boolean = false;
    error: boolean = null;

    constructor(private http: HttpClient, private router: Router, private videoHttpService: VideosHttpService) {}

    deleteComment(commentId: number) {

        this.http.delete(`http://localhost:8080/api/comments/${commentId}`)
        .subscribe(
            (response) => {
                console.log('Obrisan je komentar');
                this.videoHttpService.fetchSingleVideo();
            }, (error) => {
                alert('Neuspešna brisanje komentara.');
                console.error(error);
            }
        )
    }

    addComment(content: string, ownerId: number, videoId: number) {
        const params = {
            content: content,
            ownerId: ownerId,
            videoId: videoId
        }
        console.log("params " + params)

        this.loading = true;
        this.error = null;

        this.http.post('http://localhost:8080/api/comments', params)
        .subscribe(
            (response) => {
                this.loading = false;
                this.error = null;
                console.log('New comment: ' + response);
                this.videoHttpService.fetchSingleVideo();
            },
            (error) => {
                this.loading = false;
                this.error = error;
                alert('Neuspešna dodavanje komentara.');
                console.error(error);
            }
        )
    }



    
}