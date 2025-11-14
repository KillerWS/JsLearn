import { useState, useEffect  } from "react";


export function useDebounce(fn, delay = 3000){
    const timerRef = useRef(null);

    useEffect(()=>{
        if(timerRef.current) clearTimeout(timerRef.current)
    }, [])

    const debounceFn = (...args)=>{
        if (timerRef.current) clearTimeout(timerRef.current);

        timerRef.current = setTimeout(()=>{
            fn(...args)
        }, delay)
        
    }

    return debounceFn;
}