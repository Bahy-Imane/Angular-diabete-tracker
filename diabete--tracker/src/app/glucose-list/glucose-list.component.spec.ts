import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlucoseListComponent } from './glucose-list.component';

describe('GlucoseListComponent', () => {
  let component: GlucoseListComponent;
  let fixture: ComponentFixture<GlucoseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlucoseListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GlucoseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
