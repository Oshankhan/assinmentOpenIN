
import { MdOutlineSpaceDashboard,MdOutlineFileUpload ,MdNotifications ,MdSettings } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa6";
import { AiOutlineSchedule } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";

export const SideBarItems=[{
    id:"1",
    icons:<MdOutlineSpaceDashboard size={26} color="grey" />,
    text:"Dashboad"
},
{
    id:"2",
    icons:<MdOutlineFileUpload size={26} color="grey" />,
    text:"Upload"
},
{
    id:"3",
    icons:<FaFileInvoice size={26} color="grey"/>,
    text:"Invoice"
},{
    id:"4",
    icons:<AiOutlineSchedule size={26} color="grey"/>,
    text:"Schedule"
},{
    id:"5",
    icons:<SlCalender size={26} color="grey"/>,
    text:"Calender"
},{
    id:"6",
    icons:<MdNotifications size={26} color="grey"/>,
    text:"Notifications"
},
{
    id:"7",
    icons:<MdSettings size={26} color="grey"/>,
    text:"Settings"
},
]
