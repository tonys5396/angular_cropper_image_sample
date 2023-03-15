import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-cropper-one',
  templateUrl: './cropper-one.component.html',
  styleUrls: ['./cropper-one.component.css']
})
export class CropperOneComponent implements OnInit {

  constructor(public ngbActiveModal: NgbActiveModal) { }
  isHideResizeSquares = false;
  imageChangedEvent: any = null;
  imageFile: any = null;
  croppedImage: any = '';

  ngOnInit(): void {
    const ua = navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
      this.isHideResizeSquares = true;
    }
  }

  fileChangeEvent(event: any): void {
    if (event.target.files[0]){
      this.imageFile = event.target.files[0];
    }
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

}
