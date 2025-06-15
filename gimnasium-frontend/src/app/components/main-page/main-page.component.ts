import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../shared/main-layout/main-layout.component';
import { ActivityCardsComponent } from '../../shared/activity-cards/activity-cards.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [
    NgIf,
    MatButtonModule,
    MatIconModule,
    MainLayoutComponent,
    ActivityCardsComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  showLayout = false;

  toggleLayout() {
    this.showLayout = !this.showLayout;
  }
}
