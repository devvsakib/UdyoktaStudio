import { Code, Plus, Search, Slash } from "lucide-react";

const RSSHeader = () => {
    const menu = [
        "feed",
        "digest",
        "discover"
    ]
    return (<header className="py-4 flex items-center justify-between border-b border-black/5 px-12">

        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-lg bg-(--color-accent-hover) text-white flex items-center justify-center"><Code /></div>
                <p className="font-bold text-lg">Frontepage</p>
            </div>
            <div className="flex gap-2">
                <button className="capitalize font-semibold bg-(--color-text-secondary)/30 text-(--color-primary-secondary) px-2 py-1 rounded">Test Active</button>
                {
                    menu.map((i, x) =>
                        <button key={x} className="capitalize font-semibold py-1 text-(--color-text-tertiary) hover:bg-(--color-text-secondary)/30 hover:text-(--color-primary-secondary) rounded px-2">{i}</button>
                    )
                }
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="border border-black/10! py-2 rounded-lg flex items-center gap-2 px-2">
                <Search className="text-black/10" />
                <input
                    placeholder="Search articles..."
                    type="text"

                />

                <button className="p-2 rounded-md bg-white border border-black/10! text-center">
                    <Slash size={12} />
                </button>
            </div>
            <button className="p-2 rounded-lg bg-white border border-black/10! text-center">
                <Plus />
            </button>
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-(--color-accent) font-bold flex items-center justify-center">SA</div>

        </div>
    </header>);
};

export default RSSHeader;
