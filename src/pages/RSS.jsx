import RSSHeader from "@/components/RSS/RSSHeader";
import RSSLeftSidebar from "@/components/RSS/RSSLeftSidebar";

const RSS = () => {
    return (
        <main className=" mx-auto">
            <RSSHeader />
            <div className="px-10">
                <RSSLeftSidebar />
            </div>
        </main>
    )
}

export default RSS;