import React from 'react'
import WapdaLOGO from '../assets/WapdaLOGO.png'
import { FiClock, FiMapPin, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08144d] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <img
              className="h-16 w-16 rounded-xl bg-white p-1"
              src={WapdaLOGO}
              alt="Wapda Logo"
            />
            <div>
              <h3 className="text-lg font-bold leading-snug">
                WAPDA Employees
              </h3>
              <p className="text-sm font-medium text-yellow-300">
                Co-Operative Housing Society
              </p>
            </div>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100">
            Rawalpindi / Islamabad society portal for property records,
            payment updates, member services, and official notices.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
            Quick Links
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            <li><a className="transition hover:text-yellow-300" href="#">Home</a></li>
            <li><a className="transition hover:text-yellow-300" href="#">Society Map</a></li>
            <li><a className="transition hover:text-yellow-300" href="#">Application Forms</a></li>
            <li><a className="transition hover:text-yellow-300" href="#">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
            Services
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-blue-100">
            <li>Property Allotment</li>
            <li>Payment History</li>
            <li>Member Management</li>
            <li>Pending Dues</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.18em] text-yellow-300">
            Office Info
          </h4>
          <ul className="mt-5 space-y-4 text-sm text-blue-100">
            <li className="flex gap-3">
              <FiMapPin className="mt-1 shrink-0 text-yellow-300" />
              <span>Rawalpindi / Islamabad, Pakistan</span>
            </li>
            <li className="flex gap-3">
              <FiClock className="mt-1 shrink-0 text-yellow-300" />
              <span>Mon - Sat, 9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex gap-3">
              <FiPhone className="mt-1 shrink-0 text-yellow-300" />
              <span>Society office contact desk</span>
            </li>
            <li className="flex gap-3">
              <FiMail className="mt-1 shrink-0 text-yellow-300" />
              <span>Official correspondence</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#06103d] px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {currentYear} WAPDA Employees Co-Operative Housing Society.</p>
          <p className="text-yellow-300">Designed for secure society management.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
