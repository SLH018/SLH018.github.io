import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  getItem(key: string): string | undefined {
    const data: string | null = localStorage.getItem(key);
    if(data !== null) {
      return data;
    } 
    return undefined;
  }
}
