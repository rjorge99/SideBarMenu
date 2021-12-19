import React from "react";
import { classNames } from "../utils/classes";

import "./sidebar-item.scss";

export const SideBarMenuItemView = ({ item, isOpen }) => {
    return (
        <div className="sidebar-menu-item">
            <a href={item.url}>
                <div
                    className={classNames(
                        "item-content",
                        isOpen ? "" : "collapsed"
                    )}>
                    <div className="icon">
                        <item.icon size="32" />
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </a>
            {!isOpen && <div className="tooltip">{item.label}</div>}
        </div>
    );
};
