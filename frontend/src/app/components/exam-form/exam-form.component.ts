import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Angular Material modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ExamService } from '../../services/exam.service';

@Component({
  selector: 'app-exam-form',
  standalone: true,
  templateUrl: './exam-form.component.html',
  styleUrls: ['./exam-form.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class ExamFormComponent {
  examForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
    private router: Router
  ) {
    this.examForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      meeting_point: [''],
      date: ['', Validators.required],
      time: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.examForm.valid) {
      const formValue = this.examForm.value;
      const newExam = {
        student: {
          first_name: formValue.first_name,
          last_name: formValue.last_name
        },
        meeting_point: formValue.meeting_point,
        date: formValue.date,
        time: formValue.time,
        status: formValue.status
      };

      this.examService.addExam(newExam).subscribe({
        next: () => this.router.navigate(['/']),
        error: (err) => console.error('Erreur lors de l\'ajout de l\'examen', err)
      });
    }
  }
}
