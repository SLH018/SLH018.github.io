import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  public getItem(key: string): string | undefined {
    const data: string | null = localStorage.getItem(key);
    if(data !== null) {
      return data;
    } 

    return undefined;
  }

}
