import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Message } from './models/message';
import { ChatOverviewComponent } from "./components/chat-overview/chat-overview.component";
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChatOverviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'german-cuisine-kg';
  messages: Message[] = [];

  constructor(private chatService: ChatService) {}

  handleSendMessage(userText: string) {
    this.chatService.sendMessage(userText).subscribe((response: Message) => {
      this.messages.push(response);
    });
  }
}
