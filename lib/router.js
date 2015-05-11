Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    // each yield going to different templates
    'books':{to:'books'},
    'categories':{to:'categories'}
  }
});

Router.map(function(){
    this.route('/','layout');
    this.route('books', {
        layoutTemplate:'layout',
        path:'/:name',
        data: function() {
            console.log(this.params.name);
            Session.set('category',this.params.name);
            },
        template:'layout'
    });
});