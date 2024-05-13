import Link from 'next/link'
import Image from 'next/image' // Import the Image component from the 'next/image' package

const Navbar = () => {
    return (
        <nav className='border-2 border-red-500 flexBetween max-container padding-container relative z-30 py-5'>
            <Link href="/" >
                <Image src="/logo.jpg" alt='logo' width={74} height={29}/>
            </Link>

           <ul className="hidden h-full gap-12 lg:flex">
                
            </ul>
        </nav>
    )
}

export default Navbar
