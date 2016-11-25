

import $ from 'jquery';
import View from './js/views/addNewView.js';
import Model from './js/models/model.js';


var view1 = new View ({
    model: new Model,
});

$('body').append(view1.$el);


