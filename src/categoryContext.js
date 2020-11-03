import React from 'react';

const CategoryContext = React.createContext();
const CategoryProvider = CategoryContext.Provider;
const CategoryConsumer = CategoryContext.Consumer;

export {CategoryProvider, CategoryConsumer};
export default CategoryContext;