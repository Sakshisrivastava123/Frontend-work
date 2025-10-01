// src/App.js
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBriefcase,
  faTicket,
  faUsers,
  faUser  ,
  faWallet,
  faMoneyBill,
  faMobile,
  faCode,
  faBell,
} from '@fortawesome/free-solid-svg-icons';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const sidebarLinks = [
  { icon: faHome, label: 'Dashboard' },
  { icon: faBriefcase, label: 'Projects' },
  { icon: faTicket, label: 'Tickets' },
  { icon: faUsers, label: 'Our Clients' },
  { icon: faUser  , label: 'Employees' },
  { icon: faWallet, label: 'Accounts' },
  { icon: faMoneyBill, label: 'Payroll' },
  { icon: faMobile, label: 'App' },
  { icon: faCode, label: 'UI Components' },
];

const lineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Employees Info',
      data: [10, 20, 15, 30, 20, 25, 18],
      borderColor: 'orange',
      backgroundColor: 'orange',
      tension: 0.4,
      fill: false,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: { display: true, position: 'top' },
    title: { display: false },
  },
  scales: {
    y: { beginAtZero: true },
  },
};

const pieChartData = {
  labels: ['Men', 'Women'],
  datasets: [
    {
      data: [250, 173],
      backgroundColor: ['#4e73df', '#e83e8c'],
      hoverOffset: 30,
    },
  ],
};

const pieChartOptions = {
  cutout: '70%',
  responsive: true,
  plugins: {
    legend: { position: 'bottom' },
  },
};

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-full w-64 bg-indigo-900 text-gray-200 flex flex-col p-6">
        <h1 className="text-center text-2xl mb-8 select-none">📋 My-Task</h1>
        <nav className="flex flex-col space-y-3 flex-grow">
          {sidebarLinks.map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              <FontAwesomeIcon icon={icon} />
              <span>{label}</span>
            </a>
          ))}
        </nav>
        <div className="mt-auto space-y-2">
          <button className="w-full bg-white text-indigo-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Enable Dark Mode
          </button>
          <button className="w-full bg-white text-indigo-900 py-2 rounded-lg font-semibold hover:bg-gray-200 transition">
            Enable RTL Mode
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-6">
        {/* Topbar */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex items-center gap-4 text-gray-700">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span>Dylan Hunter</span>
            <img
              src="https://i.pravatar.cc/50"
              alt="profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </div>

        {/* Row 1 */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-8 bg-white rounded-2xl shadow p-6">
            <h6 className="font-semibold mb-4">Employees Info</h6>
            <div className="h-48">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
          <div className="col-span-4 bg-white rounded-2xl shadow p-6 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold">1546</h2>
            <p className="text-gray-600">Applications</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-4 bg-white rounded-2xl shadow p-6 space-y-2">
            <h6 className="font-semibold mb-2">Employees Availability</h6>
            <p>✔ Attendance: 400</p>
            <p>⏰ Late Coming: 17</p>
            <p>🚫 Absent: 06</p>
            <p>📝 Leave Apply: 14</p>
          </div>
          <div className="col-span-4 bg-white rounded-2xl shadow p-6 flex flex-col items-center">
            <h6 className="font-semibold mb-4">Total Employees</h6>
            <div className="w-40 h-40">
              <Doughnut data={pieChartData} options={pieChartOptions} />
            </div>
            <p className="mt-4 text-gray-600">423 Employees</p>
          </div>
          <div className="col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold">246</h3>
            <p>Interviews</p>
          </div>
          <div className="col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col justify-center items-center">
            <h3 className="text-3xl font-bold">101</h3>
            <p>Hired</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-6 bg-white rounded-2xl shadow p-6">
            <h6 className="font-semibold mb-4">Upcoming Interviews</h6>
            <ul className="divide-y divide-gray-200">
              <li className="flex justify-between py-2">
                <span>Natalie Gibson</span>
                <span>1.30 - 1.30</span>
              </li>
              <li className="flex justify-between py-2">
                <span>Peter Piperg</span>
                <span>9.00 - 1.30</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}