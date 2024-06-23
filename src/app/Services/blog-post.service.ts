import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogContent } from '../Class/blog-content';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  constructor(private http: HttpClient) {}

  BlogPostAdd = 'https://blogkarlo-api.onrender.com/ProductCreation';
  BlogPostDetails = 'https://blogkarlo-api.onrender.com/PostDetails';
  DeleteContent = 'https://blogkarlo-api.onrender.com/ContentDelete';
  GetPostContent = 'https://blogkarlo-api.onrender.com/getPostContent';
  EditPostContent = 'https://blogkarlo-api.onrender.com/ContentEdit';

  // BlogPostAdd = "https://bog-karlo.herokuapp.com/ProductCreation";
  // BlogPostDetails = "https://bog-karlo.herokuapp.com/PostDetails"
  // DeleteContent = "https://bog-karlo.herokuapp.com/ContentDelete"
  // GetPostContent = "https://bog-karlo.herokuapp.com/getPostContent"
  // EditPostContent = "https://bog-karlo.herokuapp.com/ContentEdit"

  ContentCreation(formData, id): Observable<BlogContent[]> {
    return this.http.post<BlogContent[]>(`${this.BlogPostAdd}/${id}`, formData);
  }
  GetAllPosts(): Observable<any> {
    return this.http.get<any>(this.BlogPostDetails);
  }

  DeletePost(id: any): Observable<any> {
    const url = `${this.DeleteContent}/${id}`;
    return this.http.get<any>(url);
  }

  GetSinglePost(id): Observable<any> {
    return this.http.get<any>(`${this.GetPostContent}/${id}`);
  }

  updatePost(data): Observable<BlogContent[]> {
    return this.http.post<BlogContent[]>(this.EditPostContent, data);
  }
}
