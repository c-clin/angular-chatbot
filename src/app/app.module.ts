import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatComponent } from './chatroom/chat/chat.component';
import { ChatBotService } from './chatbot.service';
import { ResponseFormComponent } from './response-form/response-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    ChatComponent,
    ResponseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ChatBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
