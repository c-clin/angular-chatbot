import { RepeatBotService } from './repeat-bot.service';
import { Message } from './../message.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repeat-bot',
  templateUrl: './repeat-bot.component.html',
  styleUrls: ['./repeat-bot.component.css']
})
export class RepeatBotComponent implements OnInit, OnDestroy {
  messages: Message[];
  inputResponse: string;

  private subscription: Subscription;

  constructor(private repeatBotService: RepeatBotService) {}

  ngOnInit() {
    this.messages = this.repeatBotService.getMessages();
    this.subscription = this.repeatBotService.messagesChanged.subscribe(
      (messages: Message[]) => (this.messages = messages)
    );
  }

  onSend() {
    console.log(this.inputResponse);
    this.repeatBotService.sendResponse(this.inputResponse);
    this.inputResponse = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
