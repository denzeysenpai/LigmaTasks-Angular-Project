import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericPageContentFillerComponent } from './generic-page-content-filler.component';

describe('GenericPageContentFillerComponent', () => {
  let component: GenericPageContentFillerComponent;
  let fixture: ComponentFixture<GenericPageContentFillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericPageContentFillerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericPageContentFillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
