import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigMainCardComponent } from './big-main-card.component';

describe('BigMainCardComponent', () => {
  let component: BigMainCardComponent;
  let fixture: ComponentFixture<BigMainCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BigMainCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BigMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
