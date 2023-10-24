type NavItemProps = {
    name: string;
    // link?: string;
};

function NavItem(props: NavItemProps) {
    const { name } = props;

    return (
        <li className="border-b-2 hover:border-primary cursor-pointer -pb-5 border-solid border-transparent">{name}</li>
    );
}

export default NavItem;
