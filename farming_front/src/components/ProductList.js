import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';

const API_URL = 'http://localhost:5000/api/products';
const AUTH_TOKEN = localStorage.getItem('authToken');

class ProductService {

    async getAllProducts() {
        const response = await axios.get(API_URL);
        return response.data;
    }

    async getProductById(id) {
        const response = await axios.get(`${API_URL}/${id}`);
        console.log(response.data, "yathesth");
        return response.data;
    }

    async createProduct(product) {
        const response = await axios.post(API_URL, product, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    }

    async updateProduct(id, product) {
        const response = await axios.put(`${API_URL}/${id}`, product, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        });
        return response.data;
    }

    async deleteProduct(id) {
        const response = await axios.delete(`${API_URL}/${id}`, {
            headers: {
                Authorization: `Bearer ${AUTH_TOKEN}`,
            },
        });
        return response.data;
    }
}
function ProductList() {
    const [products, setProducts] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        image: null,
    });

    const productService = new ProductService();

    const fetchProducts = async () => {
        try {
            const data = await productService.getAllProducts();
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const productData = new FormData();
        productData.append('name', formData.name);
        productData.append('description', formData.description);
        productData.append('price', formData.price);
        productData.append('image', formData.image);

        try {
            await axios.post(API_URL, productData, {
                headers: {
                    Authorization: `Bearer ${AUTH_TOKEN}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            setFormData({
                name: '',
                description: '',
                price: '',
                image: null,
            });
            fetchProducts(); // Refresh products after adding
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await productService.deleteProduct(id);
            fetchProducts(); // Refresh products after deleting
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <Container className="my-5">
            <h1 className="text-center mb-4">Product List</h1>
            <Form onSubmit={handleSubmit} className="mb-4">
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group as={Col} controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                            required
                        />
                    </Form.Group>
                </Row>
                <Form.Group controlId="description" className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                    Add Product
                </Button>
            </Form>
            <Row xs={1} md={2} lg={3} className="g-4 product-row">
                {products.map((product) => (
                    <Col key={product._id}>
                        <Card className="mb-3 shadow shadow-sm product-card">
                            <Card.Img
                                variant="top"
                                src={`http://127.0.0.1:5000/${product.image}`}
                                alt={product.name}
                                className="img-fluid" // Bootstrap's responsive image class
                            />
                            <Card.Body>
                                <Card.Title className="text-truncate">{product.name}</Card.Title>
                                <Card.Text className="text-truncate">{product.description}</Card.Text>
                                <Card.Text className="text-truncate">{product.price}</Card.Text>
                                <Button
                                    variant="danger"
                                    onClick={() => handleDelete(product._id)}
                                    className="w-100"
                                >
                                    Delete
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>

    );
}

export default ProductList;
