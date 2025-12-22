import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, inject, OnInit, Injector, runInInjectionContext } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RequestApi } from '@core/services/request-api';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { validatePassword, validateUsername } from './validators/validateFormField';
import { ProfileInfo } from '@core/services/profile-info';
import { Responsive } from '@core/services/responsive';
import { timer } from 'rxjs/internal/observable/timer';
import { responseError } from '@core/models/responseError.model';

@Component({
  selector: 'app-profile',
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterOutlet,
    RouterLink,
    ReactiveFormsModule

  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  host: {
    '[style.height]': `(responsive.isXl()) ? "500px" :
                        (responsive.isLg()) ? "450px" : "420px"`

  }
})
export class Profile implements OnInit {
  protected readonly pathImg = "assets/home/user-white.png";
  protected readonly faXmark = faXmark;
  protected readonly faPenToSquare = faPenToSquare;

  protected email = "";
  public infos: Array<[ string, string, { edit: boolean } ]> = [
    [ "nome", "", { edit: false } ],
    [ "senha", "*******", { edit: false } ]

  ];

  protected readonly responsive = inject(Responsive);
  private request = inject(RequestApi);
  private profileInfo = inject(ProfileInfo)
  private fb = inject(FormBuilder);
  private cdr = inject(ChangeDetectorRef);
  private route = inject(Router);
  private injector = inject(Injector);

  public isError = false;
  public isChange = false;
  public isWarning = false;

  public formUsername!: FormGroup<{
    username: FormControl<string>

  }>;

  protected formPassword = this.fb.nonNullable.group({
    password: [ "", [ Validators.required, Validators.minLength(6) ] ],
    newPassword: [ "", [ Validators.required, Validators.minLength(6) ] ],
    repeatNewPassword: [ "", [ Validators.required, Validators.minLength(6) ] ]

  },
  { validators: validatePassword }
  );

  ngOnInit(): void {
    this.email = this.profileInfo.profileInfo().email;
    this.infos[0][1] = this.profileInfo.profileInfo().username;
    this.formUsername = this.fb.nonNullable.group(
      {
        username: [
          this.profileInfo.profileInfo().username,
          [ Validators.required, Validators.minLength(5) ]

        ]

      },
      {
        validators: runInInjectionContext(this.injector, () =>
          validateUsername()

        )

      }

    );

  }

  backToProfile(): void {
    this.infos[0][2].edit = false;
    this.infos[1][2].edit = false;

  }

  showForm(index: number, info: [ string, string, { edit: boolean } ]): void {
    if (index === 0) {
      this.formUsername.controls["username"].setValue(this.infos[0][1]);

    }

    info[2].edit = true;

  }

  onSubmitChangeUsername(): void {
    if (this.formUsername.valid) {
      const newUsername = this.formUsername.controls["username"].value;

      this.request.changeUsername({ newUsername }).subscribe({
        next: () => {
          const username = this.profileInfo.profileInfo().username;
          this.infos[0][1] = username;

          this.isChange = true;
          console.log("Nome alterado com sucesso");
          this.cdr.detectChanges();
          
          timer(1000).subscribe(() => {
            this.isChange = false;
            this.cdr.detectChanges();

            this.route.navigate([ "/home" ]);

          });

        },
        error: (error: responseError) => {
          this.isError = true;
          console.error(`Error: ${error.error.message}`);
          this.formUsername.reset();
          this.cdr.detectChanges();

          timer(1000).subscribe(() => {
            this.isError = false;
            this.cdr.detectChanges();

          });

        }

      });

    }

  }

  onSubmitChangePassword(): void {
    if (this.formPassword.valid) {
      const password = this.formPassword.controls["password"].value;
      const newPassword = this.formPassword.controls["newPassword"].value;
      this.request.changePassword({ password, newPassword }).subscribe({
        next: () => {
          this.isChange = true;
          console.log("Senha alterada com sucesso");
          this.cdr.detectChanges();

          timer(1000).subscribe(() => {
            this.isChange = false;
            this.route.navigate([ "/home" ]);
            this.cdr.detectChanges();

          });

        },
        error: (error: responseError) => {
          this.isError = true;
          console.error(`Error: ${error.error.message}`);
          this.formUsername.reset();
          this.cdr.detectChanges();

          timer(1000).subscribe(() => {
            this.isError = false;
            this.cdr.detectChanges();

          });

        }

      });

    }

  }

  onSubmitLogout(): void {
    this.request.logout().subscribe({
      next: () => {
        console.log("Logout feito com sucesso!");
        this.route.navigate([ "/" ]);

      },
      error: (error: responseError) => {
        this.isError = true;
        console.error(`Error: ${error.error.message}`);
        this.formUsername.reset();
        this.cdr.detectChanges();

        timer(1000).subscribe(() => {
          this.isError = false;
          this.cdr.detectChanges();

        });

      }

    });

  }

  onSubmitDelete(): void {
     this.request.delete().subscribe({
      next: () => {
        console.log("Conta deletada com sucesso!");
        this.route.navigate([ "/" ]);

      },
      error: (error: responseError) => {
        this.isError = true;
        console.error(`Error: ${error.error.message}`);
        this.formUsername.reset();
        this.cdr.detectChanges();

        timer(1000).subscribe(() => {
          this.isError = false;
          this.cdr.detectChanges();

        });

      }

    });

  }

}
