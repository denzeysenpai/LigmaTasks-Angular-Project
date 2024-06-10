import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTasksPageComponent } from './active-tasks-page.component';

describe('ActiveTasksPageComponent', () => {
  let component: ActiveTasksPageComponent;
  let fixture: ComponentFixture<ActiveTasksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveTasksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
