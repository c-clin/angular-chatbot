import { NgModule } from '@angular/core';
import { RepeatBotComponent } from './repeat-bot/repeat-bot.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    { path: 'repeat-bot', component: RepeatBotComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
