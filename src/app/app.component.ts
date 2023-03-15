import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CropperOneComponent } from './cropper-one/cropper-one.component';
import { CropperTwoComponent } from './cropper-two/cropper-two.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(private ngbModal: NgbModal) { }

  option1(){
    this.ngbModal.open(CropperOneComponent);
  }

  option2(){
    this.ngbModal.open(CropperTwoComponent);
  }
}
