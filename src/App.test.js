import { render, screen } from '@testing-library/react';
import App from './App';
import {
  updateInputChange,
  insertNewProduct,
  removeProduct,
  setEditProduct,
  updateEditInputChange,
  makeUpdateProduct,
  updateProductList,
} from './ProductReducerSlice';

test('ProductReducerSlice actions', () => {
  it('should create an action to update input change', () => {
    const expectedAction = {
      type: 'productSlice/updateInputChange',
      payload: {
        value: 'new value',
        name: 'product_name',
      },
    };
    expect(updateInputChange('new value', 'product_name')).toEqual(expectedAction);
  });

  it('should create an action to insert a new product', () => {
    const expectedAction = {
      type: 'productSlice/insertNewProduct',
    };
    expect(insertNewProduct()).toEqual(expectedAction);
  });

  it('should create an action to remove a product', () => {
    const expectedAction = {
      type: 'productSlice/removeProduct',
      payload: {
        id: 1,
      },
    };
    expect(removeProduct(1)).toEqual(expectedAction);
  });

  it('should create an action to set edit product', () => {
    const expectedAction = {
      type: 'productSlice/setEditProduct',
      payload: {
        id: 2,
      },
    };
    expect(setEditProduct(2)).toEqual(expectedAction);
  });

  it('should create an action to update edit input change', () => {
    const expectedAction = {
      type: 'productSlice/updateEditInputChange',
      payload: {
        value: 'new value',
        name: 'product_name',
      },
    };
    expect(updateEditInputChange('new value', 'product_name')).toEqual(expectedAction);
  });

  it('should create an action to make an update to a product', () => {
    const expectedAction = {
      type: 'productSlice/makeUpdateProduct',
      payload: {
        id: 3,
      },
    };
    expect(makeUpdateProduct(3)).toEqual(expectedAction);
  });

  it('should create an action to update the product list', () => {
    const expectedAction = {
      type: 'productSlice/updateProductList',
      payload: {
        list: [
          { product_name: 'Product 1' },
          { product_name: 'Product 2' },
        ],
      },
    };
    expect(updateProductList([
      { product_name: 'Product 1' },
      { product_name: 'Product 2' },
    ])).toEqual(expectedAction);
  });

  
});