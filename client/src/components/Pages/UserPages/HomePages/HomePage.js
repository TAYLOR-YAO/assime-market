import React, {Component} from "react";
import {connect} from "react-redux";
import Select from 'react-select';
import axios from "axios";
import "./HomePage.css";
import ProductLinsting from "../../../features/ProductListing";
import { logoutUser } from "../../../Utils/authActions";
const customStyles = {
    input: styles => {
      return {
        ...styles,
        height: '1.6em'
    };
  }
}

class HomePage extends Component {
    state={
        typeOption: null,
        selectedType: "Search Item",
        categoryOption: null,
        selectedCategory: "Search by category",
        companyOption: null,
        selectedCompany: "Search by Company",
        company:"",
        products:[],
        generalProducts:[],
        categories:[],
        companies:[],
        types:[]
    }

    componentDidMount (){
        axios.get("api/displayitems").then(response=>{
            
            this.setState({
                // products: response.data.sort(function() { return 0.5 - Math.random() }),
                products: response.data,
                generalProducts: response.data

            })
            
        });
    }

    // =================Logout==============================
    // onLogoutClick = e => {
    //     e.preventDefault();
    //     // this.props.logoutUser();
    //     this.props.logoutUser();

    // }
    
    //  processOrder = event =>{
    //     const order = this.props.cart.map(item=> {
    //         item.customerID = currentUser();
    //         return item
    //     })
    //     axios.post("api/order", order).then(response=>{
    //     }).catch(err=>{
    //         console.log("ERR: ",err.message)
    //     })
    // }

    // ================Shop By type =========================
    handleTypeChange = (typeOption) => {
        let filteredIteme = this.state.products.filter(product => {
            return product.type === typeOption.value;
        })

        this.setState({
            products: filteredIteme,
            selectedType: typeOption.value
        })
    }
    // =============== Visite specific Store ================
    handleCompanyChange = (companyOption) => {
        // alert("Clicked !!")
        let filteredCompany= this.state.products.filter(product => {
            // console.log(product)
            return product.company === companyOption.value;
        })

        this.setState({
            products: filteredCompany,
            selectedCompany: companyOption.value
        })
    }

    // =============== Shop by Category ================    
    handleCategoryChange = (categoryOption) => {
        let filteredCategory = this.state.products.filter(product => {
            return product.category === categoryOption.value;
        })
        this.setState({
            products: filteredCategory,
            selectedCategory: categoryOption.value
        })
    }

    clearFister =(event)=>{
        event.preventDefault()
        axios.get("api/displayitems").then(response=>{
            this.setState(
                {
                    products: response.data.sort(function() { return 0.5 - Math.random() }),
                    generalProducts: response.data

                }
            )
            
        });
    }
    
    render(){

        const categories = [];
            const companies = [];
            const types = [];
            this.state.products.forEach(res => {
                categories.push({
                    label: res.category,
                    value:res.category
                });
                companies.push({
                    label: res.company,
                    value:res.company
                });
                types.push({
                    label: res.type,
                    value:res.type
                });
            });

            categories.reduceRight((acc, obj, i) => {
                acc[obj.label]? categories.splice(i, 1) : acc[obj.label] = true;
                return acc;
            }, Object.create(null));

            companies.reduceRight((acc, obj, i) => {
            acc[obj.label]? companies.splice(i, 1) : acc[obj.label] = true;
            return acc;
            }, Object.create(null));

            types.reduceRight((acc, obj, i) => {
                acc[obj.label]? types.splice(i, 1) : acc[obj.label] = true;
                return acc;
            }, Object.create(null));
            const cartNumber = this.props.cart.length
            
        return(
            <div style={{marginTop:"100px"}}>
                <div id="main">
                    <aside style={{textAlign:"center"}}>
                        <div style={{width:"100%"}}>
                            <div className="bag-wrapper">
                                <i className="fa fa-shopping-bag" aria-hidden="true"><span>({cartNumber})</span></i>

                            </div>
        
                            <div className="clear-wrapper">
                                <button onClick={this.clearFister}>Clear Filter</button>
                            </div>
                        </div>
                        <div className="filter-wrapper">
                            <br/>
                            <label>Shop By Categories</label>
                            <Select
                                styles={customStyles}
                                placeholder={this.state.selectedCategory}
                                value={this.state.categoryOption}
                                onChange={this.handleCategoryChange}
                                options={categories}
                            />
                
                            <label>Select company</label>
                            <Select
                                styles={customStyles}
                                placeholder={this.state.selectedCompany}
                                value={this.state.companyOption}
                                onChange={this.handleCompanyChange}
                                options={companies}
                            />
                            <label>Shop by Item</label>
                            <Select
                                styles={customStyles}
                                placeholder={this.state.selectedType}
                                value={this.state.typeOption}
                                onChange={this.handleTypeChange}
                                options={types}
                            />
                        </div>
                    </aside>
                    <article>
                    <ProductLinsting 
                        products ={this.state.products}
                        displayComoanyArticles={this.displayComoanyArticles}
                    />
                    <ProductLinsting 
                        products ={this.state.generalProducts}
                        displayComoanyArticles={this.displayComoanyArticles}
                    />
                    </article>
                </div> 
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        cart:state.cart,
        auth: state.auth
    }
}
function mapDispatchToProps(dispatch){
    return{
        clearCarts:(item) =>{
            dispatch({type: "CLEAR_CARTS"})
        },
        logoutUser: logoutUser().isRequired
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


