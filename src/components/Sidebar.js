import React,{useState,useEffect} from 'react'
import "./Sidebar.css";
import SidebarOption from "./SidebarOption"
import CreateIcon from "@material-ui/icons/Create"
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add"
import db from "../firebase";
import { useStateValue } from '../StateProvider';


const Sidebar = ()=> {

    const [channels,setChannels] = useState([]);
    const [showchannels,setShowchannels] = useState(false);
    const [{user},dispatch] = useStateValue()

    useEffect(() => {
            db.collection("rooms").onSnapshot(snapshot=>(
                setChannels(snapshot.docs.map(doc =>({
                    id:doc.id,
                    name:doc.data().name,
                })))
            ))
    }, [])

    return (
        <div className="sidebar">

                <div className="sidebar__header">
                    <div className="sidebar__info">
                        <h2>{user?.displayName}</h2>
                        <h3>
                            <FiberManualRecordIcon/> {user?.email}
                        </h3>
                    </div>
                    <CreateIcon/>
                    
                </div>
                <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
                <SidebarOption Icon={DraftsIcon} title="Mentions & reactions"/>
                <SidebarOption Icon={BookmarkBorderIcon} title="Saved items"/>
                <SidebarOption Icon={FileCopyIcon} title="Channel browser"/>
                <SidebarOption Icon={PeopleAltIcon} title="People & user groups"/>
                <SidebarOption Icon={AppsIcon} title="Apps"/>
                <SidebarOption Icon={InsertCommentIcon} title="File browser"/>
                <SidebarOption Icon={ExpandLessIcon} title="Show less"/>
                <hr/>
                <div onClick={() => { setShowchannels(!showchannels)}}>
                  <SidebarOption Icon={ExpandMoreIcon} title="Channels    "/>
                </div>
                <hr/>
                { showchannels ?(channels.map(channel => (

                <SidebarOption title={channel.name} id={channel.id}/>
                ))) :(<></>) }
                <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
                  
        </div>
    )
}

export default Sidebar;