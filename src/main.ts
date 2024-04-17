/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register as registerSwiperElements } from 'swiper/element/bundle';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

enableProdMode();
registerSwiperElements();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
