
import backbone from 'backbone';


const myModel = backbone.Model.extend({
    default: {
        firstName: '',
        name: '',
        email: '',
        job: '',
    }
});



export default myModel;

