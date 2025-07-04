
import { Routes } from '@angular/router';
import { ExamListComponent } from './components/exam-list/exam-list.component';
import { ExamFormComponent } from './components/exam-form/exam-form.component';

export const routes: Routes = [
  { path: '', component: ExamListComponent },
  { path: 'add-exam', component: ExamFormComponent }
];
