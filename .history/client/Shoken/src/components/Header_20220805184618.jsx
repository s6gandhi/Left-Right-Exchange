import { useMoralis } from "react-moralis"


const Header = () => {
    const { enableWeb3 } = useMoralis()

    return (<div>
        <button onClick={async () => { await enableWeb3() }}>Connect

        </button>
    </div>
    )
}

export default Header;