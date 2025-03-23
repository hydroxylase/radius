import { BarChart2, File, Home, LogOut, Repeat } from "react-feather"
import { SidebarItem } from ".";
import { Activity, CreditCard, Settings} from "react-feather"

const Sidebar = () => {
    return(
        <section className="sidebar">
            <div className="group">
                <SidebarItem icon={<BarChart2 size={16}/>} label="Dashboard"/>
                <SidebarItem icon={<Repeat size={16}/>} label="Transactions"/>
                <SidebarItem icon={<CreditCard size={16}/>} label="Cards"/>
                <SidebarItem icon={<File size={16}/>} label="Invoice"/> 
                <SidebarItem icon={<Settings size={16}/>} label="Settings"/>    
            </div>
            <SidebarItem icon={<LogOut size={16}/>} label="Log out"/> 
            
        </section>
    );
}

export default Sidebar;