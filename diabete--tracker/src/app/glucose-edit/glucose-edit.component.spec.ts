import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseEditComponent } from './glucose-edit.component';

describe('GlucoseEditComponent', () => {
  let component: GlucoseEditComponent;
  let fixture: ComponentFixture<GlucoseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlucoseEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlucoseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
