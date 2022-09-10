import { useNonInitialEffect } from "@/hooks/useNonInitialEffect.ts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SelectLocales from "../selects/SelectLocales";

const LocaleSwitcher = () => {
    const router = useRouter();
    const { pathname, query, asPath } = router;
    const { locales, locale } = router;

    const [ selectedLocale, setSelectedLocale ] = useState(locale);

    useNonInitialEffect(() => {
        router.push({pathname, query}, asPath, {locale: selectedLocale});
    }, [selectedLocale])

    return (
        <div>
            <SelectLocales value={selectedLocale} onChange={setSelectedLocale} items={locales}/>
        </div>
    );
}
 
export default LocaleSwitcher;