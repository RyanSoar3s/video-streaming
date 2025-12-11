import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingVerification {
  private STORAGE_FLAG = "pending_verification";
  private EMAIL_FLAG = "email";
  private EXPIRES_AT = "expires_at";

  setPendingVerification(value: boolean): void {
    localStorage.setItem(this.STORAGE_FLAG, (value) ? "true" : "false");

  }

  setEmail(email: string): void {
    localStorage.setItem(this.EMAIL_FLAG, email);

  }

  setExpiresAt(expiresAt: string): void {
    localStorage.setItem(this.EXPIRES_AT, expiresAt);

  }

  getEmail(): string {
    return localStorage.getItem(this.EMAIL_FLAG) as string;

  }

  getExpiresAt(): number | null {
    return Number(localStorage.getItem(this.EXPIRES_AT)) || null;

  }

  isPendingVerification(): boolean {
    return localStorage.getItem(this.STORAGE_FLAG) === "true";

  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_FLAG);
    localStorage.removeItem(this.EMAIL_FLAG);
    localStorage.removeItem(this.EXPIRES_AT);


  }

}
