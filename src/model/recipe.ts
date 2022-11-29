import { FormArray, FormControl, FormGroup } from "@angular/forms";


export type Recipe = {
  name: string;
  author: string;
  isVegan: boolean;
  cookingTime: number;
  ingredients: Array<{ name: string; amount: string; }>;
}

export type FormFromModel<T> = T extends Record<string, unknown> ? FormGroup<{
  [P in keyof T] : FormFromModel<T[P]>
}> : T extends Array<infer TArr> ? FormArray<FormFromModel<TArr>> : FormControl<T>;


interface UserForm
  extends FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number>;
  }> {}

type Xyz = UserForm['value'];
