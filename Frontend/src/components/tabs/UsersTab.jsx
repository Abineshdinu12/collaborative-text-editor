
import Users from "@/components/common/Users"
import useWindowDimensions from "@/hooks/useWindowDimensions"


function UsersTab() {
    const { tabHeight } = useWindowDimensions()




    return (
        <div className="flex flex-col p-4" style={{ height: tabHeight }}>
            <h1 className="tab-title">Users</h1>
            {/* List of connected users */}
            <Users />
            </div>
    )
}

export default UsersTab
