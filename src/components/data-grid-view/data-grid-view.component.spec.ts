import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridViewComponent } from './data-grid-view.component';

describe('DataGridViewComponent', () => {
  let component: DataGridViewComponent;
  let fixture: ComponentFixture<DataGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataGridViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
