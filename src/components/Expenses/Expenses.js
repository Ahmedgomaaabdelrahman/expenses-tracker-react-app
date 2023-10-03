import ExpenseItem from "./ExpenseItem/ExpenseItem"
import './Expenses.css'

const Expenses = (props) => {
    return ( 
        <div className="expenses">
            {props.expenses.map((expense) => ( <ExpenseItem expense={expense}></ExpenseItem> ))}
        </div>
        
    )
}
export default Expenses;