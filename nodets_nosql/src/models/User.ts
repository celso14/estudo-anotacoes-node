import { Schema,Model, model, connection } from 'mongoose';

type UserType = {
  email: string, age: number, interests: Array<string>, name: {
    firstName: string, lastName: string
  }
};

const schema = new Schema<UserType>({
  email: {type: String, required: true},
  age: {type: Number, required: true},
  interests: Array<string>,
  name: {
    firstName: {type: String, required: true},
    lastname: String
  }
});

//export default model<Usertype>(modelName, schema);
const modelName: string = 'User';
const userModel = connection && connection.models[modelName] ? (connection.models[modelName] as Model<UserType>) : model<UserType>(modelName, schema)

export default userModel;