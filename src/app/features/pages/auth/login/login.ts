import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef,
  inject,
  Renderer2,
  viewChild,
  viewChildren

} from '@angular/core';
import { Responsive } from '@core/services/responsive';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { RequestApi } from '@core/services/request-api';
import { Router, RouterOutlet } from '@angular/router';
import { timer } from 'rxjs';
import { PendingVerification } from '@core/services/pending-verification';
import { Loading } from '@features/shared/loading/loading';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterOutlet,
    Loading

],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements AfterViewInit {
  protected readonly responsive = inject(Responsive);
  private renderer = inject(Renderer2);
  private request = inject(RequestApi);
  private cdr = inject(ChangeDetectorRef);
  private router = inject(Router);
  private pendingVerification = inject(PendingVerification);

  private fb = inject(FormBuilder);

  protected form = this.fb.nonNullable.group({
    email: [ "", [ Validators.required, Validators.email ] ],
    password: [ "", [ Validators.required, Validators.minLength(6) ] ]

  });

  protected requestMode: "signin" | "signup" = "signin";
  protected messageRequestMode = {
    "signin": [ "Entre E Aproveite Nosso Conteúdo", "Não possui conta?", "Entrar" ],
    "signup": [ "Tenha Acesso Ao Maior Catálogo Existente", "Já possui conta?", "Cadastrar" ]

  };

  protected readonly logo = "favicon.ico";
  protected readonly faEye = faEye;
  protected readonly faEyeSlash = faEyeSlash;
  protected passIsHidden = true;

  protected errorMsg = false;
  protected isLoading = false;

  private labels = viewChildren<ElementRef<HTMLElement>>("labels");
  private googleBtn = viewChild<ElementRef<HTMLElement>>("googleBtn");
  private pass = viewChild<ElementRef<HTMLElement>>("pass");

  ngAfterViewInit() {
    google.accounts.id.initialize({
      client_id: "456680708228-mc2jdi64ut8b3udqkua7rrvcj19os8ao.apps.googleusercontent.com",
      callback: (response: any) => this.handleCredentialResponse(response)

    });

    const btn = this.googleBtn()?.nativeElement;
    if (!btn) return;

    google.accounts.id.renderButton(btn, {
      theme: "filled_black",
      size: "large",
      shape: "pill",
      width: 250

    });

  }

  private handleCredentialResponse(response: any) {
    const jwt = response.credential;
    this.isLoading = true;
    
    this.request.accessGoogle(jwt).subscribe({
      next: (value) => {
        console.log(value.message);
        this.router.navigate([ "/home" ]);

      },
      error: (error) => {
        this.errorMsg = true;
        console.error(`Error: ${error}`);
        this.form.reset();
        this.cdr.detectChanges();

        timer(1000).subscribe(() => {
          this.errorMsg = false;
          this.cdr.detectChanges();

        });

      }

    });

  }

  private showLabel(index: number): void {
    this.renderer.setStyle(this.labels()[index].nativeElement, "display", "block");

  }

  private hiddenLabel(index: number): void {
    this.renderer.setStyle(this.labels()[index].nativeElement, "display", "none");

  }

  changeVisibilityLabel(event: Event, index: number): void {
    const input = event.target as HTMLInputElement;

    if (input.value.length > 0) {
      this.hiddenLabel(index);

    }
    else {
      this.showLabel(index);

    }

  }

  changeVisibilityPass(): void {
    this.passIsHidden = !this.passIsHidden;
    this.renderer.setAttribute(this.pass()?.nativeElement, "type", (this.passIsHidden) ? "password" : "text" );

  }

  changeRequestMode(): void {
    this.requestMode = (this.requestMode === "signin") ? "signup" : "signin";
    this.form.reset();

  }

  onSubmit() {
    if (this.form.valid) {
      const data = this.form.value as { email: string, password: string };
      this.isLoading = true;

      if (this.requestMode === "signup") {
        this.request.register(data).subscribe({
          next: (value) => {
            console.log(value.message);
            this.pendingVerification.setEmail(data.email);
            this.pendingVerification.setPendingVerification(true);
            this.router.navigate([ "/verify-code" ]);

          },
          error: (error) => {
            this.errorMsg = true;
            console.error(`Error: ${error}`);
            this.form.reset();
            this.cdr.detectChanges();

            timer(1000).subscribe(() => {
              this.errorMsg = false;
              this.cdr.detectChanges();

            });

          }

        });

      }

      else {
        this.request.login(data).subscribe({
          next: (value) => {
            console.log(value.message);
            this.router.navigate([ "/home" ]);

          },
          error: (error) => {
            this.errorMsg = true;
            console.error(`Error: ${error}`);
            this.form.reset();
            this.cdr.detectChanges();

            timer(1000).subscribe(() => {
              this.errorMsg = false;
              this.cdr.detectChanges();

            });

          }

        });

      }


    }

  }

}
