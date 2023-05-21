import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            Home
            <Link to="/info-turistica">Info Turistica</Link>
        </div>
    );
}

export default Home;
