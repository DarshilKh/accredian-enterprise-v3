"use client";
import { useState } from "react";

interface EnquireModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const domains = [
  "Product & Innovation Hub",
  "Gen-AI Mastery",
  "Leadership Elevation",
  "Tech & Data Insights",
  "Operations Excellence",
  "Digital Enterprise",
  "Fintech Innovation Lab",
];

const deliveryModes = [
  "Online (Live)",
  "Online (Self-Paced)",
  "Offline / In-Person",
  "Blended (Online + Offline)",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  domain: "",
  candidates: "",
  deliveryMode: "",
  location: "",
};

export default function EnquireModal({ isOpen, onClose }: EnquireModalProps) {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.company) {
      setStatus("error");
      setErrorMsg("Please fill in Name, Email and Company.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setForm(initialForm);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Submission failed.");
    }
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "fixed", inset: 0, zIndex: 201,
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 16,
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 12,
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            width: "100%",
            maxWidth: 900,
            maxHeight: "95vh",
            boxShadow: "0 24px 60px rgba(0,0,0,0.2)",
          }}
          className="enquire-modal-grid"
        >
          {/* LEFT — Image panel */}
          <div
            style={{
              background: "linear-gradient(160deg, #1a3a6b 0%, #2563eb 100%)",
              position: "relative",
              minHeight: 500,
              overflow: "hidden",
            }}
            className="modal-image-panel"
          >
            {/* Placeholder business meeting illustration */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", alignItems: "flex-end", justifyContent: "center",
              padding: "0 0 0 0",
            }}>
              <svg width="100%" height="100%" viewBox="0 0 400 560" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
                {/* Background building window */}
                <rect width="400" height="560" fill="url(#bg)" />
                <defs>
                  <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1e3a8a" />
                    <stop offset="100%" stopColor="#1d4ed8" />
                  </linearGradient>
                </defs>
                {/* Window frames */}
                <rect x="20" y="30" width="160" height="200" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <rect x="220" y="30" width="160" height="200" rx="4" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <rect x="20" y="250" width="160" height="120" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <rect x="220" y="250" width="160" height="120" rx="4" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />

                {/* Person 1 - leftmost */}
                <ellipse cx="95" cy="360" rx="20" ry="20" fill="#bfdbfe" />
                <rect x="72" y="382" width="46" height="80" rx="6" fill="#1e40af" />
                <rect x="76" y="390" width="14" height="40" rx="3" fill="#93c5fd" />

                {/* Person 2 */}
                <ellipse cx="165" cy="355" rx="19" ry="19" fill="#93c5fd" />
                <rect x="143" y="376" width="44" height="84" rx="6" fill="#374151" />
                {/* Handshake arms */}
                <path d="M165 400 Q185 405 195 400" stroke="#bfdbfe" strokeWidth="5" strokeLinecap="round" />

                {/* Person 3 - center */}
                <ellipse cx="235" cy="352" rx="20" ry="20" fill="#dbeafe" />
                <rect x="213" y="374" width="44" height="86" rx="6" fill="#1e3a8a" />
                <rect x="232" y="382" width="12" height="8" rx="2" fill="#93c5fd" />

                {/* Person 4 - right */}
                <ellipse cx="310" cy="358" rx="18" ry="18" fill="#bfdbfe" />
                <rect x="290" y="378" width="40" height="82" rx="6" fill="#111827" />
                {/* Clipboard */}
                <rect x="306" y="390" width="22" height="28" rx="2" fill="#e5e7eb" />
                <rect x="309" y="393" width="16" height="2" rx="1" fill="#9ca3af" />
                <rect x="309" y="397" width="12" height="2" rx="1" fill="#9ca3af" />
                <rect x="309" y="401" width="14" height="2" rx="1" fill="#9ca3af" />

                {/* Floor line */}
                <rect x="0" y="460" width="400" height="100" fill="rgba(0,0,0,0.2)" />

                {/* Light rays from window */}
                <path d="M200 0 L0 300" stroke="rgba(255,255,255,0.04)" strokeWidth="40" />
                <path d="M280 0 L400 200" stroke="rgba(255,255,255,0.03)" strokeWidth="60" />
              </svg>
            </div>
          </div>

          {/* RIGHT — Form panel */}
          <div
            style={{
              padding: "32px 36px",
              overflowY: "auto",
              maxHeight: "95vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 28 }}>
              <h2 style={{ fontSize: 26, fontWeight: 700, color: "#111827", margin: 0 }}>
                Enquire Now
              </h2>
              <button
                onClick={onClose}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#6b7280", fontSize: 22, lineHeight: 1,
                  padding: 4,
                }}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#111827", marginBottom: 8 }}>
                  Thank you!
                </h3>
                <p style={{ color: "#6b7280", marginBottom: 24 }}>
                  Our team will get in touch with you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "#1a56db", color: "#fff", border: "none",
                    padding: "10px 28px", borderRadius: 6, fontSize: 14,
                    fontWeight: 600, cursor: "pointer",
                  }}
                >
                  Submit Another
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>

                {/* Name */}
                <InputField
                  name="name" value={form.name} onChange={handleChange}
                  placeholder="Enter Name" type="text"
                />

                {/* Email */}
                <InputField
                  name="email" value={form.email} onChange={handleChange}
                  placeholder="Enter Email" type="email"
                />

                {/* Phone with India flag */}
                <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 14, marginBottom: 14 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {/* Flag + country code */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                      {/* Indian flag emoji */}
                      <span style={{ fontSize: 18 }}>🇮🇳</span>
                      <span style={{ fontSize: 12, color: "#6b7280" }}>▾</span>
                      <span style={{ fontSize: 14, color: "#374151", marginLeft: 2 }}>+91</span>
                    </div>
                    <input
                      name="phone" value={form.phone} onChange={handleChange}
                      type="tel" placeholder=""
                      style={{
                        flex: 1, border: "none", outline: "none",
                        fontSize: 14, color: "#111827", background: "transparent",
                        padding: "4px 0",
                      }}
                    />
                  </div>
                </div>

                {/* Company */}
                <InputField
                  name="company" value={form.company} onChange={handleChange}
                  placeholder="Enter company name" type="text"
                />

                {/* Domain dropdown */}
                <SelectField
                  name="domain" value={form.domain} onChange={handleChange}
                  placeholder="Select Domain"
                  options={domains}
                />

                {/* No. of candidates */}
                <InputField
                  name="candidates" value={form.candidates} onChange={handleChange}
                  placeholder="Enter No. of candidates" type="number"
                />

                {/* Mode of Delivery */}
                <SelectField
                  name="deliveryMode" value={form.deliveryMode} onChange={handleChange}
                  placeholder="Select Mode of Delivery *"
                  options={deliveryModes}
                />

                {/* Location */}
                <InputField
                  name="location" value={form.location} onChange={handleChange}
                  placeholder="Eg: Gurgoan, Delhi, India" type="text"
                />

                {/* Error */}
                {status === "error" && (
                  <p style={{ fontSize: 13, color: "#dc2626", marginBottom: 12 }}>{errorMsg}</p>
                )}

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  style={{
                    width: "100%", padding: "15px",
                    background: "#1a56db", color: "#fff",
                    border: "none", borderRadius: 8,
                    fontSize: 16, fontWeight: 600,
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    opacity: status === "loading" ? 0.7 : 1,
                    marginTop: 8,
                  }}
                >
                  {status === "loading" ? "Submitting..." : "Submit"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .enquire-modal-grid { grid-template-columns: 1fr !important; }
          .modal-image-panel { display: none !important; }
        }
      `}</style>
    </>
  );
}

/* Reusable underline input */
function InputField({
  name, value, onChange, placeholder, type,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
}) {
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 14, marginBottom: 14 }}>
      <input
        name={name} value={value} onChange={onChange}
        type={type} placeholder={placeholder}
        style={{
          width: "100%", border: "none", outline: "none",
          fontSize: 14, color: "#111827", background: "transparent",
          padding: "4px 0",
        }}
      />
    </div>
  );
}

/* Reusable underline select */
function SelectField({
  name, value, onChange, placeholder, options,
}: {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder: string;
  options: string[];
}) {
  return (
    <div style={{ borderBottom: "1px solid #e5e7eb", paddingBottom: 14, marginBottom: 14, position: "relative" }}>
      <select
        name={name} value={value} onChange={onChange}
        style={{
          width: "100%", border: "none", outline: "none",
          fontSize: 14, color: value ? "#111827" : "#9ca3af",
          background: "transparent", appearance: "none",
          padding: "4px 24px 4px 0", cursor: "pointer",
        }}
      >
        <option value="" disabled hidden>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ color: "#111827" }}>{opt}</option>
        ))}
      </select>
      {/* Chevron */}
      <div style={{
        position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)",
        pointerEvents: "none", color: "#9ca3af", fontSize: 12,
      }}>
        ∨
      </div>
    </div>
  );
}
