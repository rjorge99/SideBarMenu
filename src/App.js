import { SideBarMenu } from "./components/SideBarMenu";
import { FcAdvertising } from "react-icons/fc";
import profileImage from "./jorge.jpeg";

import "./styles/styles.scss";

export const App = () => {
    const items = [
        {
            id: "1",
            label: "Configuracion del sistema",
            icon: FcAdvertising,
            url: "/"
        }
    ];

    const card = {
        id: "card1",
        displayName: "Jorge",
        title: "Manager",
        photoUrl: profileImage,
        url: "/"
    };
    return (
        <>
            <SideBarMenu items={items} card={card} />
        </>
    );
};
