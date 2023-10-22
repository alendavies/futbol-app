type NavItemProps = {
    name: string;
    // link?: string;
};

function NavItem(props: NavItemProps) {
    const { name } = props;

    return <li className="hover:border-b-2 hover:border-primary hover:cursor-pointer h-full">{name}</li>;
}

export default NavItem;
