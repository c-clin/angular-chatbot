import { Subscription } from 'rxjs';
import { Message } from './../message.model';
import { ReverseBotService } from './reverse-bot.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-reverse-bot',
  templateUrl: './reverse-bot.component.html',
  styles: ['./reverse-bot.component.css']
})
export class ReverseBotComponent implements OnInit, OnDestroy {
  inputResponse: string;
  messages: Message[];
  subscription: Subscription;
  constructor(private reverseBotService: ReverseBotService) { }

  ngOnInit() {
    this.messages = this.reverseBotService.getMessages();
    this.subscription = this.reverseBotService.messagesChanged
      .subscribe( (messages: Message[]) => this.messages = messages );
  }

  onSend() {
    console.log(this.inputResponse);
    this.reverseBotService.sendResponse(this.inputResponse);
    this.inputResponse = '';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
