// <reference types="vite-plugin-svgr/client" />

declare module '*.svg?react' {
    import type React from 'react'

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}