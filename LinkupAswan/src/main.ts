import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CoreModule } from './app/core.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//bootstrapApplication(AppComponent, appConfig)
//.catch((err) => console.error(err));
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

platformBrowserDynamic().bootstrapModule(CoreModule)
  .catch((err) => console.error(err));