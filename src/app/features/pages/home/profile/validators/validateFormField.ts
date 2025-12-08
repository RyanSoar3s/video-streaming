import { inject } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { ProfileInfo } from "@core/services/profile-info";

const validateUsername = (): ValidatorFn => {
  const profileInfo = inject(ProfileInfo);

  return (control: AbstractControl): ValidationErrors | null => {
    const oldUsername = profileInfo.profileInfo().username;
    const username = control.get("username")?.value ?? "";

    return (
      username.trim() !== "" &&
      username.trim().length > 4 &&
      oldUsername !== username.trim()
    )
      ? null
      : { invalidUsername: true };

  };

}


const validatePassword = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get("password")?.value.trim();
  const newPassword = control.get("newPassword")?.value.trim();
  const repeatNewPassword = control.get("repeatNewPassword")?.value.trim();

  return (
            (password !== "" && newPassword !== "" && repeatNewPassword !== "") &&
            (password.length >= 6 && newPassword.length >= 6 && repeatNewPassword.length >= 6) &&
            password !== newPassword &&
            newPassword === repeatNewPassword

          ) ? null : { invalid: true }

};

export {
  validateUsername,
  validatePassword

};
