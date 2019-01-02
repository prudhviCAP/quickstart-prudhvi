"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Nonuprasad';
        this.myColor = 'navy';
        this.fontweight = 'bold';
        this.myStyle = { 'background-color': 'grey', 'font-size': '24px' };
        this.fName = 'admin';
        this.lName = 'adminpage';
    }
    AppComponent.prototype.change = function () { this.name = this.name === 'clicked' ? 'clicked' : 'clicked again'; };
    ;
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        //template: `<style><h1>Helo </h1><br/><h1>'${name}'</h1></style>`,
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        styles: ['.cube']
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map