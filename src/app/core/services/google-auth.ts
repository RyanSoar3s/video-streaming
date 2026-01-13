import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleAuth {
  private readonly document = inject(DOCUMENT);

  private googleScriptLoaded$ = new ReplaySubject<boolean>(1);

  constructor() {
    this.loadScript();
  }

  get isGoogleScriptLoaded$(): Observable<boolean> {
    return this.googleScriptLoaded$.asObservable();
  }

  private loadScript(): void {
    if (typeof window === "undefined") return;

    if (typeof google !== "undefined") {
      this.googleScriptLoaded$.next(true);
      return;

    }

    const script = this.document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => this.googleScriptLoaded$.next(true);
    script.onerror = () => this.googleScriptLoaded$.next(false);

    this.document.head.appendChild(script);

  }

}
