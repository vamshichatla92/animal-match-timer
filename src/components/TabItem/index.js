const TabItem = (props) => {
    const {tabDetails,activeAnimal} = props 
    const {tabId,displayText} = tabDetails 
    const onChangeCategory = () => {
        activeAnimal(tabId)
    }
    return (
        <li>
            <button onClick={onChangeCategory}>{displayText}</button>
        </li>

    )
}


export default TabItem