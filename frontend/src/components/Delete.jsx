import React from 'react'
import axios from 'axios'
import '../App.css'

const Delete = () => {
  const handleDelete = async (e) => {
    e.preventDefault()
    const id = e.target.id.value;
    await axios.delete(`https://user-registration-system-93v6.onrender.com/users/${id}`)
    alert('Product deleted successfully')
  }

  return (
    <div className="container">
      <h1>Delete Product</h1>
      <form onSubmit={handleDelete}>
        <label>Product ID:</label>
        <input type="text" placeholder="Enter Product ID" name="id" />
        <button type="submit">Delete</button>
      </form>
    </div>
  )
}

export default Delete
