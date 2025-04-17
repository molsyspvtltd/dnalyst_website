import React, { useState } from "react";

const EnquiryPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    location: "",
    coupon: "",
    age: "",
    gender: "",
    products: [],
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "products") {
      setFormData((prev) => ({
        ...prev,
        products: checked
          ? [...prev.products, value]
          : prev.products.filter((item) => item !== value),
      }));
    } else if (type === "checkbox" && name === "agree") {
      setFormData((prev) => ({ ...prev, agree: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone Number is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.agree) newErrors.agree = "Please accept terms";
    if (formData.products.length === 0)
      newErrors.products = "Please select at least one product";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setLoading(true);

    // Simulate API submission
    setTimeout(() => {
      setLoading(false);
      alert("Form submitted successfully!");
      console.log("Form Data:", formData);
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        location: "",
        coupon: "",
        age: "",
        gender: "",
        products: [],
        agree: false,
      });
    }, 1500);
  };

  return (
    <div className="bg-[#f9f5f0] text-gray-800 flex justify-center py-12 px-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Contact Details */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Contact Details
          </h2>
          <div className="space-y-4 text-gray-700 text-base">
            <div>📞 080-69328714</div>
            <div>✉️ wellness@molys.in</div>
            <div>
              📍 Yenepoya Technology Incubator, Deralakatte, Mangalore, 575020
            </div>
            <div>▶️ Subscribe to our YouTube</div>
          </div>
        </div>

        {/* Right: Enquiry Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-orange-600 mb-6">
            Enquiry Form
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder={errors.firstName ? errors.firstName : "First Name"}
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`input-style ${
                  errors.firstName ? "border-red-500 placeholder-red-500" : ""
                }`}
              />

              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-style"
              />

              <input
                type="text"
                placeholder={errors.phone ? errors.phone : "Phone Number"}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`input-style ${
                  errors.phone ? "border-red-500 placeholder-red-500" : ""
                }`}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={errors.email ? errors.email : "Email"}
                className={`input-style ${
                  errors.email ? "border-red-500 placeholder-red-500" : ""
                }`}
              />

              <input
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="input-style"
              />

              <input
                type="text"
                placeholder="Coupon Code (Optional)"
                name="coupon"
                value={formData.coupon}
                onChange={handleChange}
                className="input-style"
              />

              <input
                type="number"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="input-style"
              />

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-style"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-red-500 text-sm">{errors.gender}</span>
              )}
            </div>

            {/* Products */}
            <div>
              <label className="block font-semibold mb-2">
                Interested Products
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "slimKr",
                  "fitKr",
                  "fitKrPro",
                  "kinKr",
                  "herKr",
                  "gutKr",
                  "gutKrPro",
                ].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="products"
                      value={item}
                      checked={formData.products.includes(item)}
                      onChange={handleChange}
                    />
                    {item}
                  </label>
                ))}
              </div>
              {errors.products && (
                <span className="text-red-500 text-sm">{errors.products}</span>
              )}
            </div>

            {/* Agreement */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <p className="text-sm text-gray-600">
                I agree that customer representatives can contact me.
              </p>
            </div>
            {errors.agree && (
              <span className="text-red-500 text-sm">{errors.agree}</span>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-xl transition duration-300 font-semibold"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
