import { Component, Input } from '@angular/core';
import { Message } from '../../models/message';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat-overview',
  templateUrl: './chat-overview.component.html',
  styleUrls: ['./chat-overview.component.css'],
  imports: [CommonModule]
})
export class ChatOverviewComponent {
  @Input() messages: Message[] = [];
}
