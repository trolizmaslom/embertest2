import Controller from '@ember/controller';
export default Controller.extend({
  showModal: false,
  actions: {
    setStatusModal(bool){
      this.set('showModal', bool);
    }
  }
});
