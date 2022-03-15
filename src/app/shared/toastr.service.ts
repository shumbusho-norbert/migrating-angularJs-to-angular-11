import { Injectable, InjectionToken } from '@angular/core';

// declare let toastr: any;

// @Injectable({
//   providedIn: 'root'
// })
// export class ToastrService {
//   success(message: string, title?: string) {
//     toastr.success(message, title);
//   }
// }

export let TOASTR_TOKEN = new InjectionToken<Toaster>('toastr');

export interface Toaster {
  success(msg: string, title: string): void;
  info(msg: string, title: string): void;
  warning(msg: string, title: string): void;
  error(msg: string, title: string): void;
}