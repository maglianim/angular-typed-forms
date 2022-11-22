https://angular.io/guide/typed-forms#formgroup-and-formrecord
- use case: you have a dynamic list of control all of the same type not known ahead of time .addControl() is possible to add a new form control according with the possible configured types

- using FormGroup, the model of the form is determined in advance, hence addControl gives an error

- FormGroup.addControl works when FormGroup is created without specifying initial model, but in this case there is no type check

- multiple call of FormGroup.addControl with the same name has no effect (the first control with the given name wins)




https://blog.ninja-squad.com/2022/04/21/strictly-typed-forms-angular/



https://blog.angular-university.io/angular-typed-forms/
https://offering.solutions/blog/articles/2022/07/09/getting-started-with-angular-strictly-typed-reactive-forms/




======================

- Before ng14: no type support
- From ng14 opt-in (BREAKING CHANGE)
    to opt out legacy form use UntypedFormGroup / UntypedFormControl / UntypedFormArray / UntypedFormBuilder
- Incremental conversion from untyped to typed
- declaration (FormGroup vs FormBuilder)
- Nullability: { nonNullable: true } vs fb.nonNullable.control vs notNullableFb.control
- common pitfall : untyped FormGroup loses type inference
    - mostrare caso
    - mostrare dichiarazione tipizzata
    - mostrare dichiarazione tipizzata con tipo al seguito
- NEW: FormGroup vs FormRecord

