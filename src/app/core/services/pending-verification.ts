import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingVerification {
  private STORAGE_FLAG = "pending_verification";
  private STORAGE_EMAIL = "pending_verification_email";

  setEmail(email: string): void {
    localStorage.setItem(this.STORAGE_EMAIL, email);
    
  }

  getEmail(): string {
    return localStorage.getItem(this.STORAGE_EMAIL) ?? "";

  }

  setPendingVerification(value: boolean): void {
    localStorage.setItem(this.STORAGE_FLAG, (value) ? "true" : "false");

  }

  isPendingVerification(): boolean {
    return localStorage.getItem(this.STORAGE_FLAG) === "true";

  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_FLAG);
    localStorage.removeItem(this.STORAGE_EMAIL);

  }

}
