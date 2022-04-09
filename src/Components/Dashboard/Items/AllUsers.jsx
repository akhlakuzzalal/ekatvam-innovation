import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
  const navigate = useNavigate();
  const allUsers = useSelector((state) => state.users.users);
  console.log(allUsers);
  return (
    <div>
      <div className="flex flex-col justify-center mt-6 w-full">
        <div>
          <h3 className="text-center text-gray-800 text-sm md:text-lg lg:text-2xl">
            All users info
          </h3>
        </div>
        <div className="flex flex-col w-full shadow">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overlfow-hidden">
                {/* upper part */}
                <table className="max-w-screen-xl mx-auto">
                  <thead className="hidden lg:block bg-[#0087c6] font-primary">
                    <tr className="grid grid-cols-1 lg:grid-cols-6 place-items-center">
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        User Name
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-xs font-medium text-white px-6 py-3 text-left uppercase tracking-wider"
                      >
                        Website
                      </th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    {allUsers.map((user) => (
                      <tr
                        key={user.id}
                        onClick={() => navigate(`/dashboard/${user.id}`)}
                        className="bg-white shadow-md md:shadow-none border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-6 place-items-center hover:bg-[#0087c669] cursor-pointer"
                      >
                        <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {user?.name}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user?.username}
                          </p>
                        </td>
                        <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.email}
                          </p>
                        </td>
                        <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.address.city}
                          </p>
                        </td>
                        <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.phone}
                          </p>
                        </td>
                        <td className="text-sm text-gray-600 px-6 py-4 whitespace-nowrap">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {user.website}
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
