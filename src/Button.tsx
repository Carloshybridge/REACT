import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    rounded?: boolean;
}

export default function Button({ children, rounded = false }: Props) {
    
    // Si rounded es true, forzamos un radio exagerado (9999px) estilo píldora.
    // Si es false, se queda vacío y no altera tu diseño original.
    const inlineStyle = rounded ? { borderRadius: '9999px' } : {};

    return (
        <button 
            className="btn-primary" 
            style={inlineStyle}
        >
            {children}
        </button>
    )
}