import { Injectable } from "@angular/core";
import { VideosHttpService } from "../videos/video.service/video-http.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class LikeDislikeService {

    loading: boolean = false;
    error: boolean = null;


    constructor(private http: HttpClient, private router: Router, private videoHttpService: VideosHttpService) {}


    addLike(userId: number, videoId: number, commentId: number, like: boolean) {
        const params = {
            userId: userId,
            videoId: videoId,
            commentId: commentId,
            like: like
        }

        this.loading = true;
        this.error = null;

        this.http.post('http://localhost:8080/api/likesdislikes', params)
        .subscribe(
            (response) => {
                this.loading = false;
                this.error = null;
                console.log('New like: ' + response);
                this.videoHttpService.fetchSingleVideo();
            }, (error) => {
                this.loading = false;
                this.error = error;
                alert('Neuspešna dodavanje lajka.');
                console.error(error);
            }
        )
    }


    deleteLike(id: number) {
        this.loading = true;
        this.error = null;

        this.http.delete(`http://localhost:8080/api/likesdislikes/${id}`)
        .subscribe(
            (response) => {
                this.loading = false;
                this.error = null;
                console.log('Obrisan je lajk');
                this.videoHttpService.fetchSingleVideo();
            }, (error) => {
                this.loading = false;
                this.error = error;
                alert('Neuspešna brisanje lajka.');
                console.error(error);
            }
        )
    }




}