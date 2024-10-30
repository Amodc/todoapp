import React, {useState} from 'react'

function Login() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z]/;
    const passwordRegex = /^(?=.*[0-9](?=.*[!@#$%^&*])[A-Za-z\d@$!%^&*?]{8,20})/;

    
    if (formData.email == '') {
      newErrors.email = 'Email is required';
    }
    else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Email is not valid';
    }

    if (formData.password =='') {
      newErrors.password = 'Password is required';
    }
    else if(!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be 8-20 characters long, contain at least one number and one special characters';
    }

    if (formData.confirmPassword == '') {
      newErrors.confirmPassword = 'Confirm Passwod is required';
    }
    else if (!formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwod must match';
    }

    setErrors(newErrors);
    //return Object.Keys(newErrors).length === 0;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Form submitted:', formData);
    setSubmitted(true);

    if (validateForm()) {
      console.log('Form submitted:', formData);

      setFormData({
        email: '',
        password: '',
        confirmPassword: '',
      });

      setErrors({});
      setSubmitted(false);
    }
  };

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  const [cpassword, setCPassword] = useState('');
  const [showCPassword, setShowCPassword] = useState(false);

  const handleToggleCPassword = () => {
    setShowCPassword(!showCPassword);
  }

  return (
    <div>
      <div className="mt-5 mb-5">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {submitted && errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className="mb-3 form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <div className="input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              className="form-control border-end-0"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type='button' onClick={handleTogglePassword} className='border rounded-end pe-3 text-primary'>
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {submitted && errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        
        <div className="mb-3 form-group">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <div className="input-group">
            <input
              type={showCPassword ? 'text' : 'password'}
              className="form-control border-end-0"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            <button type='button' onClick={handleToggleCPassword} className='border rounded-end pe-3 text-primary'>
              {showCPassword ? 'Hide' : 'Show'}
            </button>
          </div>
          {submitted && errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword}</span>}
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  )
}

export default Login
