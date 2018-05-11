import { Message } from './../../message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reverse-chat',
  templateUrl: './reverse-chat.component.html',
  styleUrls: ['./reverse-chat.component.css']
})
export class ReverseChatComponent implements OnInit {
  @Input() chat: Message;
  constructor() { }

  ngOnInit() {
  }

}
