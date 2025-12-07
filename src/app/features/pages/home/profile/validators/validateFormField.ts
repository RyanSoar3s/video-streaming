import { AbstractControl, ValidationErrors } from "@angular/forms";

const validateUsername = (oldUsername: string) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const username = (control.value ?? "").trim();

    return (
            username !== "" &&
            username.length > 4 &&
            oldUsername !== username

          ) ? null : { invalidUsername: true };

  };

};

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
