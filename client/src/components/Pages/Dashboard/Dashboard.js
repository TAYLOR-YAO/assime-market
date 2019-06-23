import React, {Component} from 'react';


const filters = [
  {id: 'name', title: 'Name', type: 'string'},
  {id: 'color', title: 'Color', type: 'choice', choices: ['blue', 'orange']},
  {id: 'height', title: 'Height', type: 'choice', choices: ['tiny', 'small', 'big', 'huge']},
  {id: 'width', title: 'Width', type: 'choice', choices: ['tiny', 'small', 'big', 'huge']},
]


class Example extends Component {
 state = {
   color: ""
};
  
componentDidMount(){

  let data= filters.filter(item => {
    return item.id === "color";
});
console.log(data)

  }

 


  // this.setState(state => {
  //   const list = filters.filter(item => item.key !== key);
  //   console.log(list)

  //   return {
  //     list,
  //   };
  // });

  render() {
    return <div>
      <h1>Filters</h1>





    </div>
    
  }
}











// const filters = [
//   {id: 'name', title: 'Name', type: 'string'},
//   {id: 'color', title: 'Color', type: 'choice', choices: ['blue', 'orange']},
//   {id: 'height', title: 'Height', type: 'choice', choices: ['tiny', 'small', 'big', 'huge']},
//   {id: 'width', title: 'Width', type: 'choice', choices: ['tiny', 'small', 'big', 'huge']},
// ]

// const filterComponents = {
//   string: ({filter, onChange, value}) => <input value={value || ''} onInput={(e) => onChange(filter.id, e.target.value)} />,
//   choice: ({filter, onChange, value}) => (
//     <select value={value || ''} onInput={(e) => onChange(filter.id, e.target.value)} size={1 + filter.choices.length}>
//       <option value="">(none)</option>
//       {filter.choices.map((c) => <option value={c} key={c}>{c}</option>)}
//      </select>
//    ),
// };


// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {filters: {}};
//     this.onChangeFilter = this.onChangeFilter.bind(this);
//   }
//   onChangeFilter(filterId, value) {
//     const newFilterState = Object.assign({}, this.state.filters, {[filterId]: value || undefined});
//     this.setState({filters: newFilterState});
//   }
//   renderFilter(f) {
//     const Component = filterComponents[f.type];
//     return (
//       <div key={f.id}>
//         <b>{f.title}</b>
//         <Component filter={f} value={this.state.filters[f.id]} onChange={this.onChangeFilter} />
//       </div>
//     );
//   }
//   render() {
//     return <div style={{marginTop:"200px", marginBottom:"200px"}}>
//     <table >
//       <tbody>
//         <tr>
//           <td>{filters.map(f => this.renderFilter(f))}</td>
//           <td>Filters: {JSON.stringify(this.state.filters)}</td>
//         </tr>
//       </tbody>
//     </table>;
//     </div>
//   }
// }



export default Example;