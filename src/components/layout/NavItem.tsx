type NavItemProps = {
    name: string;
    // link?: string;
};

function NavItem(props: NavItemProps) {
    const { name } = props;

    return <li className="hover:text-primary hover:cursor-pointer">{name}</li>;
}

export default NavItem;
