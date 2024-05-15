import Headline from "../components/Headline";
import { EmployeeData } from "../utils/constants/EmployeeImport";

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  photo: string;
}

const Employees: React.FC = () => {
  return (
    <div className="p-5">
      <Headline title="Employees Table" subtitle="Manage your employees" />
      <hr className="my-5" />
      <div className="relative overflow-x-auto">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4">
          {/* Dropdown and Search elements */}
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  text-center ">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                  />
                  <label htmlFor="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                UUID
              </th>
              <th scope="col" className="px-6 py-3">
                Avatar
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Department
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {EmployeeData.map((employee: Employee, index: number) => (
              <tr
                className="bg-white border-b hover:bg-gray-50 text-center"
                key={employee.id}
              >
                <td className="w-4 p-4">
                  <div className="flex items-center">
                    <input
                      id={`checkbox-table-search-${index}`}
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                    />
                    <label
                      htmlFor={`checkbox-table-search-${index}`}
                      className="sr-only"
                    >
                      checkbox
                    </label>
                  </div>
                </td>
                <td className="px-6 py-4">{index}</td>
                <td className="px-6 py-4">{employee.id}</td>
                <td className="px-6 py-4 flex justify-center">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={employee.photo}
                    alt="User avatar"
                  />
                </td>
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.email}</td>
                <td className="px-6 py-4">{employee.department}</td>
                <td className="px-6 py-4">{employee.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
