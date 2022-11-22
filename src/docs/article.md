# Angular strictly-typed forms

In this article we will take a look to the brand-new Angular's typed forms, shipped with version 14 of the framework. We will walk first through the problems encountered with untyped forms, then we'll se how the angular team have been addressed such problems and defined a path to guide developers towards a full-typed forms transition.

## A bit of history

Since the very first versions of Angular 2+, the framework has offered a programmatically support to form handling called *"Reactive Forms"*. With this approach, developers have had a declarative way to define a form model / validators in the code-side of a component and got a reactive-based support to observe form value / status transitions. Here is a basic reactive form declaration example:

![Basic reactive form declaration](./images/01000-form-declaration.png)

## Reactive forms: An untyped story

Despite its powerful APIs, reactive forms have always been poorly typed. As we can see, the internal model is resolved to a generic untyped map of key-value pairs:

![Form untyped map](./images/02000-form-untyped-map.png)

Furthermore, it is possible to set invalid values or access non-existent properties of the form model, without any compiler complaint:

![Form untyped forms with no compiler errors](./images/03000-form-untyped-no-errors.png)

This lack of constraints is dangerous and error-prone, especially in a real-world scenario where forms are big and distributed across a wide range of components; furthermore the codebase is maintained by many developers so the possibility of a typo in a model property or the assignment of a wrong value is very high and can lead to errors.

## ng@14: Types to the rescue!

Angular typed forms support has been the top #1 feature request for a long time and finally landed with version 14 of the framework. It worth to be said that such feature is also a breaking change because _FormGroup_, _FormArray_ and _FormControl_, that were untyped in older versions, have changed their behavior in order to be strictly typed. Fortunately, Angular guys made an excellent job to guarantee a seamless upgrade by running an automatic migration of the legacy forms to the brand new classes _UntypedFormGroup_, _UntypedFormArray_ and _UntypedFormControl_.

The upgrade of angular is as simple as the following command:
```sh
$ ng update @angular/cli@14
```

After the upgrade process, we can see how our form declaration has been automatically modified:

![Form untyped after angular 14 upgrade](./images/04000-form-untyped-after-ng-14-upgrade.png)