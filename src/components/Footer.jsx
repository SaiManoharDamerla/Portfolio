// src/components/Footer.jsx
import './components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p className="text-sm">© {new Date().getFullYear()} Sai Manohar. All rights reserved.</p>
    </footer>
  );
}