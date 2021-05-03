import React, { Component } from 'react';
import { useParams } from 'react-router';

class ProductDetailShowcase extends Component {
    state = {
        books: []
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchData(id);
    }


    fetchData = (id) => {
        fetch(`https://aurnab.herokuapp.com/dashboard/products/${id}`)
            .then((response) => response.json())
            .then(booksList => {
                this.setState({ books: booksList })
                console.log(id)
                console.log(this.state.books)
            });
    }


    render() {
        return (
            <main class="container" style={{ display: 'flex' }}>
                {/* <!-- Left Column / Headphones Image --> */}
                <div style={{ margin: '10px' }}>
                    <img style={{height:'50vh'}} src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                </div>
                {/* <!-- Right Column --> */}
                <div class="right-column">
                    {/* <!-- Product Description --> */}
                    <div class="product-description">
                        <span>{this.state.books.name}</span>
                        <h1>{this.state.books.title}</h1>
                        <p>{this.state.books.description}</p>
                    </div>
                    {/* <!-- Product Pricing --> */}
                    <div class="product-price">
                        <span>{this.state.books.price}$</span>
                        <a href="#" class="cart-btn">contact now</a>
                    </div>
                </div>
            </main>
        );
    }
}

export default ProductDetailShowcase;