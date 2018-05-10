import { Message } from './../../message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repeat-chat',
  templateUrl: './repeat-chat.component.html',
  styleUrls: ['./repeat-chat.component.css']
})
export class RepeatChatComponent implements OnInit {
  @Input() chat: Message;
  constructor() { }

  ngOnInit() {
  }

}
