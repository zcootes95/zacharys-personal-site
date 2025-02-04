import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div>
            <h1>Zachary Cootes</h1>
            <div>
                <button>
                    <Link to='/projects'>Projects</Link>
                </button>
                <button>
                    <Link to='/about'>About</Link>
                </button>
                <button>
                    <Link to='/swimming'>Swimming</Link>
                </button>
                <button>
                    <Link to='/ascii-art'>Ascii Art</Link>
                </button>
                <button>
                    <Link to='/contact'>Contact</Link>
                </button>
            </div>
        </div>
    )
}

export default HomeScreen
