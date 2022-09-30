import React from "react";

import deleteCaution from "../service/deleteCaution";

export default function CautionDelete(props) {
    console.log(props)
    const cautionId  = props.cautionId;
    const data = {'id': cautionId};

    const onClickHandler = async (data) => {
        const isDeleted = await deleteCaution(data)
        console.log(isDeleted)
        if(isDeleted.data.cautionDeleted) { 
            alert('cautela deletada com sucesso!')
            /**
             * Refresh table
             */
             window.location.reload();
            return 
        }

        alert('Erro ao deletar cautela!')
    }

    return (
        <div className="caution-delete">
            <div style={{cursor: 'pointer', fontWeight: 'bolder'}} onClick={e => onClickHandler(data)} >
                X
            </div> 
        </div>
    )
}