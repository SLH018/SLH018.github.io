import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  setItem(key: string, value: string): void {
    sessionStorage.setItem(key, value)
  }

  getItem(key: string): string | undefined {
    const data: string | null = sessionStorage.getItem(key);
    if(data !== null) {
      return data;
    } 
    return undefined;
  }
}
