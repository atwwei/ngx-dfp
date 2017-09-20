import {
    Directive, ElementRef,
    Inject, forwardRef,
    HostListener
} from '@angular/core';

import { DfpAdDirective } from '../directive';
import { DfpRefreshService } from '../service';

@Directive({
    selector: 'dfp-ad[responsive]'
})
export class DfpAdResponsive {

    private iframe: HTMLIFrameElement;
    private iframeWidth: number;
    private slot: any;

    constructor(
        private elementRef: ElementRef,
        @Inject(forwardRef(() => DfpAdDirective))
        private ad: DfpAdDirective,
        private dfpRefresh: DfpRefreshService
    ) {
        this.ad.afterRefresh.subscribe(event => {
            this.slot = event.slot;
        });
    }

    @HostListener('window:resize')
    normalizeIframe() {
        this.iframe = this.iframe || this.getIframe();
        if (!this.iframe) return;

        this.iframeWidth = this.iframeWidth || +this.iframe.width;

        let winWidth = window.innerWidth,
            state = this.ad.getState(),
            width = 0;

        state.sizes.forEach(size => {
            if (size[0] < winWidth) {
                width = Math.max(width, size[0]);
            }
        })

        if (width != this.iframeWidth) {
            let state = this.ad.getState();
            this.iframeWidth = width;
            this.iframe.setAttribute("width", width + '');
            this.dfpRefresh.slotRefresh(this.slot, state.refresh).then(slot => {
                this.ad.afterRefresh.emit({ type: 'resize', slot: slot });
                this.iframe = this.getIframe();
            });
        }
    }

    getIframe() {
        let ad: Element = this.elementRef.nativeElement,
            iframe = ad.querySelector('iframe');
        if (iframe && +iframe.width > 0) {
            return iframe;
        }
    }
}