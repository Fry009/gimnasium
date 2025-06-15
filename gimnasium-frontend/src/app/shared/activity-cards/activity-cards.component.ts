import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-activity-cards',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './activity-cards.component.html',
  styleUrls: ['./activity-cards.component.scss']
})
export class ActivityCardsComponent {
  searchTerm: string = '';

  activities = [
    { name: 'Yoga', description: 'Clases suaves para estiramiento y relajación.' },
    { name: 'Crossfit', description: 'Entrenamientos de alta intensidad.' },
    { name: 'Pilates', description: 'Fortalecimiento del core y elasticidad.' },
    { name: 'Zumba', description: 'Baile y ejercicio aeróbico.' },
    { name: 'Boxeo', description: 'Ejercicio completo y técnicas de defensa.' }
  ];

  get filteredActivities() {
    return this.activities.filter(activity =>
      activity.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
