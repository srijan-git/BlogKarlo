import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogContent } from '../Class/blog-content';
import { Comments } from '../Class/comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  AddingComments = "http://localhost:3500/commentCreation";
  CommentDetails = "http://localhost:3500/CommentDetails"
  // GetCommentsByPostID="http://localhost:3500/commentGet"
  constructor(private http: HttpClient) { }

  CommentCreation(formData, postID: string, userID: string): Observable<Comments[]> {
    return this.http.post<Comments[]>(`${this.AddingComments}/${postID}/${userID}`, formData)
  }
  GetAllComments(): Observable<any> {
    return this.http.get<any>(this.CommentDetails)
  }

  // getCommentsByPostID(id):Observable<any>{
  //   return this.http.get<any>(`${this.GetCommentsByPostID}/${id}`)

  // }
}
