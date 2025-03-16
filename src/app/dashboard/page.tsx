import ToolDashboard from "@/components/dashboard/tool-dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard | StudentSuite",
    description: "Access your student tools and resources in one place",
};

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <ToolDashboard />
        </div>
    );
}
