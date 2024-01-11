import { Toaster } from 'react-hot-toast'
import { Colors } from '@/constants'
import { Manrope } from 'next/font/google'

const manrope = Manrope({ subsets: ['latin'] })

export function ToastAtom() {
    return (
        <Toaster
            toastOptions={{
                duration: 10000,
                style: {
                    padding: '10px 20px',
                    backgroundColor: Colors.DARK_GREY,
                    color: Colors.WHITE,
                    fontFamily: manrope.style.fontFamily,
                },
            }}
            position="bottom-right"
            reverseOrder={false}
        />
    )
}
