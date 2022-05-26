import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGroupByYearComponent } from './data-group-by-year.component';

describe('DataGroupByYearComponent', () => {
  let component: DataGroupByYearComponent;
  let fixture: ComponentFixture<DataGroupByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGroupByYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGroupByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
