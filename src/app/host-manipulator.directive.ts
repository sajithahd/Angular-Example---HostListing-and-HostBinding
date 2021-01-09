import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appHostManipulator]"
})
export class HostManipulatorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") onclick() {
    this.renderer.addClass(this.el.nativeElement, "clicked");
    this.renderer.removeClass(this.el.nativeElement, "leave");
    this.renderer.removeClass(this.el.nativeElement, "over");
  }

  @HostListener("mouseover") onMouseOver() {
    // Using renderer
    //this.renderer.addClass(this.el.nativeElement, "over");

    // using host binding
    this.classOver = "over";
    this.renderer.removeClass(this.el.nativeElement, "leave");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.addClass(this.el.nativeElement, "leave");
    this.renderer.removeClass(this.el.nativeElement, "over");
  }

  // This happens because @HostBinding only supports binding of values, while host metadata supports both binding and static values.
  @HostBinding("class.over") classOver: string;
}
