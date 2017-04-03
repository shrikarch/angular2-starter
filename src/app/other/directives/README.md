### Directives
###### Directives are instructions in the DOM.

example: `<p appTurnGreen>turn green </p>` of a directive specified as an attribute.

##### Structural directives
`<p *ngIf>` the `*` signifies that `ngIf` is a structural directive. That means it changes the structure of our dom.
In this case, it either adds the element or it doesn't. It takes any
`<p *ngIf="functionSetTrue">` takes any expression that's either true or false.
Where the functionSetTrue can be any function in the component logic that returns sets the variable to true/false.

*Else logic*
```html
<p *ngIf="serverCreated; else noServer">Printer</p>
<ng-template #noServer>
  the # here is the local-marker
</ng-template>
```
This `ngIf/else` hence show the `ng-template` that is called #noServer if(as long as) the condition was not satisfied.

###### ngFor
Loops through the given array of things.
```html
<input type="text" [(ngModel)]="serverName">
<button class="btn btn-warning" (click)="onClicked()">Clicker</button>

<span *ngFor="let server of servers">{{server}} <br></span>
```
where the ts file is:
```ts
serverName = "";
servers = ['serverOne','serverTwo'];
onClicked(){
  this.servers.push(this.serverName)
}
```
This will go on adding the item mentioned in the textbox to the list.

To access the index of the items we're looping through, we need to add this:
```html
<span *ngFor="let server of servers; let i = index">{{server}} {{i}} <br></span>
```
Where i will print the index. We can use this to add classes etc to the printed elements.

---
##### Attribute directives
Directives without a `*`. Do not make changes to the structure of the app. Only properties of the element they were placed on.

###### ngStyle
ngStyle can be used to style the element, often conditionally.
```html
<p><span [ngStyle]="{'color': getColor()}">ng-style</span></p>
```
Sets the css/color to value returned by getColor. In ngStyle, we should only pass the js object as a key,value pair.

The logic behind getColor():
```ts
serverStatus: string = 'offline';

constructor() {
  //starts as soon as the component loads
  this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
}

getColor(){
  return this.serverStatus === 'online' ? 'green' : 'red';
}
```

Notice the shorthand for if-else.

###### ngClass
```html
<p>
  <span [ngStyle]="{'color': getColor()}" [ngClass]="{'online': serverStatus === 'online'}">
    ng-style
  </span>
</p>
```
Takes JS object wit key:val pair where they key is class to be added if the condition in val is true. Val can also be a func that returns boolean.
