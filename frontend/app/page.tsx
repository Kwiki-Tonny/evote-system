'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [schools, setSchools] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/tenants')
      .then(res => res.json())
      .then(data => {
        setSchools(data.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-blue-600">🏫 Registered Schools</h1>
      {loading && <p>Loading...</p>}
      {!loading && schools.length === 0 && <p className="text-gray-500">No schools registered yet.</p>}
      {schools.map((school: any) => (
        <div key={school.id} className="border p-4 m-2 rounded-lg w-64 text-center">
          <p className="font-bold">{school.school_name}</p>
          <p className="text-sm text-gray-600">{school.subdomain}.evote.com</p>
        </div>
      ))}
    </main>
  );
}