import Marionette from 'backbone.marionette';

import ListItemView from './ListItemView.js';

import List from '../collections/collection';



var collectionList = new List(/*[
    {
     id: "12",
     name: 'Cengiz',
     firstName: 'Han',
     email: 'a.c.cengizhan@me.com',
     job: 'Keeping Calm',
     },

     {
     id: "1",
     name: 'Peter',
     firstName: 'Mann',
     email: 'a.c.cengizhan@me.com',
     job: 'Keeping Calm',
     }
]*/);



var listView = Marionette.CollectionView.extend({

    tagName: 'ul',
    className: 'list',


    collection: collectionList,

    childView: ListItemView,

    initialize() {
        this.render();
    },



});



export default listView;