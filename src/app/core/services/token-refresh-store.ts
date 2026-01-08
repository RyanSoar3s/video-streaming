import { Injectable, signal, inject } from '@angular/core';
import { RequestApi } from '@core/services/request-api';
import { HandleToken } from '@core/services/handle-token';
import { Router } from '@angular/router';
import { PendingRequest } from '@models/pendingRequest.model';

@Injectable({
  providedIn: 'root'
})
export class TokenRefreshStore {
  private request = inject(RequestApi);
  private handleToken = inject(HandleToken);
  private router = inject(Router);

  private refreshing = signal(false);
  private queue = signal<Array<PendingRequest>>([]);

  enqueue(req: PendingRequest) {
    this.queue.update((q) => [ ...q, req ]);

  }

  refreshIfNeeded() {
    if (this.refreshing()) return;

    this.refreshing.set(true);

    this.request.refresh().subscribe({
      next: ({ token }) => {
        const pending = this.queue();
        this.queue.set([]);

        pending.forEach((r) => r.retry(token!));
        this.refreshing.set(false);

      },
      error: (err) => {
        this.queue().forEach((r) => r.error(err));
        this.queue.set([]);
        this.refreshing.set(false);

        this.handleToken.clear();
        this.router.navigate([ "" ], {
          queryParams: { session: "" }

        });


      }
      
    });

  }

}
