import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
@Injectable()
export class GlobalMethods {
    host_url: string = "http://localhost:3399/";
    register_url: string = this.host_url + "users/register";
    login_url: string = this.host_url + "users/login";
    addsurvey_url: string = this.host_url + "survey/add";
    updatesurvey_url: string = this.host_url + "survey/update";
    getsurvey_url: string = this.host_url + "survey/";

   
    constructor(private http: HttpClient) {
        this.http = http;
    }


    createAuthorizationHeader(headers: HttpHeaders) {
        headers.append('Auth-Token', "ASXCV@#$%");
        headers.append('Content-Type', "application/json");
    }

    getpostdate(obj:any){
        return obj.created_date.split(" ")[0];
    }
    
    getTimeDifference(obj: any) {
        let date2: string = obj.created_date;
        let diffInMs: number = Date.now() - Date.parse(date2);
        let diffInMins: number = diffInMs / (1000 / 60);
        let diffInHours: number = diffInMs / 1000 / 60 / 60;
        if (diffInMins < 60) {
            return Math.ceil(diffInMins) + " mins ago";
        } else if (diffInMins >= 60 && diffInHours < 24) {
            return Math.ceil(diffInHours) + " hours ago";
        } else if (diffInHours > 24) {
            let days_count = Math.ceil(diffInHours / 24);
            if (days_count < 7) {
                return days_count + " days ago";
            } else {
                return obj.created_date.split(" ")[0];
            }
        }
    }


    checkWhichViewToLoad() {
        if (window.innerWidth > 767) {
            return true;
        } else
            return false;
    }

    //assignUserData(){
    //  this.user.user_id=12;
    //  return this.user;
    //}

    getDataapi(url: string) {
        return this.http.get(url);
    }

    getData(url: string) {
        let headers = new  HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, { headers });
    }

    PostData(url: string, post_data: any) {
        let headers = new HttpHeaders();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, post_data, { headers });
    }
}