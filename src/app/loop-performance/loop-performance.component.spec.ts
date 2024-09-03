import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoopPerformanceComponent } from './loop-performance.component';

describe('LoopPerformanceComponent', () => {
  let component: LoopPerformanceComponent;
  let fixture: ComponentFixture<LoopPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoopPerformanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoopPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
