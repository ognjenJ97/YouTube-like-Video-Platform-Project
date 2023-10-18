import { Injectable } from '@angular/core';
import { UserDto } from './channels.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ChannelService {

    private channels: UserDto[] = [];
    channelsChanged = new Subject<UserDto[]>();
    private pageNo: number = 0;
    private loading: boolean = false;
    private error: boolean = true;
    private totalPage: number = null;
    private loadMoreButton: boolean = true;
    private singleUser: UserDto;
    singleUserChange = new Subject<UserDto>();
    private singleUserLogIn: UserDto;
    singleUserChangeLogIn = new Subject<UserDto>();

    constructor() {}

    getSingleUser () {
        return this.singleUser;
    }

    setSingleUser(user: UserDto) {
        console.log(user);
        this.singleUser = user;
        this.singleUserChange.next(this.singleUser)
    }

    clearSingleuser () {
        return this.singleUser = null;
    }

    getSingleUserChange() {
        return this.singleUserChange.asObservable();
    }

    getSingleUserLogIn () {
        return this.singleUserLogIn;
    }

    setSingleUserLogIn(user: UserDto) {
        console.log(user);
        this.singleUserLogIn = user;
        this.singleUserChangeLogIn.next(this.singleUserLogIn);
    }

    clearSingleUserLogIn() {
        return this.singleUserLogIn = null;
    }

    
    getSingleUserLogInChange() {
        return this.singleUserChangeLogIn.asObservable();
    }

    getLoadMoreButton() {
        return this.loadMoreButton;
    }

    setLoadMoreButton(loadMoreButton: boolean) {
        return this.loadMoreButton = loadMoreButton;
    }

    setChannels(channels: UserDto[]) {
        this.channels = channels;


        if(this.pageNo == this.totalPage - 1) {
            this.loadMoreButton = false;
        }

        this.channelsChanged.next(this.channels.slice());
    }

    getChannels() {
        return this.channels.slice();
    }

    setTotalPage(totalPage: number) {
        return this.totalPage = totalPage;
    }

    clearChannels() {
        return this.setChannels([])
    }

    clearPageNo() {
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

    getError() {
        return this.error;
    }

    setError(error: boolean) {
        return this.error = error
    }


}