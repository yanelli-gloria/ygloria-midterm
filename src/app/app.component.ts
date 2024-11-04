import { Component } from '@angular/core';
import { WeeklyGoalsComponent } from './weekly-goals/weekly-goals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeeklyGoalsComponent],
  template: `<app-weekly-goals></app-weekly-goals>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
