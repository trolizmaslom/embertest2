import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  model(){
    return this.store.create('formdata')
  },
  allData: service('all-data'),
  actions: {
    someAction(){
      let store = this.allData;
      switch (this.$('#selectedAction').val()) {
        case 'activate':
          this.$('input.itemcheck:checked').each(function(){
            store.activatePost(this.value)
          });
        break;
        case 'deactivate':
          this.$('input.itemcheck:checked').each(function(){
            store.deactivatePost(this.value)
          });
          break;
        case 'delete':
          this.$('input.itemcheck:checked').each(function(){
            store.deletePost(this.value)
          });
          break;
        default:
      }

    }
  }
});
