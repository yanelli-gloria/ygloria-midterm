import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weekly-goals',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weekly-goals.component.html',
  styleUrls: ['./weekly-goals.component.scss'],
})
export class WeeklyGoalsComponent {
  goals = [
    {
      name: 'Finish Google cover letter',
      tag: '#apply-internships',
      completed: false,
    },
    { name: 'Apply to Microsoft', tag: '#apply-internships', completed: false },
    {
      name: 'Practice implementing data structures',
      tag: '#interview-technical',
      completed: true,
    },
  ];

  addGoal() {
    console.log('Add a new weekly goal');
  }
}
