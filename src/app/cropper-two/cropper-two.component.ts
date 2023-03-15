import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-cropper-two',
  templateUrl: './cropper-two.component.html',
  styleUrls: ['./cropper-two.component.css']
})
export class CropperTwoComponent implements OnInit {

  constructor(public ngbActiveModal: NgbActiveModal) { }
  cropper: Cropper;
  croppedImage2: any = '';

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
    const image = document.getElementById('image') as HTMLImageElement;
    image.src = URL.createObjectURL(event.target.files[0]);

    this.cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      center: true,
      zoomable: false,
      movable: false,
      viewMode: 0,
			autoCropArea: 1,
      dragMode: 'none'
    });
  }

  onImage2Cropped(){
    let croppedCanvasObj = {
      minWidth: 256,
      minHeight: 256,
      maxWidth: 1024,
      maxHeight: 1024,
      fillColor: '#fff',
      imageSmoothingEnabled: true
    };
    this.croppedImage2 = this.cropper.getCroppedCanvas(croppedCanvasObj).toDataURL("image/png", 1);
  }

}
