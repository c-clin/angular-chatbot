import { Message } from './../../message.model';
import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-repeat-chat',
  templateUrl: './repeat-chat.component.html',
  styleUrls: ['./repeat-chat.component.css']
})
export class RepeatChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('autoscroll') scroll: ElementRef;
  @Input() chat: Message;
  constructor() { }

  ngOnInit() {
    console.log(this.scroll.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('view changed!');
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scroll.nativeElement.scrollTop = this.scroll.nativeElement.scrollHeight;
    } catch (err) { }
  }


}
