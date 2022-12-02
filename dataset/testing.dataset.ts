import mongoose from 'mongoose';
import { User, UserSchema } from '../src/schemas/user.schema';
import { Product, ProductSchema } from '../src/schemas/product.schema';

export async function db_connect() {
  await mongoose
    .connect('mongodb://localhost/nest')
    .then(() => console.log('Connected to mongo!'))
    .catch((err) => {
      console.error('Caught error while connecting to mongo:', err);
      throw err;
    });
}

export async function db_clear() {
  await userModel.deleteMany();
  await productModel.deleteMany();
}

const userModel = mongoose.model(User.name, UserSchema);
const productModel = mongoose.model(Product.name, ProductSchema);

export const testProducts = [
  new productModel({
    name: 'Test product 1',
    manufacturer: 'scriptSQD',
    width: 420,
    height: 360,
    depth: 69,
    country_of_origin: 'Belarus',
  }),
  new productModel({
    name: 'Test product 2',
    manufacturer: 'Test manufacturer',
    width: 106,
    height: 92,
    depth: 38,
    country_of_origin: 'Testland',
  }),
  new productModel({
    name: 'Keyboard',
    manufacturer: 'Razer',
    width: 45,
    height: 18,
    depth: 2,
    country_of_origin: 'USA',
  }),
];

export const testUsers = [
  new userModel({
    username: 'scriptSQD',
    password: '123456',
    email: 'scriipt.fun@gmail.com',
    phone: '+1(23)456-78-90',
    site: 'scriptsqd.dev',
  }),
  new userModel({
    username: 'FryNn',
    password: '123456',
    email: 'sergey.matus.off@mail.ru',
    phone: '+1(23)456-78-90',
    site: 'github.com/frynn',
  }),
  new userModel({
    username: 'Andy Chevich',
    password: '123456',
    email: 'andrey.rogachevich@azati.com',
    phone: '+1(23)456-78-90',
    site: 'github.com/chevich123',
  }),
];
