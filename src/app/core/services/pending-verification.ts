import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingVerification {
  private STORAGE_FLAG = "pending_verification";
  private EMAIL_FLAG = "email";

  setPendingVerification(value: boolean): void {
    localStorage.setItem(this.STORAGE_FLAG, (value) ? "true" : "false");

  }

  setEmail(email: string): void {
    localStorage.setItem(this.EMAIL_FLAG, email);

  }

  getEmail(): string {
    return localStorage.getItem(this.EMAIL_FLAG) as string;

  }

  isPendingVerification(): boolean {
    return localStorage.getItem(this.STORAGE_FLAG) === "true";

  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_FLAG);
    localStorage.removeItem(this.EMAIL_FLAG);

  }

}
