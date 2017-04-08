_Compiling these notes while learning from this amazing course on Udemy.com called [Angular 4 (formerly Angular 2) - The Complete Guide](https://www.udemy.com/the-complete-guide-to-angular-2/) by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)._

The app that resulted from these basics can be found at: [https://github.com/shrikarch/ng2-recipe-app](https://github.com/shrikarch/ng2-recipe-app)

## Basics
##### How does `ng serve` server serves the webpages?
Server fetches the index.html file. (duh) Index.html has component `<app-root>`. The app.component.tc file has a selector that targets `<app-root>` upon initialization. This is what it looks like:

```ts
//app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //will fetch markup from here and print it
  styleUrls: ['./app.component.css']
  //will fetch styling from here for that markup
});  
```
##### Bootstrapping the app
main.ts has a bootstrapper function that gets passed 'AppModule' like this:
```ts
//main.ts
import { AppModule } from './app/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);
//refers to app.module.ts
```
in app.component.ts following lines tell the application to start AppComponent.
```ts
providers: [],
bootstrap: [AppComponent]
```
##### String Interpolation
String interpolation works as long as the content between the {{}} returns a string. However, we cannot use if or loops inside those.
Only functions that return strings, variables(numbers included), or functions with return type as strings.
##### Constructor
Function that is executed at the time when the Angular creates that particular component

**In order to use the component, it is necessary that we add that component's selector to the app.component.ts markup**

---
## Working
To create a new component we can do

`ng generate component componentName`
or shorter version `ng g c componentName`.
If we say `ng g c compName --flat -is -it` where `-is` is short for `--inline-style` and  `-it` for `--inline-template`.

---
###### Using `ng-content`
If we want to pass this h1 tag in the following example as it is, we add `ng-content` to the template of component we want that to print under.

```html
<!--app.component.ts-->
@Component({
  selector: 'app-root',
  template: `
  <h1>
    {{title}}
  </h1>
  <fa-other></fa-other>
  <fa-another>
    <h1>Hey</h1>
  </fa-another>
`,
```
and
```html
@Component({
  selector: 'fa-another',
  template: `
    <ng-content></ng-content>
  `,
  styles: []
})
```
will print h1 as it is under `fa-another`, but will get the styling from app.component.css.

_From now onwards, all the instructions will be in the README of that respective folder._
- Databinding notes in: 'src/app/other/databinding'

---
##### Instructions that the project was shipped with.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

###### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

###### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

###### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

###### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

###### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

###### Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

###### Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
