import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PendingVerification {
  private STORAGE_FLAG = "pending_verification";
  setPendingVerification(value: boolean): void {
    localStorage.setItem(this.STORAGE_FLAG, (value) ? "true" : "false");

  }

  isPendingVerification(): boolean {
    return localStorage.getItem(this.STORAGE_FLAG) === "true";

  }

  clear(): void {
    localStorage.removeItem(this.STORAGE_FLAG);

  }

}
