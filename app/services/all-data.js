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
 updateePost(id, data){
    this.store.findRecord('post', id).then((post) => {
      post.set('title', data.title);
post.set('description', data.description);
post.set('author', data.author);
post.set('content', data.content);
post.set('date', data.date);
      post.save();
    })
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
