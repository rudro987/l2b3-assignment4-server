import { ProductsModel, TProducts } from './products.interface'
import { Schema, model } from 'mongoose'

//main schema

const productsSchema = new Schema<TProducts>({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  description: {
    type: String,
    required: [true, 'Product Description is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  brand: {
    type: String,
    enum: {
        values: ['MK', 'Ducky', 'Varmilo', 'Keychron', 'Pulsar', 'Leopold', 'Realforce', 'Lamzu'],
        message: '{VALUE} is not a valid Brand',
    },
    required: [true, 'Product brand is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
  },
  quantity: {
    type: Number,
    required: [true, 'Quantity is required'],
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
})

// Query Middleware
productsSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
  });
  
  productsSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } });
    next();
  });

  //creating a custom static method
  productsSchema.statics.isUserExists = async function (id: string) {
    const existingProduct = await Products.findOne({ id });
    return existingProduct;
  };

export const Products = model<TProducts, ProductsModel>('Product', productsSchema)
