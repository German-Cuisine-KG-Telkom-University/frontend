import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './models/message';
import { ChatInputComponent } from "./components/chat-input/chat-input.component";
import { ChatOverviewComponent } from "./components/chat-overview/chat-overview.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatInputComponent, ChatOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'german-cuisine-kg';
  messages: Message[] = [];

  handleSendMessage(text: string) {
    this.messages.push({ sender: 'user', text });

    // Simulated AI response
    setTimeout(() => {
      this.messages.push({ sender: 'ai', text: 'This is a mock AI reply.' });
    }, 500);
  }
}
