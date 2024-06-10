import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesPageComponent } from './archives-page.component';

describe('ArchivesPageComponent', () => {
  let component: ArchivesPageComponent;
  let fixture: ComponentFixture<ArchivesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchivesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
