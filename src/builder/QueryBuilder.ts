import { FilterQuery, Query } from 'mongoose'

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>
  public query: Record<string, unknown>

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery
    this.query = query
  }

  search(searchableFields: string[]) {
    const searchTerm = this?.query?.searchTerm

    console.log(searchTerm)

    if (searchTerm) {
      this.modelQuery = this.modelQuery.find({
        $or: searchableFields.map(
          (field) =>
            ({
              [field]: { $regex: searchTerm, $options: 'i' },
            }) as FilterQuery<T>,
        ),
      })
    }

    return this
  }

  filter() {
    const queryObj = { ...this.query }
    
    console.log('filter: ', queryObj);
  
    // List of fields to exclude from query
    const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields']
    excludeFields.forEach((el) => delete queryObj[el])
  
    // Create a new object to store modified query parameters
    const advancedFilters: { [key: string]: any } = {}
  
    // Iterate over the queryObj to modify range-based filters
    Object.keys(queryObj).forEach((key) => {
      if (key.includes('min')) {
        const field = key.replace('min', '').toLowerCase()
        if (!advancedFilters[field]) {
          advancedFilters[field] = {}
        }
        advancedFilters[field]['$gte'] = queryObj[key]
      } else if (key.includes('max')) {
        const field = key.replace('max', '').toLowerCase()
        if (!advancedFilters[field]) {
          advancedFilters[field] = {}
        }
        advancedFilters[field]['$lte'] = queryObj[key]
      } else {
        // Directly copy other fields without modification
        advancedFilters[key] = queryObj[key]
      }
    })
  
    // Use the advancedFilters object for filtering in MongoDB
    this.modelQuery = this.modelQuery.find(advancedFilters as FilterQuery<T>)
  
    return this
  }
  

  sort() {
    const sort =
      (this.query.sort as string)?.split(',').join(' ') || '-createdAt'
    this.modelQuery = this.modelQuery.sort(sort as string)
    return this
  }
  paginate() {
    const page = Number(this.query.page)
    const limit = Number(this.query.limit)
    const skip = (page - 1) * limit

    this.modelQuery = this.modelQuery.skip(skip).limit(limit)

    return this
  }

  fields() {
    const fields =
      (this.query.fields as string)?.split(',')?.join(' ') || '-__v'

    this.modelQuery = this.modelQuery.select(fields)
    return this
  }
}

export default QueryBuilder
