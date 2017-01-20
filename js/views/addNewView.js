import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';
import $ from 'jquery';
import Model from '../models/model';
import List from './CollectionView';

var  addNewView = Marionette.View.extend({

    template: AddingTemplate,

    ui: {
      add: '#add'
    },

    events: {
        'click @ui.add': 'add'
    },

    add (e, model) {

        e.preventDefault();

        model = new Model();

        var input = document.getElementById('form');

        var name =      $('input#name').val();
        var firstName = $('input#firstName').val();
        var tel =       $('input#tel').val();
        var ranking =   $('input#ranking').val();
        var email =     $('input#email').val();
        var job =       $('input#job').val();

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(name && firstName && tel && re.test(email)===true) {
            model.set({firstName: firstName});
            model.set({name: name});
            model.set({tel: tel});
            model.set({ranking: ranking});
            model.set({email: email});
            model.set({job: job});

            List.collection.add(model);

            input.reset();
        }else{
            alert("Alter, füll richtig aus!");

        }



    },

    initialize() {
        this.render();
    },

});

export default addNewView;

