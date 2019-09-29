/**
 * Created by Echonessy on 2019/8/23.
 */
import Vue from 'vue'

export const Bus = new Vue()

export default Vue => {
  const bus = Bus;
  Vue.bus = bus;
  Vue.prototype.$bus = bus
}
