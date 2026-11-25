import { Outlet } from 'react-router'
import Header from './Header'

// ./ betyder "i samme mappe som mig". / betyder "helt oppe i roden"

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}


export default Layout
