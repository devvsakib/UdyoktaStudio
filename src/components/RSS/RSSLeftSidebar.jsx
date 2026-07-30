import React from "react";
import data from "/src/data/sample-feeds.json"
import { BookMarked, Wallet } from "lucide-react";

const RSSLeftSidebar = () => {
    // console.log(data)

    return <div>
        <div>
            <div>
                <div className="flex items-center gap-2">
                    <Wallet />
                    <p>All Items</p>
                </div>
                {/* <BookMarked /> */}
            </div>
        </div>
    </div>;
};

export default RSSLeftSidebar;
