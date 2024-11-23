import React, { useState } from 'react';

const InputCreate = () => {
  const [title, setTitle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('El título es obligatorio.');

    try {
      const response = await fetch('http://localhost:5000/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        alert('Tarea añadida correctamente');
        setTitle('');
      } else {
        alert('Error al añadir la tarea');
      }
    } catch (error) {
      console.error('Error al añadir la tarea:', error);
      alert('Error al añadir la tarea');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nueva tarea"
      />
      <button type="submit">Añadir Tarea</button>
    </form>
  );
};

export default InputCreate;
