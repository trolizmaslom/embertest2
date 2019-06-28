import { Factory } from 'ember-cli-mirage';
export default Factory.extend({
  title(i){
    return `Post Name ${i}`;
  },
  date(){
    let min = 1980;
    let max = 2019;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  description(){
    return "some short description";
  },
  author: 'Some Author',
  content: 'Some Author somecontent  and bla bla bla',
  active(){
    return  Math.random() > 0.5;
  }
});
