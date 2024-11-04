import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weekly-goals-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weekly-goals-modal.component.html',
  styleUrls: ['./weekly-goals-modal.component.scss'],
})
export class WeeklyGoalsModalComponent {
  @Input() goals = [
    { name: 'Finish Google cover letter', tag: '#apply-internships' },
    { name: 'Apply to Microsoft', tag: '#apply-internships' },
    { name: 'Practice implementing data structures', tag: '#class-algorithms' },
  ];

  tags = ['#apply-internships', '#interview-technical', '#class-algorithms'];
  newGoalName = '';
  newGoalTag = this.tags[0];

  saveGoals() {
    if (this.newGoalName) {
      this.goals.push({ name: this.newGoalName, tag: this.newGoalTag });
      this.newGoalName = '';
    }
    // Logic to close the modal or further process goals
  }
}
