# Class 04

## Data Modeling

### What?
   - Taking real world data and finding a correlation in a computer langauage.
        - Objects: Representing multiple types of differing data.
        - Array: Representing similar type of data.
        - String: Great for representing organic language.
        - Number: Representing things that require arithmetic operations
        - Boolean: Things with binary state.
        
        
  - Starts conceptually => Stated logic.
  - The output of data modeling which is known as a schema.
  
### Core behaviors of modeling
 - 4 behaviors of our data:
    - Create
    - Read
    - Update
    - Delete
    
### Intefacing with our data
    - What is our API? (application programming intergace)
    - The specific mans in which data models interact with our persistant layer.
        - SQL db, mongoDB etc.
    - Normalization and Validation
        - Shaping data so that it's consistant and scalable, and knowing when to update or remove stale data.
        
  
Interface:
```js
let categories = new Category();
categories.create({name: test1}) //Creaate
categories.get() // Read
categeories.update(1, {name: test2}) //update
categories.delete(1); // Delete
```

Our Persistant Layer
```js
class categories {
  constructor(schema) {
    this.schema = schema;
    this.data = [];
  }

  delete()
  get()
  update()
  create()
}
```












