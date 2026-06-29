"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface Donation {
  id: number;
  name: string;
  email: string;
  phone: string;
  amount: number;
  programme: string;
  status: string;
  date: string;
}

const ADMIN_PASSWORD = "THF2020";

const PROGRAMMES = [
  "General Fund",
  "Forest First",
  "Indigenous Cultural Documentation",
  "Arts & Culture Programmes",
  "Architecture Documentation",
  "River & Water Management",
];

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [pwdInput, setPwdInput] = useState("");
  const [loginError, setLoginError] = useState(false);

  // Donation lists and filters
  const [donations, setDonations] = useState<Donation[]>([]);
  const [search, setSearch] = useState("");
  const [filterProg, setFilterProg] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  // Form fields
  const [aName, setAName] = useState("");
  const [aEmail, setAEmail] = useState("");
  const [aAmount, setAAmount] = useState("");
  const [aProg, setAProg] = useState("General Fund");
  const [aStatus, setAStatus] = useState("Pending");
  const [aPhone, setAPhone] = useState("");
  const [aDate, setADate] = useState("");

  // Apply admin body theme on mount
  useEffect(() => {
    document.body.classList.add("admin-body");
    
    // Check if session exists
    if (sessionStorage.getItem("hf_admin") === "1") {
      setIsLoggedIn(true);
      loadData();
    }

    return () => {
      document.body.classList.remove("admin-body");
    };
  }, []);

  const loadData = () => {
    const raw = localStorage.getItem("hf_donations");
    if (raw) {
      try {
        setDonations(JSON.parse(raw));
      } catch (e) {
        setDonations([]);
      }
    }
  };

  const doLogin = () => {
    if (pwdInput === ADMIN_PASSWORD) {
      sessionStorage.setItem("hf_admin", "1");
      setIsLoggedIn(true);
      setLoginError(false);
      setPwdInput("");
      loadData();
    } else {
      setLoginError(true);
      setPwdInput("");
    }
  };

  const doLogout = () => {
    sessionStorage.removeItem("hf_admin");
    setIsLoggedIn(false);
  };

  const saveDonations = (updated: Donation[]) => {
    localStorage.setItem("hf_donations", JSON.stringify(updated));
    setDonations(updated);
  };

  const addDonation = () => {
    const name = aName.trim();
    const email = aEmail.trim();
    const amount = parseInt(aAmount);
    
    if (!name || !email || isNaN(amount)) {
      alert("Name, email and amount are required.");
      return;
    }

    const newDonation: Donation = {
      id: Date.now(),
      name,
      email,
      phone: aPhone.trim(),
      amount,
      programme: aProg,
      status: aStatus,
      date: aDate
        ? new Date(aDate).toLocaleDateString("en-IN")
        : new Date().toLocaleDateString("en-IN"),
    };

    const updated = [...donations, newDonation];
    saveDonations(updated);

    // Reset fields
    setAName("");
    setAEmail("");
    setAAmount("");
    setAPhone("");
    setADate("");
    setAProg("General Fund");
    setAStatus("Pending");
  };

  const deleteDonation = (id: number) => {
    if (!confirm("Delete this donation record?")) return;
    const updated = donations.filter((x) => x.id !== id);
    saveDonations(updated);
  };

  const updateStatus = (id: number, newStatus: string) => {
    const updated = donations.map((x) =>
      x.id === id ? { ...x, status: newStatus } : x
    );
    saveDonations(updated);
  };

  const exportCSV = () => {
    const reversed = [...donations].reverse();
    const rows = [
      ["#", "Date", "Name", "Email", "Phone", "Amount (INR)", "Programme", "Status"],
    ];
    reversed.forEach((x, i) =>
      rows.push([
        (i + 1).toString(),
        x.date,
        x.name,
        x.email,
        x.phone || "",
        x.amount.toString(),
        x.programme,
        x.status,
      ])
    );
    
    const csvContent = rows
      .map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","))
      .join("\n");
      
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `heritage-donations-${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter calculations
  const filtered = donations
    .filter((x) => {
      const q = search.toLowerCase();
      const matchQ =
        !q ||
        x.name.toLowerCase().includes(q) ||
        x.email.toLowerCase().includes(q) ||
        x.programme.toLowerCase().includes(q);
      const matchP = !filterProg || x.programme === filterProg;
      const matchS = !filterStatus || x.status === filterStatus;
      return matchQ && matchP && matchS;
    })
    .reverse();

  // Summary statistics
  const totalAmount = donations.reduce((a, x) => a + Number(x.amount), 0);
  const confirmedAmount = donations
    .filter((x) => x.status !== "Pending")
    .reduce((a, x) => a + Number(x.amount), 0);
  const pendingAmount = donations
    .filter((x) => x.status === "Pending")
    .reduce((a, x) => a + Number(x.amount), 0);
  const uniqueDonors = new Set(donations.map((x) => x.email)).size;
  const receiptsIssued = donations.filter((x) => x.status === "Receipt Sent").length;

  const getStatusClass = (status: string) => {
    return status === "Pending"
      ? "status-pending"
      : status === "Confirmed"
      ? "status-confirmed"
      : "status-receipt";
  };

  if (!isLoggedIn) {
    return (
      <div id="login-screen">
        <div className="login-box">
          <h2>Admin Access</h2>
          <p>The Heritage Foundation</p>
          <input
            className="li"
            type="password"
            placeholder="Enter password"
            value={pwdInput}
            onChange={(e) => setPwdInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") doLogin();
            }}
          />
          <button className="btn" onClick={doLogin}>
            Login
          </button>
          {loginError && (
            <p className="login-err" style={{ display: "block" }}>
              Incorrect password. Try again.
            </p>
          )}
          <p style={{ fontSize: "0.7rem", color: "var(--sand-dim)", opacity: 0.4, marginTop: "1.5rem" }}>
            Default Password: THF2020
          </p>
        </div>
      </div>
    );
  }

  return (
    <div id="dashboard" style={{ display: "block" }}>
      <div className="dash-header">
        <div>
          <div className="dash-title">Donation Tracker</div>
          <div className="dash-sub">The Heritage Foundation | Kotagiri</div>
        </div>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--fern)",
              textDecoration: "none",
              opacity: 0.7,
            }}
          >
            Back to Site
          </Link>
          <button className="logout-btn" onClick={doLogout}>
            Log Out
          </button>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="summary">
        <div className="sc">
          <div className="sc-label">Total Received</div>
          <div className="sc-value">₹ {totalAmount.toLocaleString("en-IN")}</div>
          <div className="sc-sub">All time</div>
        </div>
        <div className="sc">
          <div className="sc-label">Confirmed</div>
          <div className="sc-value">₹ {confirmedAmount.toLocaleString("en-IN")}</div>
          <div className="sc-sub">Payment verified</div>
        </div>
        <div className="sc">
          <div className="sc-label">Pending</div>
          <div className="sc-value">₹ {pendingAmount.toLocaleString("en-IN")}</div>
          <div className="sc-sub">Awaiting transfer</div>
        </div>
        <div className="sc">
          <div className="sc-label">Donors</div>
          <div className="sc-value">{uniqueDonors}</div>
          <div className="sc-sub">Unique</div>
        </div>
        <div className="sc">
          <div className="sc-label">Receipts Issued</div>
          <div className="sc-value">{receiptsIssued}</div>
          <div className="sc-sub">80G sent</div>
        </div>
      </div>

      {/* PROGRAMME BREAKDOWN */}
      <div className="prog-grid">
        {PROGRAMMES.map((p) => {
          const items = donations.filter((x) => x.programme === p);
          const amt = items.reduce((a, x) => a + Number(x.amount), 0);
          const pct = totalAmount > 0 ? Math.round((amt / totalAmount) * 100) : 0;
          return (
            <div className="prog-card" key={p}>
              <div className="prog-name">{p}</div>
              <div className="prog-bar-wrap">
                <div className="prog-bar" style={{ width: `${pct}%` }}></div>
              </div>
              <div className="prog-stats">
                <span className="prog-amount">₹ {amt.toLocaleString("en-IN")}</span>
                <span className="prog-count">
                  {items.length} donation{items.length !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ADD DONATION */}
      <div className="add-section">
        <h3>Add / Edit Donation</h3>
        <div className="form-row">
          <div>
            <label className="fi2-label">Donor Name</label>
            <input
              className="fi2"
              placeholder="Full name"
              value={aName}
              onChange={(e) => setAName(e.target.value)}
            />
          </div>
          <div>
            <label className="fi2-label">Email</label>
            <input
              className="fi2"
              type="email"
              placeholder="email@example.com"
              value={aEmail}
              onChange={(e) => setAEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="fi2-label">Amount (₹)</label>
            <input
              className="fi2"
              type="number"
              placeholder="2000"
              value={aAmount}
              onChange={(e) => setAAmount(e.target.value)}
            />
          </div>
          <div>
            <label className="fi2-label">Programme</label>
            <select
              className="fi2"
              value={aProg}
              onChange={(e) => setAProg(e.target.value)}
            >
              {PROGRAMMES.map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="fi2-label">Status</label>
            <select
              className="fi2"
              value={aStatus}
              onChange={(e) => setAStatus(e.target.value)}
            >
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Receipt Sent">Receipt Sent</option>
            </select>
          </div>
        </div>
        <div style={{ marginTop: "0.8rem", display: "flex", gap: "0.8rem" }}>
          <button
            className="add-btn"
            style={{ width: "auto", padding: "0.75rem 2rem" }}
            onClick={addDonation}
          >
            + Add Donation
          </button>
          <input
            className="fi2"
            placeholder="Phone (optional)"
            style={{ width: "200px" }}
            value={aPhone}
            onChange={(e) => setAPhone(e.target.value)}
          />
          <input
            className="fi2"
            type="date"
            style={{ width: "160px" }}
            value={aDate}
            onChange={(e) => setADate(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="table-section">
        <h3>All Donations</h3>
        <div className="table-controls">
          <input
            className="search-input"
            placeholder="Search by name, email or programme"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="filter-sel"
            value={filterProg}
            onChange={(e) => setFilterProg(e.target.value)}
          >
            <option value="">All Programmes</option>
            {PROGRAMMES.map((p) => (
              <option key={p}>{p}</option>
            ))}
          </select>
          <select
            className="filter-sel"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option>Pending</option>
            <option>Confirmed</option>
            <option>Receipt Sent</option>
          </select>
          <button className="export-btn" onClick={exportCSV}>
            Export CSV
          </button>
        </div>
        
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Amount</th>
                <th>Programme</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((x, i) => (
                <tr key={x.id}>
                  <td style={{ color: "rgba(184,174,152,0.4)", fontFamily: "var(--font-mono)", fontSize: "0.72rem" }}>
                    {filtered.length - i}
                  </td>
                  <td style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>{x.date || " "}</td>
                  <td style={{ color: "var(--cream)", fontWeight: 500 }}>{x.name}</td>
                  <td>
                    <a href={`mailto:${x.email}`} style={{ color: "var(--fern)", textDecoration: "none", fontSize: "0.82rem" }}>
                      {x.email}
                    </a>
                  </td>
                  <td style={{ fontSize: "0.82rem" }}>{x.phone || " "}</td>
                  <td className="amount-cell">₹ {Number(x.amount).toLocaleString("en-IN")}</td>
                  <td style={{ fontSize: "0.8rem" }}>{x.programme}</td>
                  <td>
                    <select
                      className={`status-badge ${getStatusClass(x.status)}`}
                      value={x.status}
                      onChange={(e) => updateStatus(x.id, e.target.value)}
                      style={{ background: "transparent", cursor: "pointer", outline: "none" }}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Receipt Sent">Receipt Sent</option>
                    </select>
                  </td>
                  <td>
                    <button className="del-btn" onClick={() => deleteDonation(x.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="empty-state">No donations yet. Add your first entry above.</div>
        )}
      </div>
    </div>
  );
}
