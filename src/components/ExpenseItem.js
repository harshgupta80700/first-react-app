import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className = "expense-item">
            <div className = "expense-item__description">
                <div>Date</div>
                <h2>Title</h2>
            </div>
            <div className = "expense-item__price">Price</div>
        </div>
    );
}


export default ExpenseItem;