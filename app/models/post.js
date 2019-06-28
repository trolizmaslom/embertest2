import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  content: DS.attr('string'),
  date: DS.attr('string'),
  active: DS.attr('boolean')
});
