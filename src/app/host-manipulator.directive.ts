import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: "[appHostManipulator]"
})
export class HostManipulatorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click") onclick() {
    this.renderer.addClass(this.el.nativeElement, "clicked");
  }

  @HostListener("mouveover") onMouseOver() {
    this.renderer.addClass(this.el.nativeElement, "over");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.addClass(this.el.nativeElement, "leave");
    this.renderer.removeClass(this.el.nativeElement, "over");
  }
}
