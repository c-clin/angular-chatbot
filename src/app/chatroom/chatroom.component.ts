import { ChatBotService } from './../chatbot.service';
import { Message } from './../message.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit, OnDestroy {
  messages: Message[];
  private subscription: Subscription;

  constructor(private chatBotService: ChatBotService) { }

  ngOnInit() {
    this.messages = this.chatBotService.getMessages();
    this.subscription = this.chatBotService.messagesChanged
      .subscribe(
        (messages: Message[]) => this.messages = messages);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
