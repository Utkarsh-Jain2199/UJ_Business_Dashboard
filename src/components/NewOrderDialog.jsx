
import React, { useState } from 'react';
const availableStatusOptions = [
  { type: 'In Progress', color: '#8a8cd9', icon: '/images/img_dot_indigo_a100.svg' },
  { type: 'Complete', color: '#4aa785', icon: '/images/img_dot_teal_100.svg' },
  { type: 'Pending', color: '#59a8d4', icon: '/images/img_dot_light_blue_100.svg' },
  { type: 'Approved', color: '#ffc554', icon: '/images/img_dot_yellow_200.svg' },
  { type: 'Rejected', color: '#777777', icon: '/images/img_dot.svg' },
];


const TransactionCreationModal = ({ isOpen, onModalClose, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    id: '',
    user: { name: '', avatar: '/images/img_byewind.png' },
    project: '',
    address: '',
    date: '',
    status: availableStatusOptions[0],
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'user.name') {
      setFormData((prev) => ({ ...prev, user: { ...prev.user, name: value } }));
    } else if (name === 'status') {
      const selectedStatus = availableStatusOptions.find((option) => option.type === value);
      setFormData((prev) => ({ ...prev, status: selectedStatus }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!formData.id || !formData.user.name || !formData.project) return;
    onFormSubmit(formData);
    onModalClose();
    setFormData({
      id: '',
      user: { name: '', avatar: '/images/img_byewind.png' },
      project: '',
      address: '',
      date: '',
      status: availableStatusOptions[0],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <form onSubmit={handleFormSubmission} className="bg-white rounded-lg p-6 w-[350px] flex flex-col gap-4">
        <h2 className="text-lg font-bold mb-2">Add New Order</h2>
        <input name="id" value={formData.id} onChange={handleInputChange} placeholder="Order ID" className="border p-2 rounded" required />
        <input name="user.name" value={formData.user.name} onChange={handleInputChange} placeholder="User Name" className="border p-2 rounded" required />
        <input name="project" value={formData.project} onChange={handleInputChange} placeholder="Project" className="border p-2 rounded" required />
        <input name="address" value={formData.address} onChange={handleInputChange} placeholder="Address" className="border p-2 rounded" />
        <input name="date" value={formData.date} onChange={handleInputChange} placeholder="Date" className="border p-2 rounded" />
        <select name="status" value={formData.status.type} onChange={handleInputChange} className="border p-2 rounded">
          {availableStatusOptions.map((option) => (
            <option key={option.type} value={option.type}>{option.type}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-2">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>
          <button type="button" className="bg-gray-300 px-4 py-2 rounded" onClick={onModalClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionCreationModal;
