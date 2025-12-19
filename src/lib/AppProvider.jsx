import { AppContext } from "@/hooks/useApp";
import translations from "@/utils/translation";
import { useMemo, useState } from "react";


function AppProvider({ children }) {
    const [lang, setLang] = useState('en');
    const [theme, setTheme] = useState('dark');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const t = useMemo(() => translations[lang], [lang]);
console.log(t, "t")
console.log(lang, "lang")
    return (
        <AppContext.Provider value={{ lang, setLang, theme, setTheme, t, mobileMenuOpen, setMobileMenuOpen }}>
            {children}
        </AppContext.Provider>
    );
}
export default AppProvider;