import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WeeklyGoalsComponent } from './weekly-goals/weekly-goals.component';
import { WeeklyGoalsModalComponent } from './weekly-goals-modal/weekly-goals-modal.component';

@NgModule({
  declarations: [AppComponent, WeeklyGoalsComponent, WeeklyGoalsModalComponent],
  imports: [
    BrowserModule,
    FormsModule, // Required if you're using ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
