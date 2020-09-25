import Vue, { VueConstructor } from 'vue';
import { AxiosInstance } from 'axios';
import lodash from 'lodash';
declare global {
  interface Window {
    axios: AxiosInstance
  }
}
// declare module 'lodash' {
//   const _: any;
//   export default _;
// }
declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
  }
  interface VueConstructor {
    $axios: AxiosInstance
  }
}
