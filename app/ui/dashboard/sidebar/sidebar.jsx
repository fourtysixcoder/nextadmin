import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Plantation",
        path: "/dashboard/plantation",
        icon: <MdDashboard />,
      },
      {
        title: "Palm Tree",
        path: "/dashboard/palmtree",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      // {
      //   title: "Revenue",
      //   path: "/dashboard/revenue",
      //   icon: <MdDashboard />,
      // },
      {
        title: "Reports",
        path: "/users",
        icon: <MdAnalytics />,
      },
      {
        title: "team",
        path: "/dashboard/team",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/setting",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt="" width="50" height="50"></Image>
        <div className={styles.userDetail}>
          <span className={styles.username}>Ahmad Khan</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
