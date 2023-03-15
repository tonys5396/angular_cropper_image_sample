import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropperTwoComponent } from './cropper-two.component';

describe('CropperTwoComponent', () => {
  let component: CropperTwoComponent;
  let fixture: ComponentFixture<CropperTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CropperTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropperTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
