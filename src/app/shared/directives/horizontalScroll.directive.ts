import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[appHorizontalScroll]",
})
export class HorizontalScrollDirective {

    constructor(
        private _element: ElementRef
    ) {}
  
    @HostListener("wheel", ["$event"])
    public onScroll(event: WheelEvent) {
        this._element.nativeElement.scrollLeft += event.deltaY;
    }

}