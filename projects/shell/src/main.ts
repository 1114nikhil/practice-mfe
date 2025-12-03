import { initFederation } from '@angular-architects/module-federation';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';

initFederation('/assets/mf.manifest.json')
  .then(() => bootstrapApplication(App, appConfig))
  .catch(err => console.error(err));