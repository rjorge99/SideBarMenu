import React from "react";
import { classNames } from "../utils/classes";

import "./sidebar-card.scss";

export const SideBarMenuCardView = ({ card, isOpen }) => {
    return (
        <div className="sidebar-menucard">
            <img className="profile" src={card.photoUrl} width="100%" />
            <div
                className={classNames(
                    "profile-info",
                    isOpen ? "" : "collapsed"
                )}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
            </div>
        </div>
    );
};
