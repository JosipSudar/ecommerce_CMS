import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Headline from "../components/Headline";
import { UserDummy } from "../utils/constants/UserDummy";

const Users: React.FC = () => {
  return (
    <div className="p-5">
      <Headline title="Users Table" subtitle="Manage your users" />
      <hr className="my-5" />
      <div className="relative overflow-x-auto">
        <div className="flex flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
              placeholder="Search for users"
            />
          </div>
        </div>
        <Accordion type="single" collapsible>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50   ">
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
                  Active
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Expand
                </th>
              </tr>
            </thead>
          </table>
          {UserDummy.map((user, index) => (
            <AccordionItem key={user.id} value={`item-${index}`}>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <tbody className=" text-center">
                  <tr
                    className="bg-white border-b hover:bg-gray-50"
                    key={user.id}
                  >
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                        />
                        <label
                          htmlFor="checkbox-table-search-1"
                          className="sr-only"
                        >
                          checkbox
                        </label>
                      </div>
                    </td>
                    <td className="px-6 py-4 ">{index}</td>
                    <td className="px-6 py-4 ">{user.id}</td>
                    <td className="px-6 py-4 ">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.avatar}
                        alt="User avatar"
                      />
                    </td>
                    <td className="px-6 py-4">{user.username}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        {user.active === true ? (
                          <>
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                            {""}
                            Online
                          </>
                        ) : (
                          <>
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                            Offline
                          </>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">{user.type} </td>
                    <td className="px-6 py-4">
                      <AccordionTrigger className="">Expand</AccordionTrigger>
                    </td>
                  </tr>
                </tbody>
                <AccordionContent className="bg-slate-100">
                  <div className="p-5 flex ">
                    <p>
                      Fist Name: <span>{user.firstName}</span>
                    </p>
                    <p>
                      Last Name: <span>{user.lastName}</span>
                    </p>
                    <p>
                      Email: <span>{user.email}</span>
                    </p>
                    <p>
                      Phone Number: <span>{user.phoneNumber}</span>
                    </p>
                    <p>
                      City: <span>{user.city}</span>
                    </p>
                    <p>
                      Country: <span>{user.country}</span>
                    </p>
                    <p>
                      Address: <span>{user.address}</span>
                    </p>
                  </div>
                </AccordionContent>
              </table>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Users;
