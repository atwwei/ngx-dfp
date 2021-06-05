import { Directive, Input, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

import { DfpAdMapping, DfpAdTargeting } from '../types';
import { DfpService } from '../service/dfp.service';

/**
 * @link https://developers.google.com/publisher-tag/
 */
@Directive({
  selector: '[dfpAd]'
})
export class DfpAdDirective {
  _element: Element | undefined;

  @Input('dfpAd') adUnitPath: string = '';
  @Input('dfpAdId') id: string = '';
  @Input('dfpAdSize') size: googletag.GeneralSize = [];
  @Input('dfpAdSizeMapping') sizeMapping: googletag.SizeMappingArray | undefined;
  @Input('dfpAdTargeting') targeting: DfpAdTargeting = {};
  @Input('dfpAdClickUrl') clickUrl: string = '';
  @Input('dfpAdCollapseEmptyDiv') collapseEmptyDiv: boolean | [boolean, boolean] | undefined;
  @Input('dfpAdContent') content: string | undefined;

  constructor(
    private _viewContainer: ViewContainerRef,
    private _templateRef: TemplateRef<any>,
    private renderer: Renderer2,
    private dfpService: DfpService,
  ) { }

  ngOnInit() {
    if (this.adUnitPath) {
      // render element
      this._viewContainer.clear();
      const view = this._viewContainer.createEmbeddedView(this._templateRef);
      this._element = view.rootNodes[0];
      // define slot
      this.dfpService.push(this);
      // clear template node
      const tpl: Element = this._templateRef.elementRef.nativeElement;
      this.renderer.removeChild(tpl.parentNode, tpl);
    } else {
      this._viewContainer.clear();
    }
  }

  get element() {
    return this._element;
  }
}
