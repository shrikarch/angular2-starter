### Databinding
The usual databinding is done like this:
```html
<!--databinding.component.html-->
<p>
  databinding works!
</p>
<h2>{{stringInterpolation}}</h2>
<input type="text" name="" [value]="stringInterpolation">
<p>{{onTest()}}</p>
```
Where `[value]` binds the data to the ng property value and not the DOM property, while the `{{onTest()}}` is just a function written in the class of this particular component.

`<p [ngClass] = "{redBorder:true}">Some string</p>` is also supposed to work. Where `{ }` hold executable javascript. But it does not work with my files. Possible version conflict.

Similarly, `<p [ngStyle]="{color:'red'}">Mahogany</p>` will set the style to red.
```javascript
export class DatabindingComponent {
  stringInterpolation = "Hey This is example string interpolaiton";
  onTest(){
    return true;
  }
//pulls these objects into HTML template.
}
```
>How do you know to which Properties or Events of HTML Elements you may bind?

>"*The MDN (Mozilla Developer Network) offers nice lists of all properties and events of the element you're interested in. Googling for YOUR_ELEMENT properties  or YOUR_ELEMENT events  should yield nice results.*"

##### Property Binding
```ts
//databinding.component.ts
export class DatabindingComponent {
  setDisable = false;
  constructor(){
    setTimeout(() => {
      this.setDisable = true;
    },2000) //sets true after 2secs.
  }
}
```
Using this, we can map a property of a DOM element like this:
```html
<button type="button" name="button" class="btn btn-warning" [disabled]="setDisable">Property Binding</button>
```
Where [disabled] tells angualr that it is a bound attribute.
setting `[disabled]="!setDisable"` will do the opposite.
We can set `innerText` property to manipulate content inside the tag.


##### Event Binding
```javascript
//event-binding.Component.ts
@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Bound event</button>
  `,
  styles: []
})
export class EventBindingComponent {
  onClicked(){
    alert("It works");
  }
}
```
The event needs to be in the bound button between `()`. Eg: `(click)`
`<button (clicked)="onClicked($event)"></button>`

##### Custom event bindings
```javascript
//event-binding.Component.ts
import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'fa-event-binding',
  template: `
    <button (click)="onClicked()">Bound event</button>
  `,
  styles: []
})
export class EventBindingComponent {
  clicked = new EventEmitter();
  onClicked(){
    this.clicked.emit("it works");
  }
}
```
Notice that we have to import EventEmitter from the angualar root and then create a new event emitter object. That is bound to the onClicked function.
Right now, it is available to be used inside this component but to make it available outside, we will have to add an `@output` decorator. like this:

```javascript
//event-binding.Component.ts
import { Component, EventEmitter, Output } from '@angular/core';
...
export class EventBindingComponent {
  @Output() clicked = new EventEmitter();
  onClicked(){
    this.clicked.emit("it works");
  }
}
```
Once that is done, we add
`<fa-event-binding (clicked)="onClicked($event)"></fa-event-binding>`
to the databinding (parent) html file. Where $event is protected and cannot be overriden.

To support that we add the event function to databinding.component.ts too, which will end up looking like this
```javascript

  onClicked(value: string){
    alert(value);
  }

```
To have a different name for the event that we just made global, we add it as a parameter to `@Output`.
For example, to rename clicked in this to clickable, `<fa-event-binding (clickable)="onClicked($event)"></fa-event-binding>`
we also change
```javascript
//event-binding.Component.ts
...
export class EventBindingComponent {
  @Output('clickable') clicked = new EventEmitter();
  onClicked(){
    this.clicked.emit("it works");
  }
}
```
#### Two way data bindings
The two way data binding can be achieved using `ngModel`.
For example,
```html
<input type="text" [(ngModel)]="boundVariable">
```
For Two-Way-Binding to work, you need to enable the `ngModel`  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

`import { FormsModule } from '@angular/forms'; `
