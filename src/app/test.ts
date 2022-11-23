import { FormControl, FormGroup } from "@angular/forms";

interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export function test(): void {
  const formGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('test'),
  });

  

  const formValue = formGroup.value;
  formGroup.removeControl('name');

  // const login = new FormGroup<LoginForm>({
  //     email: new FormControl('', {nonNullable: true}),
  //     password: new FormControl('', {nonNullable: true}),
  // });

  // const loginValue1 = login.value;
  
  // login.removeControl('password');

  // const loginValue2 = login.value;
}