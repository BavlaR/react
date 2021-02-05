import React from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterableProductTable extends React.Component {
   state = {
      filterText: '',
      inStockOnly: false,
   };

   handleFilterTextChange = e => {
      this.setState({
         filterText: e.target.value,
      });
   };

   handleInStockChange = e => {
      this.setState({
         inStockOnly: e.target.checked,
      });
   };

   render() {
      const { filterText, inStockOnly } = this.state;
      return (
         <div>
            <SearchBar
               filterText={filterText}
               inStockOnly={inStockOnly}
               onFilterTextChange={this.handleFilterTextChange}
               onInStockChange={this.handleInStockChange}
            />
            <ProductTable
               products={this.props.products}
               filterText={filterText}
               inStockOnly={inStockOnly}
            />
         </div>
      );
   }
}
export default FilterableProductTable;
