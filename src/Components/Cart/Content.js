import { Link } from 'react-router-dom'
import './Content.css'

const Content = () => {
        return (
            <div className='Content'>
                <h3>
                  Nothing here, Cart is empty..
                </h3>
                <Link to='/'>
                    <i class="fa fa-home" aria-hidden="true"></i>
                </Link>  
            </div>
        )
}

export default Content
