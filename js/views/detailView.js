
import Marionette from 'backbone.marionette';

import detailTemplate from '../../templates/detail-list.handlebars';
import Radio from 'backbone.radio';

var myChannel = Radio.channel('Detail');



var detailView = Marionette.View.extend({


    template: detailTemplate,

    intialize () {
    	myChannel.on('show', function (model) {
    		this.model = model;
    		this.render();
    	});
    	
    },

});


export default detailView;
