import React, {useEffect, useState} from "react";
import Modal from 'react-modal';

export function BookComponent({list}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [totalSpace, setTotalSpace] = useState(0)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        let tmpSpace = 0
        for (let item of list) {
            tmpSpace = tmpSpace + item.availability;
        }
        setTotalSpace(tmpSpace)
    }, [list])

    return <>
        <button className={'btn btn-primary m-3 w-100'} onClick={openModal} disabled={totalSpace === 0}>Book selected
            Warehouses
        </button>

        <Modal
            isOpen={totalSpace !== 0 && modalIsOpen}
            onRequestClose={closeModal}
            style={{content: {zIndex: 9, maxWidth: 600, margin: 'auto'}}}
            ariaHideApp={false}
        >
            <h3>Selected warehouses</h3>
            {list.map((marker, i) =>
                <div key={i}>
                    <div className="d-flex w-100 align-items-center justify-content-between">
                        <strong className="mb-1">{marker.name}</strong>
                    </div>
                    <div className="col-10 mb-1 small">
                        Lat: {marker.position.lat} / Lng: {marker.position.lng}
                    </div>
                </div>
            )}
            <hr/>
            Total slots available: {totalSpace}

            <div className="form-floating mb-3">
                <input type="number" className="form-control" max={totalSpace} step={1} id="floatingInput"
                       placeholder=""/>
                <label htmlFor="floatingInput">Slots to book</label>
            </div>
            <div className={'d-flex justify-content-between'}>
                <button className={'btn btn-success'} onClick={closeModal}>Submit</button>
                <button className={'btn btn-danger'} onClick={closeModal}>Cancel</button>
            </div>
        </Modal>

    </>

}