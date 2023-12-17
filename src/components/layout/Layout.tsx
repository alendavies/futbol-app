import { ReactNode } from 'react';
import NavItem from './NavItem';
import { Search } from 'lucide-react';
import { Button, Input } from '../ui';
import { Link, Outlet } from "react-router-dom";

const navItems = [
    {
        name: "Matches",
        link: "matches"
    },
    {
        name: "Teams",
        link: "teams"
    },
    {
        name: "Competitions",
        link: "competitions"
    }
] as const;

function Layout({ children }: { children?: ReactNode }) {
    return (
        <div>
            <header className='bg-black border-b-2 border-b-secondary flex justify-between h-20 text-white p-5'>
                <div className='flex items-center space-x-7'>
                    <Link to={"/futbol-app"}>
                        <div className=''>
                            <svg className='h-5 flex cursor-pointer' fill='#e1ff57' viewBox='0 0 153 20'>
                                <path d='M55.82 4.19h8.71v2.644h-5.79v1.691h5.473v2.551h-5.472v1.917h5.79v2.643H55.82V4.19Zm10.706 11.4h2.901v-4.533h4.838V8.506h-4.811V6.807h5.617V4.164h-8.545V15.59Zm33.361-8.776h3.305v8.776h2.908V6.814h3.304V4.17h-9.517v2.644Zm20.488 5.412c0 1.93-1.183 3.37-3.867 3.37h-5.637V4.19h5.466c2.544 0 3.747 1.44 3.747 3.133a2.564 2.564 0 0 1-1.144 2.233v.357c.428.227.786.565 1.038.977.252.413.389.886.397 1.37v-.034Zm-6.609-3.674h2.194c.621 0 1.156-.225 1.156-.972 0-.746-.555-.971-1.156-.971h-2.135V8.59l-.059-.04Zm3.615 3.529c0-.846-.575-1.137-1.322-1.137h-2.313v2.207h2.267c.661 0 1.322-.257 1.322-1.07h.046Zm18.557-7.891h-2.901v11.433h7.818v-2.808h-4.917V4.19Zm9.431 8.625V4.223h-2.908v11.433h7.865v-2.841h-4.957ZM87.086 9.953a5.776 5.776 0 1 1-5.776-5.908 5.842 5.842 0 0 1 5.776 5.908Zm-2.736 0a3.045 3.045 0 0 0-4.252-2.996 3.045 3.045 0 0 0-1.828 2.996 3.046 3.046 0 1 0 6.08 0Zm15.2 0a5.777 5.777 0 1 1-5.776-5.908 5.842 5.842 0 0 1 5.776 5.908Zm-2.73 0a3.046 3.046 0 1 0-6.086 0 3.046 3.046 0 1 0 6.087 0Zm-55.95-.08a5.777 5.777 0 1 1-11.545 0 5.776 5.776 0 1 1 11.546 0Zm-2.729 0a3.046 3.046 0 1 0-6.087 0 3.05 3.05 0 0 0 3.044 3.19 3.047 3.047 0 0 0 3.043-3.19Zm12.557 5.182L48.035 4.203h-5.552V15.59h2.809V4.943l2.743 10.654h5.525V4.203h-2.81v10.852h-.052Zm78.334-10.726 2.855 11.294h-2.855l-.7-2.69h-4.025l-.661 2.69h-2.855l2.934-11.294h5.307Zm-1.322 6.16-1.401-5.407-1.368 5.406h2.769ZM13.682 0 6.835 19.595h4.937L18.625 0h-4.943Zm8.935 15.775a4.005 4.005 0 1 1-3.965-4.044 4.018 4.018 0 0 1 3.965 4.044ZM8.104 0a5.604 5.604 0 0 1-6.258 4.012L.306 8.387C7.747 9.299 11.078 5.61 12.922 0H8.104Z'></path>
                            </svg>
                        </div>
                    </Link>
                    <nav className='p-2 h-full'>
                        <ul className='flex space-x-5 h-full'>
                            {navItems.map(item => (
                                <Link to={`/futbol-app/${item.link}`}>
                                    <NavItem name={item.name} />
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center space-x-3 border-r-2 border-r-secondary pr-6'>
                    <Input placeholder='Search...' />
                    <div>
                        <Button className='grow' variant='secondary' size='icon'>
                            <Search />
                        </Button>
                    </div>
                </div>
                <div className='flex items-center'>
                    <Button variant='secondary'>Login</Button>
                </div>
            </header>
            <main className='p-10 h-full flex bg-black text-primary-foreground'>
                {children}
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
