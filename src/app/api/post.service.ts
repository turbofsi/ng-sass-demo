import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do'

import { Post } from './models/post';
@Injectable()
export class PostService {
    basepath: string = "https://jsonplaceholder.typicode.com/";
    constructor(private httpClient: HttpClient) { }

    public getPosts(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(`${this.basepath}posts`)
            .do(res => console.log(res));
    }
}
