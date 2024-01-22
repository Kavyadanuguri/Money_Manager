// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenses} = props

  return (
    <div className="ul-money">
      <li className="money-list-container1">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="money-image1"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount" className="money-p1">
            Rs {income - expenses}
          </p>
        </div>
      </li>
      <li className="money-list-container2">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="money-image1"
          />
        </div>
        <div>
          <p> Your Income</p>
          <p data-testid="incomeAmount" className="money-p1">
            {' '}
            Rs {income}
          </p>
        </div>
      </li>
      <li className="money-list-container3">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="money-image1"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount" className="money-p1">
            Rs {expenses}
          </p>
        </div>
      </li>
    </div>
  )
}

export default MoneyDetails
