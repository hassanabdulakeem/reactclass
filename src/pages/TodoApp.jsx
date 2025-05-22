import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoApp() {
  // State for todos and form data
  const [todos, setTodos] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    phoneNumber: ''
  });
  const [errors, setErrors] = useState({});

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Validate form fields
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      const newTodo = {
        id: Date.now(),
        ...formData
      };
      
      setTodos([...todos, newTodo]);
      setFormData({ name: '', description: '', phoneNumber: '' });
      toast.success('Todo added successfully!');
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    toast.info('Todo deleted!');
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>
      
      {/* Todo Form */}
      <form onSubmit={handleSubmit} className="todo-form">
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter task name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Enter task description"
          />
          {errors.description && <span className="error">{errors.description}</span>}
        </div>
        
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="Enter phone number"
            maxLength="10"
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>
        
        <button type="submit" className="submit-btn">
          Add Todo
        </button>
      </form>
      
      {/* Todo List */}
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one!</p>
        ) : (
          <ul>
            {todos.map(todo => (
              <li key={todo.id} className="todo-item">
                <div className="todo-content">
                  <h3>{todo.name}</h3>
                  <p>{todo.description}</p>
                  <p>Phone: {todo.phoneNumber}</p>
                </div>
                <button 
                  onClick={() => deleteTodo(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TodoApp;