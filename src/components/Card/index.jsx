import {useCart} from 'react-use-cart'
import Button from '../../features/Atoms/Button/Button';
import styles from './Card.module.css'
import {IoMdClose} from 'react-icons/io'
function Cart({showCart,setShowCart}) {
    const {
      isEmpty,
      totalUniqueItems,
      items,
      updateItemQuantity,
      removeItem,
    } = useCart();
    
    function handleClose (){
      setShowCart(false)
    }
  
  
    return (
      <div  className={`${styles.addcard} ${showCart ? styles.addcardShow : ''}`}>
       <div className={styles.addcardTop}>
       <h1>Cart ({totalUniqueItems})</h1>
          <IoMdClose onClick={handleClose}/>
       </div>
        {
          isEmpty ? <p>Your cart is empty</p>:<ul>
          {items.map((item) => (
            <li className={styles.addcard_list} key={item.id}>
              {item.quantity} piece {item.title} 
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <Button

               
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                -
              </Button>
              <Button
               
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                +
              </Button>
              <Button onClick={() => removeItem(item.id)}>&times;</Button>
            </li>
          ))}
        </ul>
        }
      </div>
    );
  }

  export default Cart