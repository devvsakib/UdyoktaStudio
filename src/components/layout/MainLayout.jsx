import React from "react";
import { Link, Outlet } from "react-router-dom";
import MainHeader from "@/components/MainHeader";
import MainFooter from "@/components/MainFooter";
import { Toaster } from "sonner";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
        <Toaster
          // theme=  bg-linear-to-br
          //                   from-purple-500/40 via-purple-500/10 to-slate-950
          //                   backdrop-blur-2xl p-8 shadow-[0_24px_80px_rgba(88,28,135,0.85)]

          position="top-center"
          className="bg-linear-to-br from-purple-500/40 via-purple-500/10 to-slate-950 backdrop-blur-2xl p-8 shadow-[0_24px_80px_rgba(88,28,135,0.85)]"
        />
        <MainHeader />
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
          <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
        </div>
        <Outlet />
        <MainFooter />
    </div>
  );
};

export default MainLayout;
