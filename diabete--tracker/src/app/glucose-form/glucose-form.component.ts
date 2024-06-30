import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterOutlet} from '@angular/router';
import { GlucoseReadingService } from '../service/glucose-service.service';


@Component({
  selector: 'app-glucose-form',
  templateUrl: './glucose-form.component.html',
  styleUrls: ['./glucose-form.component.css'],
  standalone: true,
  imports: [FormsModule, RouterOutlet, ReactiveFormsModule]
})

export class GlucoseFormComponent  implements OnInit {
  glucoseReadingForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private glucoseReadingService: GlucoseReadingService
  ) {
    this.glucoseReadingForm = this.fb.group({
      dateAndTime: ['', Validators.required],
      level: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.glucoseReadingForm.valid) {
      this.glucoseReadingService.save(this.glucoseReadingForm.value).subscribe(() => {
        this.router.navigate(['/glucose']);
      });
    }
  }
}

