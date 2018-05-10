import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  angularBots = ['Repeat Bot', 'Reverse Bot'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onNavigate(bot: string) {
    if (this.angularBots.indexOf(bot) === 0) {
      this.router.navigate(['/repeat-bot']);
    }
    console.log(bot);
  }

}
