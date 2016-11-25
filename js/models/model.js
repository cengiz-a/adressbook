import backbone from 'backbone';


const model = backbone.Model.extend( {

     defaults: {
        name: 'doe',
        firstName: 'john',
        email: 'john@doe.com',
        job: 'dev'
    }
});
export default model;
