import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnInit, viewChildren } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { responseError } from '@core/models/responseError.model';
import { PendingVerification } from '@core/services/pending-verification';
import { RequestApi } from '@core/services/request-api';
import { Responsive } from '@core/services/responsive';
import { Loading } from '@features/shared/loading/loading';
import { timer } from 'rxjs';

@Component({
  selector: 'app-verify-code',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    Loading

  ],
  templateUrl: './verify-code.html',
  styleUrl: './verify-code.css'
})
export class VerifyCode implements OnInit, AfterViewInit {
  private inputs = viewChildren<ElementRef<HTMLElement>>("inputs");
  private requestApi = inject(RequestApi);
  private pendingVerification = inject(PendingVerification);
  private router = inject(Router);
  private cdr = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);
  protected responsive = inject(Responsive);

  protected isError = false;
  protected isLoading = false;

  protected form = this.fb.nonNullable.group({
    d1: [ "", [ Validators.required, Validators.maxLength(1), Validators.pattern(/\d{1}/) ] ],
    d2: [ "", [ Validators.required, Validators.maxLength(1), Validators.pattern(/\d{1}/) ] ],
    d3: [ "", [ Validators.required, Validators.maxLength(1), Validators.pattern(/\d{1}/) ] ],
    d4: [ "", [ Validators.required, Validators.maxLength(1), Validators.pattern(/\d{1}/) ] ],
    d5: [ "", [ Validators.required, Validators.maxLength(1), Validators.pattern(/\d{1}/) ] ],
    d6: [ "", [ Validators.required, Validators.maxLength(1), Validators.pattern(/\d{1}/) ] ]

  });

  protected isDigit = true;
  protected valid = false;

  protected errorMsg = "";

  protected lastKey: string = "";

  ngOnInit(): void {
    const expiresAt = this.pendingVerification.getExpiresAt();

    if (!expiresAt || expiresAt! < Date.now()) {
      this.errorMsg = "Código expirado";

      this.isError = true;

      this.form.reset();
      this.isLoading = false;
      this.pendingVerification.clear();

      this.cdr.detectChanges();

      timer(1000).subscribe(() => {
        this.isError = false;
        this.cdr.detectChanges();

        this.router.navigate([ "" ]);

      });

    }

  }

  ngAfterViewInit(): void {
    this.inputs()[0].nativeElement.focus();

    this.form.valueChanges.subscribe((values) => {
      const allDigits = Object.values(values).every((v) => v === "" || /^\d$/.test(v));

      this.isDigit = allDigits;

    });

  }

  selectNextInput(index: number): void {
    if (!/^[a-zA-Z0-9]$/.test(this.lastKey)) return;

    let i = (index <= 5 && index + 1 <= 5) ? index + 1 : 0;
    let verifieldInputs = 0;

    while (verifieldInputs <= 5) {
      const input = this.inputs()[i++].nativeElement as HTMLInputElement;

      if (!input.value) {
        input.focus();
        break;

      }

      if (i > 5) i = 0;

      verifieldInputs++;

    }

  }

  onSubmit(): void {
    if (this.form.valid) {
      const email = this.pendingVerification.getEmail();
      const values = Object.values(this.form.value);
      this.isLoading = true;

      this.requestApi.verify({ email, code: values.join("") }).subscribe({
        next: (value) => {
          console.log(value.message);
          this.pendingVerification.clear();
          this.valid = true;

          this.cdr.detectChanges();

          timer(1000).subscribe(() => {
            this.valid = false;
            this.cdr.detectChanges();

            this.router.navigate([ "/" ]);

          });

        },
        error: (error: responseError) => {
          const tokenIsValid = error.error.isValidToken;

          this.errorMsg = (tokenIsValid) ?
                            "Não foi possível validar o código" :
                            "Código expirado"

          this.isError = true;
          console.error(`Error: ${error.error.message}`);

          this.form.reset();
          this.isLoading = false;
          this.cdr.detectChanges();

          timer(1000).subscribe(() => {
            this.isError = false;
            this.cdr.detectChanges();

            if (!error.error.isValidToken) {
              this.pendingVerification.clear();
              this.router.navigate([ "/" ]);

            }

          });

        }

      });

    }

  }

}
