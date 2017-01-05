import Marionette from 'backbone.marionette';

import ListItemView from './ListItemView.js';

import List from '../collections/collection';



var collectionList = new List();



var listView = Marionette.CollectionView.extend({


    tagName: 'ul',
    className: 'list',


    collection: collectionList,

    childView: ListItemView

});



export default listView;