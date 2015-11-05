### Invoiced is an invoicing application built using React, Node, Socket.io and Redux ###

### Getting Started ###

```
> git clone https://github.com/invoice-creator/invoiced
> cd invoiced
> npm install

```

### Server Commands ###

To run server:

```
> cd server
> npm run start

```

To run server side tests:

```
> cd server
> npm run test

```

To watch for changes in server side tests:

```
> cd server 
> npm run test:watch

```

### Client Commands ###

To run client side tests:

```
> cd client
> npm run test

```

To watch for changes in client side tests:

```
> cd client 
> npm run test:watch

```

### Application immutable state tree: ###

![alt tag](assets/invoice-redux-state-tree.png)

### Immutable State Tree for product line items: ###

![alt tag](assets/product-line-items.png)

### When product line items are added to an invoice the state should reflect the changes and the items should no longer be listed in the products section, but instead on the actual invoice: ###

![alt tag](assets/invoiced-products.png)