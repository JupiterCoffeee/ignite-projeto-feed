import Logo from '../assets/Ignite-simbol.svg'

export function Navbar() {
    return (
        <>
            <nav className='bg-gray-600 w-full'>
                <header className='w-full flex items-center justify-center p-4'>
                    <a href='#'>
                        <img src={Logo} alt="Ignite Logo" className='w-6'/>
                    </a>
                </header>
            </nav>
        </>
    )
}