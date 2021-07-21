import React from "react";
import {toggleSelected} from "../app/slices/warehouseSlice";
import {useAppDispatch} from "../app/hooks";

export default function MarkerComponent({marker}) {
    const dispatch = useAppDispatch()
    const {name, selected, availability} = marker;

    const onClickListElement = () => {
        dispatch(toggleSelected(marker.id))
    }
    return <div className={`card`} style={{minWidth: 200}}>
        <div className={'card-header'}>
            {name}
        </div>
        <div className={'card-body'}>
            Availability: {availability}
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={selected}
                       onChange={() => onClickListElement()}/>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    select
                </label>
            </div>
        </div>
    </div>
}