import { Injectable,OnDestroy } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { BehaviorSubject, Subscription, interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkerService implements OnDestroy {
  $isAnyNewUpdateAvailable: BehaviorSubject<boolean> = new BehaviorSubject(false);
  serviceSubscriptions: Subscription[] = [];

  constructor(public swUpdate: SwUpdate) {
    this.initialize();
  }

  async initialize() {
    
    if (this.swUpdate.isEnabled) {
      // If service worker is enabled
      console.log("click",'Service worker running.');
      const updateFound = await this.swUpdate.checkForUpdate();
      console.log(updateFound ? 'A new version is available.' : 'Already on the latest version.');
      this.serviceSubscriptions.push(interval(15 * 1000).subscribe(async () => {
        }));

      
      this.serviceSubscriptions.push(
        this.swUpdate.versionUpdates.subscribe(async evt => {
          console.log("service worker active",evt);
          if (evt.type === 'VERSION_READY') {
            this.$isAnyNewUpdateAvailable.next(true);
          }
        }),
      );
      this.serviceSubscriptions.push(
        this.swUpdate.unrecoverable.subscribe(evt => {
          console.log('App is in unrecoverable state. Reloading to avoid chunk load issue.');
          //To do, may be prompt the user first. before loading the page
          window.location.reload();
        }),
      );
    }
  }

  ngOnDestroy(): void {
    this.serviceSubscriptions?.forEach(x => x?.unsubscribe());
  }
}
