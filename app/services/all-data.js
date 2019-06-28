import Service from '@ember/service';
import { inject as service } from '@ember/service';
export default Service.extend({
  store: service('store'),
  getAllPost(){
    return this.store.findAll('post');
  },
  getPostById(id){
    return this.store.find('post', id);
  },
  saveNewPost(post){
    let poster = this.store.createRecord('post', post);
    poster.save();
  },
  activatePost(id){
    this.store.findRecord('post', id).then((post) => {
      post.set('active', true);
      post.save();
    })
  },
  deactivatePost(id){
    this.store.findRecord('post', id).then((post) => {
      post.set('active', false);
      post.save();
    })
  },
  deletePost(id){
    this.store.findRecord('post', id, { backgroundReload: false }).then((post) => {
      post.destroyRecord();
    })
  }
});
