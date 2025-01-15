import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaeventsComponent } from './llistaevents.component';

describe('LlistaeventsComponent', () => {
  let component: LlistaeventsComponent;
  let fixture: ComponentFixture<LlistaeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LlistaeventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlistaeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
