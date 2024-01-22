// Write your code here
import './index.css'

const TransactionItem = props => {
  const {itemDetails, deleteItem} = props
  const {title, amount, type, id, key} = itemDetails

  const getId = () => {
    deleteItem(id)
  }

  return (
    <li className="item-list-container" key={key}>
      <p className="item-p1">{title}</p>
      <p className="item-p1">Rs {amount}</p>
      <p className="item-p1">{type}</p>
      <button
        type="button"
        className="item-button"
        data-testid="delete"
        onClick={getId}
      >
        <img
          className="item-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
