import UserCard from "@/components/UserCard";
import Headline from "../components/Headline";
import { UserDummy } from "../utils/constants/UserDummy";

const Users: React.FC = () => {
  return (
    <div className="">
      <Headline title="Users Table" subtitle="Manage your users" />
      <div></div>
      <div className="p-10">
        {UserDummy.map((user, index) => (
          <UserCard
            key={user.id}
            index={index}
            id={user.id.toString()}
            username={user.username}
            avatar={user.avatar}
            active={user.active}
            role={user.type}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            phoneNumber={user.phoneNumber}
            address={user.address}
            city={user.city}
            country={user.country}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;
