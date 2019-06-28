import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
  model(){
    return this.store.createRecord('post');
  },
  allData: service('all-data'),
  actions:{
    saveNewPost(){
      this.allData.saveNewPost({
        title: this.get('model.title'),
        description: this.get('model.description'),
        author: this.get('model.author'),
        content: this.get('model.content'),
        date: this.get('model.date'),
        active: false
      })
    }
  }
});
