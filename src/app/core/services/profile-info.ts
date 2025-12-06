import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileInfo {
  private profileInfoSignal = signal({
    email: "",
    username: ""

  });

  public profileInfo = computed(() => this.profileInfoSignal());

  setValue(data: { email: string, username: string }): void {
    this.profileInfoSignal.set(data);

  }

}
