import React, { useState } from 'react';

const greetings = [
  { value: '', label: '--Ninguno--' },
  { value: 'Sr.', label: 'Sr.' },
  { value: 'Sra.', label: 'Sra.' },
  { value: 'Srta.', label: 'Srta.' },
];

type Gender = 'Masculino' | 'Femenino' | '';

const PersonalDetailsForm: React.FC = () => {
  const [form, setForm] = useState({
    greeting: '',
    firstName: '',
    lastName: '',
    gender: '' as Gender,
    email: '',
    dob: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado:\n' + JSON.stringify(form, null, 2));
  };

  return (
    <div className="container mt-5">
      <fieldset className="border p-4 rounded shadow-sm">
        <legend className="w-auto px-3">Detalles personales</legend>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Saludo</label>
            <select
              className="form-select"
              name="greeting"
              value={form.greeting}
              onChange={handleChange}
            >
              {greetings.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Nombre *</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              required
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Apellido *</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              required
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label d-block">Género</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="masculino"
                value="Masculino"
                checked={form.gender === 'Masculino'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="masculino">
                Masculino
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="femenino"
                value="Femenino"
                checked={form.gender === 'Femenino'}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="femenino">
                Femenino
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Fecha de nacimiento</label>
            <input
              type="date"
              className="form-control"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Dirección</label>
            <textarea
              className="form-control"
              name="address"
              rows={3}
              value={form.address}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
      </fieldset>
    </div>
  );
};

export default PersonalDetailsForm;