/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"

export const Container = (props: { children: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, className: string }) =>{
    return (
        <div className={`${props.className} w-full max-w-7xl mx-auto`} id="container">
            {props.children}
        </div>
    )
}