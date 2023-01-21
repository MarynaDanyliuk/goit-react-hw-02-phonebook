import React from 'react';
// import PropTypes from 'prop-types';
// import css from './ContactsList.module.css';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <div>
      <label>
        Fined contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </div>
  );
};

// ____________________________________________
// export class Filter extends React.Component {
//   state = {
//     filter: '',
//   };

//   handleFilter = event => {

//     this.setState({
//       filter: event.currentTarget.value,
//     });

//     this.props.onChange(this.state.filter);
//   };

//   render() {
//     return (
//       <div>
//         <label>
//           Fined contacts by name
//           <input
//             type="text"
//             name="filter"
//             value={this.state.filter}
//             onChange={this.handleFilter}
//           />
//         </label>
//       </div>
//     );
//   }
// }
