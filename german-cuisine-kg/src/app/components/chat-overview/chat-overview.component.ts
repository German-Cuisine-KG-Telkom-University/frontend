import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-overview',
  templateUrl: './chat-overview.component.html',
  styleUrls: ['./chat-overview.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChatOverviewComponent {
  @Input() messages: Message[] = [];
  currentInput: string = '';

  constructor(private chatService: ChatService) {}

  sendMessage() {

    this.chatService.sendMessage(this.currentInput);

    /*
    if (!this.currentInput.trim()) return;

    // Push user message
    this.messages.push({
      sender: 'left',
      text: this.currentInput
    });

    this.currentInput = '';

    // Optionally: simulate AI reply
    setTimeout(() => {
      this.messages.push({
        sender: 'right',
        text: 'Thanks for your question! 🍽️'
      });
    }, 800);
  }
    */
}
}