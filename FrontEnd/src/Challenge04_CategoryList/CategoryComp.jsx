import { useState } from "react"

export const GifExpertApp = () => {

    const[categories,setCategories] = useState([])
    const[category,setCategory] = useState('')
    const onAddCategory = () =>{
        setCategories(list => [...list,category] )
        setCategory('')
    }
    const onSetCategory = (evt) => {
        setCategory (evt.target.value)
    }
    const onResetList = () =>{
        setCategories ([])
    }
    return (
        <>
            <h1>Add Category</h1>
            <input type="text" value={category}
                onChange = {(event)=> onSetCategory(event)}/>
            <button onClick={()=> onAddCategory()}> Save New Category </button> 
            <h1>Category List</h1>
            {categories.length> 0 ? <>

                <ol>
                {
                    categories.map(
                        (category,key) => {
                            return <li key = {key}> {category} </li>
                        }
                    )
                }
                </ol>
                <button onClick={()=> onResetList()}>Reset list</button>
            
            </>
            :<p>the list is empty</p>}
        </>
    )


}