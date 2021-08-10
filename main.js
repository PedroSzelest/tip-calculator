function App() {
    //---Calling the elements---
    //Left side
    const $bill = document.querySelector('.bill > input')
    const $tip5 = document.querySelector('.tip5')
    const $tip10 = document.querySelector('.tip10')
    const $tip15 = document.querySelector('.tip15')
    const $tip25 = document.querySelector('.tip25')
    const $tip50 = document.querySelector('.tip50')
    const $tip_custom = document.querySelector('.tip-custom')
    const $people = document.querySelector('.number-people')
    //Right side
    const $reset = document.querySelector('.reset')
    const $amount = document.querySelector('.amount-result')
    const $total = document.querySelector('.total-result')

    //---Calling the input values and doing counts---
    let tip_value = ''

    $tip_custom.addEventListener('blur', ()=> {
        tip_value = $tip_custom.value
    })

    if(tip_value === '') {

        $tip5.addEventListener('click', ()=> {
            tip_value = 5
        })
    
        $tip10.addEventListener('click', ()=> {
            tip_value = 10
        })
    
        $tip15.addEventListener('click', ()=> {
            tip_value = 15
        })
    
        $tip25.addEventListener('click', ()=> {
            tip_value = 25
        })
    
        $tip50.addEventListener('click', ()=> {
            tip_value = 50
        })
    }

    //Using the tips
    $reset.addEventListener('click', (e)=> {
        
        let value_bill = $bill.value
        let number_people = $people.value
    
        let tip_person = tip_value * (value_bill / number_people) / 100
    
        let total_person = (value_bill / number_people) - tip_person 
            
        tip_person = tip_person.toFixed(2).toString()
        total_person = total_person.toFixed(2).toString()

        $amount.textContent = tip_person
        $total.textContent = total_person
    })

}

App()