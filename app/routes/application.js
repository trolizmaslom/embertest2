import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  allData: service('all-data'),
  model(){
    return this.allData.getAllPost();
  }
});
