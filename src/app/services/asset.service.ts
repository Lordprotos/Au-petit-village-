import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private static readonly assetsPath = '/assets/';

  static getImageUrl(imageName: string): string {
    return `${AssetService.assetsPath}${imageName}`;
  }
}
