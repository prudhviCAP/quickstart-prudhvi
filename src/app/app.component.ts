import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  //template: `<style><h1>Helo </h1><br/><h1>'${name}'</h1></style>`,
 templateUrl : './app.component.html',
 styleUrls:['./app.component.css'],
  styles:['.cube']
})export class AppComponent  { name = 'Nonuprasad'; myColor='navy';fontweight='bold';myStyle={'background-color':'grey','font-size':'24px'};change(){this.name=this.name==='clicked'?'clicked':'clicked again'};fName:string='admin';lName:string='adminpage'}
