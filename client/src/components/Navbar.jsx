import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center mb-6">
                <NavLink to="/">
                    <img alt="Logo placeholder" className="h-10" src="https://placehold.co/600x400" />
                </NavLink>
                <NavLink
                    className="inline-flex items-center justify-center 
                whitespace-nowrap text-md fondt-medium ring-offset-background 
                transition-colors focuse-visible:outline-none
                focus-visible:ring-2 focuse-visible:ring-ring
                focuse-visible:ring-offset-2 disabled:pointer-events-none
                disabled:opacity-50 border border-input bg-background
                hover:bg-slate-100 h-9 rounded-md px-3"
                    to="/create"
                >
                    Create Employee
                </NavLink>
            </nav>
        </div>
    );
};

export default Navbar;
