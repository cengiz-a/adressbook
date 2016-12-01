
import backbone from 'backbone';


var model = backbone.Model.extend({
    defaults: {
        name: '',
        firstName: '',
        email: '',
        job: ''
    }
});

var myModel = new model();
export default myModel;

