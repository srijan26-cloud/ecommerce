import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
        return (
            <div className='header'>
                <Link to='#'>
                    <i class="fa fa-bars" aria-hidden="true"></i>
                </Link>
                <input className='searchin'
                            placeholder='Search for products,brands and more'
                            autoFocus
                    />
                 <div class='left-side'>
                    <Link to='/Login'>
                            <i class="fa fa-user-o" aria-hidden="true" ></i>
                    </Link>
                    <Link to='/Cart'>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                    </Link>
                    
                </div>
            </div>
        )
    
}

export default Header
