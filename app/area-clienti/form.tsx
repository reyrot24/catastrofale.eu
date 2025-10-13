"use client";
import React, { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = () => {
    if (!form.username.trim()) return "Inserisci un username.";
    if (!form.password) return "Inserisci una password.";
    if (form.password.length < 6)
      return "La password deve essere di almeno 6 caratteri.";
    return null;
  };

  const fakeLoginApi = () => {
    return new Promise<{ ok: boolean; message?: string }>((resolve) => {
      setTimeout(() => {
        // condizione finta: se username === 'admin' e password === 'password' -> success
        resolve({
          ok: false,
          message: "Username o password non validi.",
        });
      }, 900);
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      const res = await fakeLoginApi();

      setError(res.message ?? "Errore sconosciuto.");
    } catch (err) {
      setError("Si è verificato un errore");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>

      <form onSubmit={handleSubmit} aria-label="login-form">
        <label className="block mb-3">
          <span className="text-sm font-medium">Username</span>
          <input
            type="text"
            value={form.username}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, username: e.target.value }))
            }
            className="mt-1 block w-full rounded-md border px-3 py-2"
            placeholder="es. andrea"
            autoComplete="username"
            aria-required="true"
          />
        </label>

        <label className="block mb-3">
          <span className="text-sm font-medium">Password</span>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              value={form.password}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, password: e.target.value }))
              }
              className="mt-1 block w-full rounded-md border px-3 py-2 pr-20"
              placeholder="••••••••"
              autoComplete="current-password"
              aria-required="true"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-sm px-2 py-1 rounded-md border"
              aria-pressed={showPassword}
            >
              {showPassword ? "Nascondi" : "Mostra"}
            </button>
          </div>
        </label>

        {error && (
          <div role="alert" className="mb-3 text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div role="status" className="mb-3 text-green-600">
            {success}
          </div>
        )}

        <div className="flex items-center justify-between mt-4">
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 rounded-lg shadow-sm border disabled:opacity-60"
          >
            {loading ? "Sto accedendo..." : "Accedi"}
          </button>

          <button
            type="button"
            onClick={() => {
              setForm({
                username: "",
                password: "",
              });
              setError(null);
              setSuccess(null);
            }}
            className="text-sm underline"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
