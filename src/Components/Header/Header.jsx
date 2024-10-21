import profile from "../../assets/images/profile.png";
function Header(props) {
    return (
        <header className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h2 className="text-2xl font-semibold">Knowladge Cafe</h2>
            <img src={profile} alt="Login Image" />
        </header>
    );
}

export default Header;