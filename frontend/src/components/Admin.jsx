import React, { useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const Admin = () => {
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await api.get("/companies");
        setCompanyData(response.data.companies || []);
      } catch (error) {
        console.log(error.message);
        toast.error(
          error.response?.data?.message || "Failed to fetch company data"
        );
      }
    };
    fetchCompanyData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {companyData.map((company) => (
          <div
            key={company.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {company.name}
            </h2>

            <div className="flex justify-between items-center mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                Shareholders: {company.num_shareholders}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Capital: ${company.total_capital}
              </span>
            </div>

            <h3 className="font-semibold text-gray-700 mb-2">Shareholders:</h3>
            <ul className="list-disc list-inside space-y-1">
              {company.shareholders?.length > 0 ? (
                company.shareholders.map((s) => (
                  <li key={s.id} className="text-gray-600">
                    {s.first_name} {s.last_name}{" "}
                    <span className="text-sm text-gray-400">({s.nationality})</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-500 italic">No shareholders</li>
              )}
            </ul>
          </div>
        ))}

        {companyData.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No companies found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Admin;