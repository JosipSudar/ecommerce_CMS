import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface UserCardProps {
  index: number;
  id: string;
  username: string;
  avatar: string;
  active: boolean;
  role: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
}

const UserCard = ({
  index,
  id,
  username,
  avatar,
  active,
  role,
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  city,
  country,
}: UserCardProps) => {
  return (
    <div className="bg-slate-50 rounded-lg shadow-sm my-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="flex items-center hover:no-underline p-5">
            {index}
            <span></span>
            {id}
            <div className="flex items-center gap-2">
              {username}
              <img src={avatar} alt={username} className="w-20 rounded-full" />
            </div>
            {active === true ? (
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{" "}
                Online
              </div>
            ) : (
              <div className="flex items-center">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>{" "}
                Offline
              </div>
            )}
            {role}
          </AccordionTrigger>
          <AccordionContent>
            <hr className="my-5" />
            <p className="p-5 text-lg font-bold text-center">Account Details</p>
            <div className="p-5 text-sm space-y-2 flex flex-col text-center">
              <p className="font-bold">First Name:</p>
              <span className="text-blue-500">{firstName}</span>
              <p className="font-bold">Last Name:</p>
              <span className="text-blue-500">{lastName}</span>
              <p className="font-bold">Email:</p>
              <span className="text-blue-500">{email}</span>
              <p className="font-bold">Phone Number:</p>
              <span className="text-blue-500">{phoneNumber}</span>
              <p className="font-bold">Address:</p>
              <span className="text-blue-500">{address}</span>
              <p className="font-bold">City:</p>
              <span className="text-blue-500">{city}</span>
              <p className="font-bold">Country:</p>
              <span className="text-blue-500">{country}</span>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default UserCard;
