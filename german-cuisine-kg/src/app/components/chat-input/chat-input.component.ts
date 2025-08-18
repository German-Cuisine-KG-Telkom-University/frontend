import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';
import { Message } from '../../models/message';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChatInputComponent {
  constructor(private chatService: ChatService) {}

  
  
  @Output() sendMessage = new EventEmitter<string>();

  userInput: string = '';

  send() {
    console.log('Sending message:', this.userInput);
    const text = this.userInput.trim();
    if (!text) return;

    // Call API via service
    this.chatService.sendMessage(text).subscribe({
      next: (response) => {
        this.sendMessage.emit(response.answer); 
        console.log('Message sent successfully:', response);
        this.userInput = '';
      },
      
      error: (err) => {
        console.error('Error sending message:', err);
      }
    });
  }

}
