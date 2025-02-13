import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { AndroidAnimation, AndroidBottomSheet, AndroidSystemBrowserOptions, AndroidViewStyle, DismissStyle, InAppBrowser, iOSAnimation, iOSSystemBrowserOptions, iOSViewStyle, SystemBrowserOptions } from '@capacitor/inappbrowser';  

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor() {}

  /**
	 *  open a URL in a modal using the system browser of new ‘InAppBrowser’ plugin from capacitor
	 *
	 * @public
	 * @returns
	 */
	public async openIonicDocs(): Promise<void> {
		const bottomSheetOptions: AndroidBottomSheet = {
			height: 0.7,
			isFixed: true
		};

		const androidOptions: AndroidSystemBrowserOptions = {
			showTitle: false,
			hideToolbarOnScroll: false,
			viewStyle: AndroidViewStyle.BOTTOM_SHEET,
			bottomSheetOptions: bottomSheetOptions,
			startAnimation: AndroidAnimation.FADE_IN,
			exitAnimation: AndroidAnimation.FADE_OUT
		};

		const iosOptions: iOSSystemBrowserOptions = {
			closeButtonText: DismissStyle.CANCEL,
			viewStyle: iOSViewStyle.PAGE_SHEET,
			animationEffect: iOSAnimation.COVER_VERTICAL,
			enableBarsCollapsing: false,
			enableReadersMode: false
		};

		const options: SystemBrowserOptions = {
			android: androidOptions,
			iOS: iosOptions
		};

		await InAppBrowser.openInSystemBrowser({
			url: 'https://ionicframework.com/docs/components',
			options: options
		});

    await InAppBrowser.addListener('browserClosed', () => {
      console.log("browser was closed.");
    });
	} 
}
