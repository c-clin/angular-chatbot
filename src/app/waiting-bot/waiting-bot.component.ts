import { Message } from './../message.model';
import { WaitingBotService } from './waiting-bot.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-waiting-bot',
  templateUrl: './waiting-bot.component.html',
  styleUrls: ['./waiting-bot.component.css']
})
export class WaitingBotComponent implements OnInit, OnDestroy {
  inputResponse: string;
  messages: Message[];
  subscription: Subscription;
  constructor(private waitingBotService: WaitingBotService) { }

  ngOnInit() {
    this.messages = this.waitingBotService.getMessages();
    this.subscription = this.waitingBotService.messagesChanged
      .subscribe((messages: Message[]) => this.messages = messages);
  }

  onSend() {
    this.waitingBotService.sendResponse(this.inputResponse);
    this.inputResponse = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
