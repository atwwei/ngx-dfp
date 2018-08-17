# ngx-dfp

Semantic DoubleClick for Publishers (DFP by Google) integration with Angular 6.

dfp-ad 

```AD
<dfp-ad adUnit="/path-to-my/ad-unit" responsive (afterRefresh)="refreshed($event)">
  <dfp-size [width]="320" [height]="50"></dfp-size>
  <dfp-responsive [viewport]="[800,0]" [adSizes]="[[728,90],[600,300]]"></dfp-responsive>
  <dfp-responsive [viewWidth]="1024">
    <dfp-size [width]="970" [height]="90"></dfp-size>
    <dfp-size [width]="1024" [height]="90"></dfp-size>
  </dfp-responsive>
  <dfp-targeting key="food" [value]="['chicken','meatballs']"></dfp-targeting>
</dfp-ad>
```

dfp-video 

```VIDEO
<dfp-video width="640" height="480" [adActions]="adInput" (adEvents)="adEvent($event)" adTag="dfpVideoTag">
  <video preload="auto" poster="/path/poster.jpg">
    <source src="/assets/demo.mp4">
  </video>
</dfp-video>
<button (click)="adInput.emit('play')">Play AD</button>
```

[Sample styles](https://github.com/atwwei/ngx-dfp/blob/daa9e7bc6d8df7622cc9b18b3d952d92f5a5ecb4/demo/app/page/page.component.scss)

[Sample DFP Video tags](https://developers.google.com/interactive-media-ads/docs/sdks/html5/tags)

## DfpConfig

Config dfp with the optional options below:

```HTML
DfpModule.forRoot({
  idleLoad: true,
  enableVideoAds: true,
  personalizedAds: false, // Request non-personalized ads
  singleRequestMode: true,
  onSameNavigation: 'refresh',
  globalTargeting: {
    food: ['chicken', 'meatballs']
  }
})
```

## Demo

- Source of demo page: [Demo Source](https://github.com/atwwei/ngx-dfp/tree/master/src)
- Online demo using StackBlitz: [Editor URL](https://stackblitz.com/edit/angular-fftqvj)

