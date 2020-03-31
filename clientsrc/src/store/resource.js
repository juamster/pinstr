import { LightPath } from "@bcwdev/quickvue";
export const baseURL = window.location.host.includes("localhost")
  ? "http://localhost:3000"
  : "/";
export const $resource = new LightPath({
  baseURL,
  timeout: 999999
});

export function ConfigureResource(appInstance) {
  $resource.onError = err => {
    appInstance.loading = false;
    let message = err.message;
    if (err.body && err.body.message) {
      message = err.body.message;
    }
    appInstance.$toast.error(message);
  };
  $resource.onComplete = _ => {
    appInstance.loading = false;
  };
  $resource.onRequest = _ => {
    appInstance.loading = true;
  };
  $resource.defaultHeaders.Authorization = appInstance.$auth.bearer;


}