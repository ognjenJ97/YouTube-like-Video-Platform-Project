import { Injectable } from "@angular/core";
import { VideoDto } from "../video.model";
import { Subject } from "rxjs";
import { VideosHttpService } from "./video-http.service";

@Injectable({providedIn: 'root'})
export class VideosService {

    constructor() {}

    private videos: VideoDto[] = [];
    videosChanged = new Subject<VideoDto[]>();

    private video: VideoDto;
    videoChange = new Subject<VideoDto>();
    private id: number;

    private loading: boolean = false;
    private loadingSingle: boolean = false;
    private error: boolean = true;

    private totalPage: number = null;
    private pageNo: number = 0;
    private title: string = '';
    private sort: number = 2;

    private loadMoreButton: boolean = true;


    getId() {
        return this.id;
    }

    setId(id: number) {
        return this.id = id;
    }

    getVideo() {
        return this.video;
    }

    setVideo(video: VideoDto) {
        this.video = video;
        this.videoChange.next(this.video);
    }

    getVideoChange() {
        return this.videoChange.asObservable()
    }

    setVideos(videos: VideoDto[]) {
        this.videos = videos;

        if(this.pageNo == this.totalPage - 1) {
            this.loadMoreButton = false;
        }

        this.videosChanged.next(this.videos.slice());
    }


    getVideos() {
        return this.videos.slice();
    }

    clearVideos() {
        return this.videos = [];
    }

    getTitle() {
        return this.title;
    }

    setTitle(title: string) {
        return this.title = title;
    }

    cleartTitle() {
        return this.title = '';
    }

    getSort() {
        return this.sort;
    }

    setSort(sort: number) {
        return this.sort = sort;
    }

    clearSort() {
        return this.sort = 2;
    }

    getLoadMoreButton() {
        return this.loadMoreButton;
    }

    setLoadMoreButton(loadMoreButton: boolean) {
        return this.loadMoreButton = loadMoreButton;
    }
    
    setTotalPage(totalPage: number) {
        return this.totalPage = totalPage;
    }

    clearPageNo() {
        console.log('ovo se izvrsava')
        return this.setPageNo(0)
    }

    getTotalPage() {
        return this.totalPage;
    }

    getPageNo() {
        return this.pageNo;
    }

    setPageNo(pageNo: number) {
        return this.pageNo = pageNo;
    }

    getLoading() {
        return this.loading;
    }

    setLoading(loading: boolean) {
        return this.loading = loading
    }

    getLoadingSingle() {
        return this.loadingSingle;
    }

    setLoadingSingle(loading: boolean) {
        return this.loadingSingle = loading
    }

    getError() {
        return this.error;
    }

    setError(error: boolean) {
        return this.error = error
    }
}