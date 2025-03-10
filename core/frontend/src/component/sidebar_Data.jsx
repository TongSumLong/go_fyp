import {
    FolderCopyRoundedIcon,
    LayoutIcon,
    DrawRoundedIcon,
} from "./sidebar_icon";

import globeVar from "../../GlobalVar";

const hardData = [
    {
        id: 1,
        name: "project folder",
        path: "folder",
        icon: <FolderCopyRoundedIcon />,
    },
    {
        id: 2,
        name: "project item",
        path: "project",
        icon: <LayoutIcon />,
    },
    {
        id: 3,
        name: "template editor",
        path: "editor",
        icon: <DrawRoundedIcon />,
    },
    /* 
    {
        id: 4,
        name: "terminal",
        path: "editor",
        icon: <TerminalIcon />,
    },
    */
];

const dataFetch = async () => {
    var list = [];
    try {
        const data = await (
            await fetch(
                `${globeVar.backendprotocol}://${globeVar.backendhost}/folder/list`,
                {
                    method: "POST",
                }
            )
        ).json();

        if (data) {
            data.map((val) =>
                list.push({
                    id: val._id,
                    name: val.name,
                    path: "folder",
                    icon: <FolderCopyRoundedIcon />,
                })
            );
        }
        return list.concat(hardData);
    } catch (error) {
        console.log("backend server error");
        return hardData;
    }
};

export const SIDEBAR_DATA = await dataFetch();
