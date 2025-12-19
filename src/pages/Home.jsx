import React, { useState, createContext, useContext } from 'react';
import { Zap, Shield, Smartphone, TrendingUp } from 'lucide-react';
import MainHeader from '@/components/MainHeader';
import Hero from '@/components/home/Hero';
import Problem from '@/components/home/Problem';
import Solution from '@/components/home/Solution';
import Demo from '@/components/home/Demo';
import Services from '@/components/home/Services';
import TechStack from '@/components/home/TechStack';
import Process from '@/components/home/Process';
import Contact from '@/components/home/Contact';
import MainFooter from '@/components/MainFooter';
import { useApp } from '@/hooks/useApp';
import Pricing from '@/components/home/Pricing';

export default function Home() {
    const { theme } = useApp();

    return (
        <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
            <Hero />
            <Problem />
            <Solution />
            <Demo />
            <Services />
            <TechStack />
            <Process />
            <Pricing />
            <Contact />
        </div>
    );
}
