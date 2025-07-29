import { useEffect, useState } from "react";

/*
- Membuat Custom Hook, untuk mengecek status browser sedang online(terhubung ke internet) atau offline.
*/
export function useOnline() {
    const [isOnline, setOnline] = useState(true);

    useEffect(() => {
        function handleOnline() {
            setOnline(true);
        }

        function handleOffline() {
            setOnline(false);
        }

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    }, []);

    return isOnline;
}