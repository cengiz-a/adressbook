import Marionette from 'backbone.marionette';
import AddNewView from './addNewView.js';
import DetailView from './detailView.js';
import ListView from './listview.js';
import rootViewTemplate from '../../templates/rootViewTemplate.handlebars';
import listModel from '../models/listModel';
import model from '../models/model';
import List from '../collections/collection';



var collectionList = new List([
   /*{
        id: 0,
        name: 'Cengiz',
        firstName: 'Han',
        email: 'a.c.cengizhan@me.com',
        job: 'Keeping Calm',
    },

    {
        id: 2,
        name: 'Peter',
        firstName: 'Maffffai',
        email: 'a.c.cengizhan@me.com',
        job: 'Keeping Calm',
    }*/
]);



var RootView = Marionette.View.extend({

    template: rootViewTemplate,

    regions: {
        list: '#list > .listing',
        details: '#details',
        addNew: '#addNew'
    },

    initialize: function () {
        this.render();
    },

    onRender: function() {
        console.log(collectionList);
        //this.showChildView('list', new ListView({model: model.set({itemName: "example"})}));
        this.showChildView('list', new ListView({collection: collectionList}));
        this.showChildView('details', new DetailView({model: model.set({name: "Cengiz", firstName: "Han", email: "a.c.cengizhan@me.com", job: "cool sein" })}));
        this.showChildView('addNew', new AddNewView({model: listModel}));
    }
});



export default RootView;