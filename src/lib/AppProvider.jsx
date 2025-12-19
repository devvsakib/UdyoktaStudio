import { AppContext } from "@/hooks/useApp";
import translations from "@/utils/translation";
import { useState } from "react";


function AppProvider({ children }) {
    const [lang, setLang] = useState('en');
    const [theme, setTheme] = useState('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const t = translations[lang];

    return (
        <AppContext.Provider value={{ lang, setLang, theme, setTheme, t, mobileMenuOpen, setMobileMenuOpen }}>
            {children}
        </AppContext.Provider>
    );
}
export default AppProvider;