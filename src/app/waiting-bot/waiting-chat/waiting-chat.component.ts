import { Message } from './../../message.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-waiting-chat',
  templateUrl: './waiting-chat.component.html',
  styleUrls: ['./waiting-chat.component.css']
})
export class WaitingChatComponent implements OnInit {
  @Input() chat: Message;
  constructor() { }

  ngOnInit() {
  }

}
