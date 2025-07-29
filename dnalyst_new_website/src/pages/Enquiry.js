import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { FaMobileAlt, FaMapMarkerAlt, FaChevronUp, FaEnvelope, FaYoutube } from 'react-icons/fa';
import './Enquiry.css';

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    location: '',
    coupon_code: '',
    age: '',
    gender: '',
    howKnow: '',
    referenceName: '',
    products: []
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedHowKnow, setSelectedHowKnow] = useState('');
  const [showReferenceField, setShowReferenceField] = useState({
    hospital: false,
    doctor: false,
    dietician: false,
    other: false
  });

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("MHuXywcK2nvKGX8KQ");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHowKnowChange = (e) => {
    const value = e.target.value;
    setSelectedHowKnow(value);
    setFormData(prev => ({
      ...prev,
      howKnow: value,
      referenceName: ''
    }));

    // Reset all reference fields
    setShowReferenceField({
      hospital: false,
      doctor: false,
      dietician: false,
      other: false
    });

    // Show the relevant field based on selection
    if (value === 'hospital') {
      setShowReferenceField(prev => ({ ...prev, hospital: true }));
    } else if (value === 'doctor') {
      setShowReferenceField(prev => ({ ...prev, doctor: true }));
    } else if (value === 'dietician') {
      setShowReferenceField(prev => ({ ...prev, dietician: true }));
    } else if (value === 'other') {
      setShowReferenceField(prev => ({ ...prev, other: true }));
    }
  };

  const handleProductChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      let products = [...prev.products];
      if (checked) {
        products.push(value);
      } else {
        products = products.filter(p => p !== value);
      }
      return { ...prev, products };
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (formData.products.length === 0) {
      alert('Please select at least one product.');
      return;
    }

    if (!formData.howKnow) {
      alert('Please let us know how you learned about us.');
      return;
    }

    // Prepare howKnow text
    let howKnowText = '';
    switch (formData.howKnow) {
      case 'hospital':
        howKnowText = 'Hospital reference';
        break;
      case 'doctor':
        howKnowText = 'Referred by doctor';
        break;
      case 'dietician':
        howKnowText = 'Referred by dietician';
        break;
      case 'website':
        howKnowText = 'Website';
        break;
      case 'instagram':
        howKnowText = 'Instagram';
        break;
      case 'other':
        howKnowText = 'Other';
        break;
      default:
        howKnowText = 'Not specified';
    }

    const emailData = {
      ...formData,
      howKnow: howKnowText,
      products: formData.products.join(', ')
    };

    // Send email
    emailjs.send('service_e6ax5mf', 'template_5ej6blf', emailData)
      .then(() => {
        alert('Form submitted successfully!');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          location: '',
          coupon_code: '',
          age: '',
          gender: '',
          howKnow: '',
          referenceName: '',
          products: []
        });
        setSelectedHowKnow('');
        setShowReferenceField({
          hospital: false,
          doctor: false,
          dietician: false,
          other: false
        });
      }, (error) => {
        alert('Failed to send form. Please try again.');
        console.error('EmailJS Error:', error);
      });
  };
  return (
    <div className="enquiry-container">
      <main className="enquiry-main">
        <section className="enquiry-hero">
          <div className="hero-content">
            <h1>Welcome to Your Health Journey</h1>
            <h2>Let's Get Started with dnalyst</h2>
            <p className="hero-description">
              We're excited to help you unlock insights about your health. Please share some details below
              and our wellness team will reach out to guide you.
            </p>
          </div>
        </section>

        <div className="enquiry-content">
          <div className="form-section">
            <form className="enquiry-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <input
                    type="text"
                    name="coupon_code"
                    placeholder="Coupon Code (Optional)"
                    value={formData.coupon_code}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label>How did you learn about us?</label>
                  <select
                    id="howKnow"
                    name="howKnow"
                    value={selectedHowKnow}
                    onChange={handleHowKnowChange}
                    required
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="hospital">Hospital reference</option>
                    <option value="doctor">Referred by doctor</option>
                    <option value="dietician">Referred by dietician</option>
                    <option value="website">Website</option>
                    <option value="instagram">Instagram</option>
                    <option value="other">Other (please mention)</option>
                  </select>

                  {/* Conditional fields */}
                  {showReferenceField.hospital && (
                    <div className="reference-field">
                      <input
                        type="text"
                        name="referenceName"
                        placeholder="Hospital name"
                        value={formData.referenceName}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {showReferenceField.doctor && (
                    <div className="reference-field">
                      <input
                        type="text"
                        name="referenceName"
                        placeholder="Doctor's name"
                        value={formData.referenceName}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {showReferenceField.dietician && (
                    <div className="reference-field">
                      <input
                        type="text"
                        name="referenceName"
                        placeholder="Dietician's name"
                        value={formData.referenceName}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}

                  {showReferenceField.other && (
                    <div className="reference-field">
                      <input
                        type="text"
                        name="referenceName"
                        placeholder="Please specify"
                        value={formData.referenceName}
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </div>

                <div className="form-group full-width products-group">
                  <label>Select Interested Products:</label>
                  <div className="products-dropdown">
                    <button
                      type="button"
                      className="dropdown-toggle"
                      onClick={toggleDropdown}
                    >
                      {formData.products.length > 0
                        ? `${formData.products.length} product(s) selected`
                        : 'Select Products'}
                      <span className="dropdown-arrow">▼</span>
                    </button>
                    <div className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
                      {['slimKr', 'fitKr', 'fitKrPro', 'kinKr', 'herKr', 'gutKr', 'gutKrPro'].map(product => (
                        <label key={product}>
                          <input
                            type="checkbox"
                            name="products"
                            value={product}
                            checked={formData.products.includes(product)}
                            onChange={handleProductChange}
                          />
                          {product}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="form-group full-width terms-group">
                  <label className="terms-label">
                    <input
                      type="checkbox"
                      id="termsCheckbox"
                      name="terms"
                      required
                    />
                    <span>I agree that customer representatives can contact me with the details shared above.</span>
                  </label>
                </div>
              </div>

              <button type="submit" className="submit-button">
                Submit Request
                <span className="button-icon">→</span>
              </button>
            </form>
          </div>

          <div className="contact-section">
            <div className="contact-card">
              <h3>Contact Details</h3>
              <p className="contact-intro">Feel free to contact us with the details below:</p>

              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMobileAlt />
                  </div>
                  <div className="contact-text">
                    <h4>PHONE</h4>
                    <p>080-69328714</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="contact-text">
                    <h4>EMAIL</h4>
                    <p>wellness@molsys.in</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="contact-text">
                    <h4>ADDRESS</h4>
                    <p>
                      Yenepoya Technology Incubator<br />
                      Yenepoya (deemed-to-be) University<br />
                      Deralakatte, Ullal, DK Pin: 575020
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <FaYoutube />
                  </div>
                  <div className="contact-text">
                    <h4>
                      <a href="https://youtube.com/@dnalyst?si=mD4EbzupidRQwyCD" target="_blank" rel="noopener noreferrer">
                        Subscribe to our YouTube channel
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <a href="#top" className="back-to-top" aria-label="Back to top">
        <FaChevronUp />
      </a>
    </div>
  );
};

export default EnquiryPage;