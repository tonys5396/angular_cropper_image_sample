import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperOneComponent } from './cropper-one.component';

describe('CropperOneComponent', () => {
  let component: CropperOneComponent;
  let fixture: ComponentFixture<CropperOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
