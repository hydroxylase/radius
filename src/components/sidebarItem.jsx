import { Link } from "react-router-dom";

const SidebarItem = ({icon, label, to}) => {
    return(
    <Link to={to} className="sidebar-item">
        {icon}
        <p>{label}</p>
     </Link>
    );
}

export default SidebarItem;