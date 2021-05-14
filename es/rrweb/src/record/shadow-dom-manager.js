import { initMutationObserver } from './observer.js';

var ShadowDomManager = (function () {
    function ShadowDomManager(options) {
        this.mutationCb = options.mutationCb;
        this.bypassOptions = options.bypassOptions;
    }
    ShadowDomManager.prototype.addShadowRoot = function (shadowRoot, doc) {
        initMutationObserver(this.mutationCb, doc, this.bypassOptions.blockClass, this.bypassOptions.blockSelector, this.bypassOptions.maskTextClass, this.bypassOptions.maskTextSelector, this.bypassOptions.inlineStylesheet, this.bypassOptions.maskInputOptions, this.bypassOptions.maskTextFn, this.bypassOptions.recordCanvas, this.bypassOptions.slimDOMOptions, this.bypassOptions.iframeManager, this, shadowRoot);
    };
    return ShadowDomManager;
}());

export { ShadowDomManager };
