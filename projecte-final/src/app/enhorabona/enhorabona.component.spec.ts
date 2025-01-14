import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhorabonaComponent } from './enhorabona.component';

describe('EnhorabonaComponent', () => {
  let component: EnhorabonaComponent;
  let fixture: ComponentFixture<EnhorabonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhorabonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhorabonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
