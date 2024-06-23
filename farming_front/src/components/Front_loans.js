import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Front_loans.css'; // Import CSS file

function Front_loans() {
    const [loans, setLoans] = useState([]);
    const [formData, setFormData] = useState({
        amount: '',
        interestRate: '',
        duration: '',
    });

    useEffect(() => {
        axios.get('http://localhost:5000/api/loans')
            .then(response => {
                setLoans(response.data);
            })
            .catch(error => {
                console.error('Error fetching loans:', error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/loans', formData);
            const response = await axios.get('http://localhost:5000/api/loans');
            setLoans(response.data);
            setFormData({
                amount: '',
                interestRate: '',
                duration: '',
                name: '',
            });
            alert('Loan added successfully!');
        } catch (error) {
            console.error('Error adding loan:', error);
            alert('Error adding loan. Please try again.');
        }
    };

    return (
        <div className="container">
            <h1 className="title">Farmer Loans</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                    <label htmlFor="amount">Loan Amount:</label>
                    <input type="number" id="amount" name="amount" value={formData.amount} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="interestRate">Interest Rate:</label>
                    <input type="number" id="interestRate" name="interestRate" value={formData.interestRate} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="duration">Duration (in months):</label>
                    <input type="number" id="duration" name="duration" value={formData.duration} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="name">Bank Name:</label>
                    <input type="String" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>

            <h2 className="loan-list-title">Loan List</h2>
            <table className="loan-list">
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Interest Rate</th>
                        <th>Duration (months)</th>
                        <th>Bank Name</th>
                    </tr>
                </thead>
                <tbody>
                    {loans.map(loan => (
                        <tr key={loan._id}>
                            <td>{loan.amount}</td>
                            <td>{loan.interestRate}</td>
                            <td>{loan.duration}</td>
                            <td>{loan.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Front_loans;
