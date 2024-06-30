import {Component, OnInit} from '@angular/core';
import {GlucoseEditComponent} from "../glucose-edit/glucose-edit.component";
import {GlucoseReading} from "../model/glucose-reading";
import {GlucoseReadingService} from "../service/glucose-service.service";
import {RouterLink, RouterOutlet} from "@angular/router";
import {CommonModule, NgForOf} from "@angular/common";
import {ChartComponent} from "../chart/chart.component";

@Component({
  selector: 'app-glucose-list',
  standalone: true,
  imports: [
    CommonModule, RouterOutlet, RouterLink, ChartComponent

  ],
  templateUrl: './glucose-list.component.html',
  styleUrl: './glucose-list.component.css'
})
export class GlucoseListComponent implements OnInit{

  glucoseReadings: GlucoseReading[] = [];

  constructor(private glucoseReadingService: GlucoseReadingService) { }

  ngOnInit(): void {
    this.glucoseReadingService.findAll().subscribe(data => {
      console.log('Data received from API:', data);
      this.glucoseReadings = data;
    });
  }

  deleteGlucose(id: number): void {
    if (id === undefined || id === null) {
      console.error('Error: ID is undefined or null');
      return;
    }

    console.log(`Attempting to delete glucose reading with ID: ${id}`);

    this.glucoseReadingService.deleteGlucoseReading(id).subscribe({
      next: () => {
        console.log(`Successfully deleted glucose reading with ID: ${id}`);
        // Filter out the deleted item from the local array
        this.glucoseReadings = this.glucoseReadings.filter(glucose => glucose.id !== id);
      },
      error: error => {
        console.error(`Error deleting glucose reading with ID: ${id}`, error);
      }
    });
  }



  }

