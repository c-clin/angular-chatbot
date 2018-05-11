import { WaitingBotComponent } from './waiting-bot/waiting-bot.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepeatBotComponent } from './repeat-bot/repeat-bot.component';
import { ReverseBotComponent } from './reverse-bot/reverse-bot.component';



const appRoutes: Routes = [
    { path: 'repeat-bot', component: RepeatBotComponent },
    { path: 'reverse-bot', component: ReverseBotComponent},
    { path: 'waiting-bot', component: WaitingBotComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
