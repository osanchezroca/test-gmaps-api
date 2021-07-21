import React from "react";

export function WarehouseList({list, onClickListElement}) {
    return <div className="list-group list-group-flush border-bottom scrollarea">

        {list.map((marker, i) =>
            <button key={i} onClick={() => onClickListElement(marker)}
                    className={`list-group-item list-group-item-action py-3 lh-tight${marker.selected ? ' bg-primary text-light' : null}`}
                    aria-current="true">
                <div className="d-flex w-100 align-items-center justify-content-between">
                    <strong className="mb-1">{marker.name}</strong>
                </div>
                <div className="col-10 mb-1 small">
                    Lat: {marker.position.lat} / Lng: {marker.position.lng}
                </div>
            </button>
        )}
    </div>

}