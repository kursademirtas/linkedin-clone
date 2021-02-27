import React from 'react';
import  './header.css';
import {Message, Work, Notifications, Search, Home, Apps, LinkedIn, GroupWork,Person }from '@material-ui/icons/';


function Header () {
    return (
        <div className="header">
            <div className="header_left">
                <LinkedIn color="primary" style={{fontSize:32}} />
                <div className="search_container">
                    <Search />
                    <input type="text" className="search_input" placeholder="Search" />
                
                </div>
            </div>
            <div className="header_right">
                <div className="menu_item_container">
                     <Home style={{fontSize:24}} />
                    <span>Home</span>
                </div>
                <div className="menu_item_container">
                     <GroupWork style={{fontSize:24}}/>
                     <span>My Network</span>
                </div>
                <div className="menu_item_container">
                     <Work style={{fontSize:24}} />
                     <span>Jobs</span>
                </div>
                <div className="menu_item_container">
                     <Message style={{fontSize:24}}/>
                     <span>Messages</span>
                </div>
                <div className="menu_item_container">
                     <Notifications style={{fontSize:24}}/>
                     <span>Notifications</span>

                </div>
                <div className="menu_item_container">
                     <Person style={{fontSize:24}}/>
                     <span>Me</span>
                </div>
                <div className="menu_item_container border_left">
                    <Apps style={{fontSize:24}} />
                    <span>Apps</span>
                </div>
                <div className="menu_item_container">
                     <p>Try Premium Free for a month. </p>
                </div>
                
            </div>
        </div>
    )
}

export  default Header;