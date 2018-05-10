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

@NgModule({
  declarations: [
    AppComponent,
    RepeatBotComponent,
    RepeatChatComponent,
    HeaderComponent,
    NavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [RepeatBotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
