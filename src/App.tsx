import React, {useEffect} from 'react';
import MapContainer from "./components/MapContainer";
import {WarehouseList} from "./components/WarehouseList";
import {RootState} from "./app/store";
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {fetchLocations, toggleSelected} from "./app/slices/warehouseSlice";
import {Navbar} from "./components/layout/Navbar";
import {BookComponent} from "./components/BookComponent";

function App() {
    const dispatch = useAppDispatch()
    const warehouseList = useAppSelector((state: RootState) => state.warehouse.list)

    useEffect(function firstLoading() {
        dispatch(fetchLocations())
    }, [])

    const onClickListElement = (marker) => {
        dispatch(toggleSelected(marker.id))
    }
    return (
        <div className="App d-flex">
            <Navbar/>
            <div className={'container-fluid'}>
                <div className={'row'}>
                    <div className={'col-sm-4'} style={{height: '100vh', overflow: 'auto'}}>
                        <h2 className={'mt-4 ms-3'}>Warehouse locations</h2>
                        <p className={'ms-3'}>Select some warehouses to book a space</p>
                        <WarehouseList list={warehouseList} onClickListElement={onClickListElement}/>
                        <BookComponent list={warehouseList.filter(marker => marker.selected === true)}/>
                    </div>
                    <div className={'col-sm-8'}>
                        {warehouseList.length ? <MapContainer markers={warehouseList}/> : <p>Loading</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
