import React, { useState } from "react";

export default function OrdersHistory() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<Order | null>(null);

  type Order = {
    id: string;
    date: string;
    time: string;
    customer: string;
    total: string;
  };
  // Sample data for table rows (30 grocery orders)
  const orders: Order[] = [
    {
      id: "INV001",
      date: "2024-12-22",
      time: "14:30",
      customer: "John Doe",
      total: "$250",
    },
    {
      id: "INV002",
      date: "2024-12-23",
      time: "10:15",
      customer: "Jane Smith",
      total: "$300",
    },
    {
      id: "INV003",
      date: "2024-12-24",
      time: "12:00",
      customer: "Mark Brown",
      total: "$150",
    },
    {
      id: "INV004",
      date: "2024-12-24",
      time: "13:30",
      customer: "Emily White",
      total: "$100",
    },
    {
      id: "INV005",
      date: "2024-12-25",
      time: "09:45",
      customer: "David Green",
      total: "$120",
    },
    {
      id: "INV006",
      date: "2024-12-25",
      time: "11:30",
      customer: "Olivia Black",
      total: "$200",
    },
    {
      id: "INV007",
      date: "2024-12-26",
      time: "10:00",
      customer: "Liam Harris",
      total: "$180",
    },
    {
      id: "INV008",
      date: "2024-12-26",
      time: "15:15",
      customer: "Sophia Clark",
      total: "$220",
    },
    {
      id: "INV009",
      date: "2024-12-27",
      time: "08:30",
      customer: "Mason Lewis",
      total: "$90",
    },
    {
      id: "INV010",
      date: "2024-12-27",
      time: "13:00",
      customer: "Amelia Walker",
      total: "$130",
    },
    {
      id: "INV011",
      date: "2024-12-28",
      time: "14:30",
      customer: "James Scott",
      total: "$250",
    },
    {
      id: "INV012",
      date: "2024-12-28",
      time: "10:15",
      customer: "Isabella Perez",
      total: "$320",
    },
    {
      id: "INV013",
      date: "2024-12-29",
      time: "11:00",
      customer: "Benjamin Young",
      total: "$210",
    },
    {
      id: "INV014",
      date: "2024-12-29",
      time: "12:45",
      customer: "Charlotte King",
      total: "$190",
    },
    {
      id: "INV015",
      date: "2024-12-30",
      time: "08:00",
      customer: "Elijah Lee",
      total: "$270",
    },
    {
      id: "INV016",
      date: "2024-12-30",
      time: "10:00",
      customer: "Harper King",
      total: "$280",
    },
    {
      id: "INV017",
      date: "2024-12-31",
      time: "14:00",
      customer: "Ethan Walker",
      total: "$250",
    },
    {
      id: "INV018",
      date: "2024-12-31",
      time: "16:00",
      customer: "Amelia Brown",
      total: "$140",
    },
    {
      id: "INV019",
      date: "2024-12-22",
      time: "17:00",
      customer: "Mia Taylor",
      total: "$130",
    },
    {
      id: "INV020",
      date: "2024-12-23",
      time: "09:00",
      customer: "Lucas Martinez",
      total: "$200",
    },
    {
      id: "INV021",
      date: "2024-12-24",
      time: "12:30",
      customer: "Avery Allen",
      total: "$210",
    },
    {
      id: "INV022",
      date: "2024-12-24",
      time: "14:00",
      customer: "Ella Rodriguez",
      total: "$220",
    },
    {
      id: "INV023",
      date: "2024-12-25",
      time: "10:00",
      customer: "Grace Nelson",
      total: "$150",
    },
    {
      id: "INV024",
      date: "2024-12-25",
      time: "11:30",
      customer: "Zoe Carter",
      total: "$160",
    },
    {
      id: "INV025",
      date: "2024-12-26",
      time: "08:30",
      customer: "Levi Perez",
      total: "$180",
    },
    {
      id: "INV026",
      date: "2024-12-26",
      time: "09:15",
      customer: "Aria Turner",
      total: "$210",
    },
    {
      id: "INV027",
      date: "2024-12-27",
      time: "13:00",
      customer: "Henry Morgan",
      total: "$220",
    },
    {
      id: "INV028",
      date: "2024-12-27",
      time: "14:00",
      customer: "Lily Lee",
      total: "$250",
    },
    {
      id: "INV029",
      date: "2024-12-28",
      time: "10:00",
      customer: "Jack Young",
      total: "$270",
    },
    {
      id: "INV030",
      date: "2024-12-29",
      time: "15:30",
      customer: "Ella Hall",
      total: "$300",
    },
  ];

  // Sample data for modal details (grocery items)
  const orderDetails = [
    { product: "Rice", quantity: 2, price: "$50" },
    { product: "Sugar", quantity: 1, price: "$30" },
    { product: "Milk", quantity: 3, price: "$20" },
    { product: "Eggs", quantity: 1, price: "$15" },
  ];

  const handleRowClick = (row: Order) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRow(null);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            id="table-search-users"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for invoices"
          />
        </div>
      </div>

      {/* Main Table */}
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Invoice ID
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Customer
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => handleRowClick(order)}
            >
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.date}</td>
              <td className="px-6 py-4">{order.time}</td>
              <td className="px-6 py-4">{order.customer}</td>
              <td className="px-6 py-4">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && selectedRow && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-3/4 md:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-xl font-semibold mb-4">Invoice Details</h2>
            <div className="space-y-4">
              <p>
                <strong>Invoice ID:</strong> {selectedRow.id}
              </p>
              <p>
                <strong>Date:</strong> {selectedRow.date}
              </p>
              <p>
                <strong>Time:</strong> {selectedRow.time}
              </p>
              <p>
                <strong>Customer:</strong> {selectedRow.customer}
              </p>
              <p>
                <strong>Total:</strong> {selectedRow.total}
              </p>
            </div>
            <h3 className="text-lg font-semibold mt-4 mb-2">Grocery Items:</h3>
            <ul className="space-y-2">
              {orderDetails.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>{item.product}</span>
                  <span>
                    {item.quantity} x {item.price}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-red-600 text-white rounded-md"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
