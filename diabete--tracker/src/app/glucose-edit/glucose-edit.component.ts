import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {GlucoseReadingService} from "../service/glucose-service.service";

@Component({
  selector: 'app-glucose-edit',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterOutlet
    ],
  templateUrl: './glucose-edit.component.html',
  styleUrl: './glucose-edit.component.css'
})
export class GlucoseEditComponent implements OnInit {
  glucoseReadingForm: FormGroup;
  id !:number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private glucoseReadingService: GlucoseReadingService
  ) {
    this.glucoseReadingForm = this.fb.group({
      dateAndTime: ['', Validators.required],
      level: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      this.id = idParam !== null ? +idParam : 0;
      this.loadRegisterGlucoseDetails(this.id);
    });
  }

  loadRegisterGlucoseDetails(id: number): void {
    this.glucoseReadingService.getGlucoseReadingById(id).subscribe((data) => {
      this.glucoseReadingForm.patchValue(data);
    });
  }

  onSubmit(): void {
    if (this.glucoseReadingForm.valid) {
      this.glucoseReadingService.updateGlucoseReading(this.id,this.glucoseReadingForm.value).subscribe(() => {
        this.router.navigate(['/glucose']);
      });
    }
  }
}
