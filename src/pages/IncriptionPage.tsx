import { useState } from "react";

import { useParams } from "react-router-dom";
import { useEventDataInscriptions } from "../hooks/useEventDataInscriptions";
import { Paginate } from "../components/Paginate";

export function IncriptionPage() {
  const { id } = useParams();
  const [filter, setFilter] = useState("");
  const [page, setPage] = useState(1);
  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const { data } = useEventDataInscriptions(page, id ? Number(id) : null, filter);

  return (
    <div className="flex mt-5 rounded-lg items-center justify-center">
      <div className="w-full sm:w-3/4 lg:w-1/2 p-6 border rounded-lg shadow bg-gray-800 border-gray-700">
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        />
        <div className="w-full rounded-lg mt-5 overflow-x-auto overflow-y-auto">
          <table className="w-full text-sm text-left rounded-lg text-gray-400">
            <thead className="text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  CPF
                </th>
              </tr>
            </thead>
            <tbody>
              {data && data.total > 0 ? (
                data.data.map((resp) => (
                  <tr
                    key={resp.id}
                    className="border-b bg-gray-900 border-gray-700"
                  >
                    <td
                      className="px-6 py-4 font-medium whitespace-nowrap text-white"
                    >
                      {resp.user.name}
                    </td>
                    <td className="px-6 py-4">{resp?.user.email}</td>
                    <td className="px-6 py-4">{resp?.user.cpf}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="py-3">Não encontrei inscritos.</td>
                </tr>
              )}
            </tbody>
          </table>
          
        </div>
        <div className="mt-5">
            <Paginate
              page={page}
              lastPage={data?.last_page || 1}
              onPageChange={handlePageChange}
            />
          </div>
      </div>
    </div>

  );
}