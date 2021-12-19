import { useState } from "react";
import { classNames } from "../utils/classes";
import { VscMenu } from "react-icons/vsc";
import { SideBarMenuCardView } from "./SideBarMenuCardView";
import { SideBarMenuItemView } from "./SideBarMenuItemView";

import "./sidebar-menu.scss";

export const SideBarMenu = ({ items, card }) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleToggleClick = (e) => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={classNames(
                "sidebar-menu",
                isOpen ? "expanded" : "collapsed"
            )}>
            <div className="menu-button">
                <button className="toggle-button" onClick={handleToggleClick}>
                    <VscMenu />
                </button>
            </div>

            <SideBarMenuCardView card={card} isOpen={isOpen} />
            {items.map((item) => (
                <SideBarMenuItemView
                    key={item.id}
                    item={item}
                    isOpen={isOpen}
                />
            ))}
        </div>
    );
};
