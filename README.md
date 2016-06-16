<a href="http://angular-meteor.com/"><img src="http://angular-meteor.com/images/logo-large.png" width="60" height="60" /></a>  [angular2-blaze-template](http://angular-meteor.com)
======================================================

### &lt;blaze-template&gt;

Include Blaze templates in your [angular-meteor](http://angular-meteor.com/) application to use Blaze templates inside your Angular 2 app.

### Quick start

In the command line: `$ meteor npm install angular2-blaze-template`

Import and include the `BlazeComponent` inside you Angular 2 Component:

```ts
import {Component} from "@angular/core";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {BlazeTemplate} from 'angular2-blaze-template';

@Component({
  selector: "app",
  directives: [BlazeTemplate],
  template: `<blaze-template name="MyBlazeTemplate"></blaze-template>`,
})
class Main {
  constructor() {
  }
}

bootstrap(Main);
```

You can include Meteor's Blaze native templates with the [blaze-template](http://angular-meteor.com/api/blaze-template) directive.

```html
<blaze-template name="todoList"></blaze-template>
```

You can also specify context for the Template (default context is `this` that created by Angular 2 Component):

```html
<blaze-template name="App_body" [context]="mainTemplateArgs"></blaze-template>
```

And define `mainTemplateArgs` in your Angular 2 Component.

### Next steps
Read more on blaze-template, using parameters and binding Blaze templates to Angular's Component in the [Angular2-Meteor website](http://angular-meteor.com).