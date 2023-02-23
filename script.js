let family = {
    incomes: [3000, 200, 150.50],
    expenses: [500, 100, 100, 200, 30, 70, 50.99, 1000, 100, 200]
}

function sum(array){
    let total = 0;
    for(let value of array){
        total += value;
    };
    return total;
}

function calculateBalance(){
    const calculateIncomes = sum(family.incomes);
    const calculateExpenses = sum(family.expenses);
    const total = calculateIncomes - calculateExpenses;
    const itsOk = total >= 0;
    let balanceText = "negativo"
    if(itsOk){
        balanceText = "positivo"
    } else {
        balanceText;
    }

    console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`);
}

calculateBalance();