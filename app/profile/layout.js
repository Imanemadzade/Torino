"use client";

import SideBar from "@/template/Profile/SideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "components/partials/providers/AuthProvider";

const queryClient = new QueryClient();

function ProfileLayout({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <div className=" flex flex-col md:flex-row px-2.5">
          <SideBar />
          <div>{children}</div>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default ProfileLayout;
