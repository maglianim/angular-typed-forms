import { FormControl, FormGroup, FormRecord } from "@angular/forms";

interface LoginForm {
  email: FormControl<string>;
  password?: FormControl<string>;
  twoFactor?: FormControl<boolean>;
}

export function logFormTests(): void {
  console.log(`*************** logFormTests - Start *********************`);

  const login = new FormGroup<LoginForm>({
    email: new FormControl('no-address', {nonNullable: true}),
  });

  console.log(`[FormGroup value - only email]`, login.value);

  console.log(`
    // ⛔ this would crash because password is not yet created
    login.setValue({
      email: 'email - changed',
      password: 'pwd - changed',    
    })
  `);

  login.addControl('password', new FormControl('password-added', { nonNullable: true }));
  
  console.log(`[FormGroup value - after adding password]`, login.value);

  // ✅ now setValue accepts password.
  login.setValue({
    email: 'email - changed',
    password: 'pwd - changed',    
  })

  console.log(`
    ⛔ not allowed because email is not optional
    login.removeControl('email');
  `);

  console.log(`[FormGroup value - after set value]`, login.value);

  // ✅ password can be removed as it is optional
  login.removeControl('password');
  
  console.log(`[FormGroup value - after password removal]`, login.value);

  console.log(`
    ⛔ this would crashes because password has been removed
    login.setValue({
      email: 'email - changed',
      password: 'pwd - changed',    
    });`
  );

  const loginRecord = new FormRecord<FormControl<string>>({});

  console.log(`[FormRecord value - after creation]`, loginRecord.value);
  
  loginRecord.addControl('author', new FormControl('initial-value', { nonNullable: true }));

  console.log(`[FormRecord value - after adding author]`, loginRecord.value);

  loginRecord.setValue( {   })

  console.log(`[FormRecord value - after setting author value]`, loginRecord.value);

  loginRecord.reset();

  console.log(`[FormRecord value - after reset without setting value]`, loginRecord.value);

  loginRecord.reset({ author: 'explicit-reset'});

  console.log(`[FormRecord value - after reset with explicit value]`, loginRecord.value);

  const loginRecordTest = new FormRecord<FormGroup<{ id: FormControl<number>, code: FormControl<string>}>>({});

  console.log(loginRecordTest.value);

  loginRecordTest.addControl('foo', new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    code: new FormControl('', { nonNullable: true }),
  }));

  console.log(loginRecordTest.value);

  loginRecordTest.addControl('bar', new FormGroup({
    id: new FormControl(0, { nonNullable: true }),
    code: new FormControl('', { nonNullable: true }),
  }));  

  console.log(loginRecordTest.value);  

  // login.addControl('twoFactor', new FormControl(false, { nonNullable: true }));

  // const loginValue1 = login.value;
  
  // login.removeControl('email');
  // login.removeControl('password');

  // const loginValue2 = login.value;

  console.log(`*************** logFormTests - End  *********************`);
}