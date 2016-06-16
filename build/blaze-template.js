"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var blaze_1 = require("meteor/blaze");
var templating_1 = require("meteor/templating");
var BlazeTemplate = (function () {
    function BlazeTemplate(element) {
        this.element = element;
    }
    BlazeTemplate.prototype.ngOnInit = function () {
        var templateObject = templating_1.Template[this.name];
        var domElement = this.element.nativeElement;
        if (!templateObject) {
            throw new Error("[BlazeTemplate] Unable to find Blaze Template with name " + this.name + "!");
        }
        this.viewHandler = blaze_1.Blaze.renderWithData(templateObject, this.context || this, domElement);
    };
    BlazeTemplate.prototype.ngOnDestroy = function () {
        if (this.viewHandler) {
            blaze_1.Blaze.remove(this.viewHandler);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BlazeTemplate.prototype, "name", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BlazeTemplate.prototype, "context", void 0);
    BlazeTemplate = __decorate([
        core_1.Component({
            selector: 'blaze-template',
            template: ''
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], BlazeTemplate);
    return BlazeTemplate;
}());
exports.BlazeTemplate = BlazeTemplate;
