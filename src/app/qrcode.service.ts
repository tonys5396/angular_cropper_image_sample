import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as QRCode from 'qrcode';


@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor() { }

  public getQrcodeImgUrl(url: string){
    return new Observable<string>( observe => {
      QRCode.toDataURL(url,{errorCorrectionLevel: 'Q'}, (error, url) => {
        observe.next(url);
        observe.complete();
      });
    });
  }
}
