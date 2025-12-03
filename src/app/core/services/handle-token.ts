import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HandleToken {
  private STORAGE_KEY = "access_token";

  getToken(): string | null {
    return localStorage.getItem(this.STORAGE_KEY);

  }

  setToken(token: string | null): void {
    if (token) {
      localStorage.setItem(this.STORAGE_KEY, token);

    } else {
      localStorage.removeItem(this.STORAGE_KEY);

    }

  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_KEY);
    
  }

}
