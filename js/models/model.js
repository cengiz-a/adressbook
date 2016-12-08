
import backbone from 'backbone';


const myModel = backbone.Model.extend({
    default: {
        id: '',
        name: '',
        firstName: '',
        email: '',
        job: '',
    }
});



export default myModel;

