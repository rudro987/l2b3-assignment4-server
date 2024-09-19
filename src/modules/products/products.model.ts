import { Brands } from './product.constant'
import { ProductsModel, TProducts } from './products.interface'
import { Schema, model } from 'mongoose'

//main schema

const productsSchema = new Schema<TProducts, ProductsModel>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      maxlength: [50, 'Name can not be more than 50 characters'],
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
      enum: Brands,
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
    },
  },
  {
    timestamps: true,
  },
)

// Query Middleware
productsSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

productsSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } })
  next()
})

//creating a custom static method
productsSchema.statics.isProductExists = async function (name: string) {
  const existingProduct = await Products.findOne({ name })
  return existingProduct
}

export const Products = model<TProducts, ProductsModel>(
  'Product',
  productsSchema,
)
