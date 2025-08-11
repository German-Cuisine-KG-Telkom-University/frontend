import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ChatInputComponent {
  @Output() sendMessage = new EventEmitter<string>();
  userInput: string = '';

  send() {
    if (this.userInput.trim()) {
      this.sendMessage.emit(this.userInput);
      this.userInput = '';
    }
  }
}
