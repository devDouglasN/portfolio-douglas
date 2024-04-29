/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { register } from 'swiper/element/bundle';

import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';

enableProdMode();
register()

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
