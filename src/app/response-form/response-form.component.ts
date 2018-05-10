import { ChatBotService } from './../chatbot.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-response-form',
  templateUrl: './response-form.component.html',
  styleUrls: ['./response-form.component.css']
})
export class ResponseFormComponent implements OnInit {
  inputResponse: string;
  constructor(private chatBotService: ChatBotService) { }

  ngOnInit() {
  }

  onSend() {
    console.log(this.inputResponse);
    this.chatBotService.sendResponse(this.inputResponse);
    this.inputResponse = '';
  }

}
