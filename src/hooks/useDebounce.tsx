import { useRef } from 'react'

function useDebounce(fn: Function, delay: number) {
    const timeoutRef = useRef(null as any)

    function debounceFn(...args: any){
        window.clearTimeout(timeoutRef.current)
        timeoutRef.current = window.setTimeout(() => {
            fn(...args)
        }, delay)
    }
    return debounceFn
}

export default useDebounce;