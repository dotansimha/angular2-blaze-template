import { ElementRef, OnInit, OnDestroy } from "@angular/core";
export declare class BlazeTemplate implements OnInit, OnDestroy {
    private element;
    name: string;
    context: any;
    private viewHandler;
    constructor(element: ElementRef);
    ngOnInit(): any;
    ngOnDestroy(): any;
}
