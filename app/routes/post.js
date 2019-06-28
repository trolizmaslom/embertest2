import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default Route.extend({
  allData: service('all-data'),
  model(post){
	
    return  this.allData.getPostById(post.id);
  },
actions:{
    editPost(data){
      let grabbed = {
        title: data.title,
        description: data.description,
        author: data.author,
        content:data.content,
        date:data.date,
      }
      this.allData.updateePost(data.id, grabbed)
    }
  }
});


  
