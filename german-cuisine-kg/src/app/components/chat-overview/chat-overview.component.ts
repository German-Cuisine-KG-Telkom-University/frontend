import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Message } from '../../models/message';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { ReponseLoaderComponent } from '../reponse-loader/reponse-loader.component';
@Component({
  selector: 'app-chat-overview',
  templateUrl: './chat-overview.component.html',
  styleUrls: ['./chat-overview.component.css'],
  imports: [CommonModule, FormsModule, ReponseLoaderComponent]
})
export class ChatOverviewComponent {
  showTable: boolean = false;

  exampleQueries: string[] = [
    '1. What german dessert that have a type of any fruit as one of ingredient?',
    '2. Find all beverages that are non alcoholic, carbonated, and is not a juice or coffee',
    '3. Find all vegetarian main courses from Bavaria that do not contain spinach',
    '4. I want to eat chicken or beef for breakfast, where can i get them',
    '5. What are sweet dishes i can eat for dinner',
  ];


 


  @Input() messages: Message[] = [];
  currentInput: string = '';
  loading: boolean = false;
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  constructor(private chatService: ChatService) {}

   ngAfterViewInit() {
    this.scrollToBottom();
  }

   private scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTo({
          top: this.myScrollContainer.nativeElement.scrollHeight,
          behavior: 'smooth'
        });
      } catch(err) {
        console.warn('Scroll failed:', err);
      }
    }, 50);
  }

   toggleTable() {
    this.showTable = !this.showTable;
  }

sendMessage() {
  if (!this.currentInput.trim()) return;
  this.scrollToBottom()

  
  this.messages.push({
    sender: 'left',
    answer: this.currentInput
  });

  const input = this.currentInput;
  this.currentInput = '';
  this.loading = true;

this.chatService.sendMessage(input).subscribe({
      next: (replyMessage: Message) => {
        console.log('In component, received reply:', replyMessage);
        this.messages.push({
          sender: 'right',
          answer: replyMessage.answer
        });
        this.loading = false;
        this.scrollToBottom();   
      },
      error: () => {
        this.loading = false;   
      }
    });
  }
}