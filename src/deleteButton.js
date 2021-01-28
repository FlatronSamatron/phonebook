import { useState } from 'react'
import * as Icon from 'react-bootstrap-icons';

const DeleteButton = ({id,deleteNumber}) => {

    const [del, setDel] = useState(false)

    const delOrNot = () => {
        setDel(!del)
    }

    return (
        <div>
            {del ? 
            <div className="delOrNo">
                <Icon.Check className="icon" style={{color:'green', fontSize: '35px'}} onClick={()=>deleteNumber(id)}/>
                <Icon.X className="icon" style={{color:'red', fontSize: '35px'}} onClick={delOrNot}/>
            </div>
            :
            <Icon.Trash className="icon" onClick={delOrNot}/>}
        </div>
    )
}

export default DeleteButton

