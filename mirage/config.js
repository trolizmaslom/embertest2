  export default function() {
    this.timing = 400;
    this.get('/posts/:id');
    this.del('/posts/:id');
    this.patch('/posts/:id');
    this.post('/posts', (schema, request) => {
      return schema.posts.create(request);
    });
    this.get('/posts', (schema) => {
      return schema.posts.all();
    });

  }

