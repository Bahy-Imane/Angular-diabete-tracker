import {Component, OnInit} from '@angular/core';
import {GlucoseEditComponent} from "../glucose-edit/glucose-edit.component";
import {GlucoseReading} from "../model/glucose-reading";
import {GlucoseReadingService} from "../service/glucose-service.service";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-glucose-list',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './glucose-list.component.html',
  styleUrl: './glucose-list.component.css'
})
export class GlucoseListComponent implements OnInit{

  glucoseReadings: GlucoseReading[] = [];

  constructor(private glucoseReadingService: GlucoseReadingService) { }

  ngOnInit(): void {
    this.glucoseReadingService.findAll().subscribe(data => {
      this.glucoseReadings = data;
    });
  }

  deleteGlucose(id: number): void {
    this.glucoseReadingService.deleteGlucoseReading(id).subscribe(() => {
      this.glucoseReadings = this.glucoseReadings.filter(glucose => glucose.gId !== id);
    });
  }
}
