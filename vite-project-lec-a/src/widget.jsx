//  inject variables and js 
function Widget(){
    const userName = "from spring boot"
    return (
        // React is ready {userName} this is evaluation expression means final outcome you cant do any logical computation here 
        <h1>React is ready {userName}</h1>
    )
}

export default Widget