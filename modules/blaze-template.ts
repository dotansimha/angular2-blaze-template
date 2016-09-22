import {Component, ElementRef, Injectable, Input, OnInit, OnDestroy} from "@angular/core";
import {Blaze} from "meteor/blaze";
import {Template} from "meteor/templating";

@Component({
    selector: 'blaze-template',
    template: ''
})
@Injectable()
export class BlazeTemplate implements OnInit, OnDestroy {
    @Input() name: string;
    @Input() context: any;
    private viewHandler: any;

    constructor(private element: ElementRef) {
    }

    ngOnInit(): any {
        const templateObject: any = Template[this.name];
        const domElement: any = this.element.nativeElement;

        if (!templateObject) {
            throw new Error(`[BlazeTemplate] Unable to find Blaze Template with name ${this.name}!`);
        }

        this.viewHandler = Blaze.renderWithData(templateObject, this.context || this, domElement);
    }

    ngOnDestroy(): any {
        if (this.viewHandler) {
            Blaze.remove(this.viewHandler);
        }
    }
}
