import { AppRoutingModule } from './app-routing.module';
import { RepeatBotService } from './repeat-bot/repeat-bot.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RepeatChatComponent } from './repeat-bot/repeat-chat/repeat-chat.component';
import { RepeatBotComponent } from './repeat-bot/repeat-bot.component';
import { ReverseBotComponent } from './reverse-bot/reverse-bot.component';
import { ReverseChatComponent } from './reverse-bot/reverse-chat/reverse-chat.component';
import { ReverseBotService } from './reverse-bot/reverse-bot.service';
import { WaitingBotComponent } from './waiting-bot/waiting-bot.component';
import { WaitingBotService } from './waiting-bot/waiting-bot.service';
import { WaitingChatComponent } from './waiting-bot/waiting-chat/waiting-chat.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatBotComponent,
    RepeatChatComponent,
    HeaderComponent,
    NavigationComponent,
    ReverseBotComponent,
    ReverseChatComponent,
    WaitingBotComponent,
    WaitingChatComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [RepeatBotService, ReverseBotService, WaitingBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
