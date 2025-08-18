import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { baseUrl } from './api.config';



@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}
  //header: string = 'application/json';

  sendMessage(content: string): Observable<Message> {
    console.log('Sending message:', content);
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": "germanfoodchatbot"
    });
    
    
    return this.http.post<Message>(
      baseUrl,
      { question: content },
      { headers }
    );
  }
  
}
