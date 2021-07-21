import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../store';

export interface Marker {
    id: number,
    name: string,
    position: { lat: number, lng: number },
    selected: boolean
    availability: number
}

export interface WarehouseState {
    list: Marker[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: WarehouseState = {
    list: [],
    status: 'idle',
};


export const fetchLocations = createAsyncThunk('warehouse/fetchLocations', async () => {
        return [
            {id: 1, name: 'Viladecans', position: {lat: 41.3309848, lng: 2.1261853}, selected: false, availability: 50},
            {id: 2, name: 'Pamplona', position: {lat: 42.8157961, lng: -1.6675312}, selected: false, availability: 20},
            {id: 3, name: 'Valencia', position: {lat: 39.4078969, lng: -0.431551}, selected: false, availability: 30},
            {id: 4, name: 'Cáceres', position: {lat: 39.4786612, lng: -6.4515147}, selected: false, availability: 2},
        ]
    }
);

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        toggleSelected: (state, action) => {
            const id = action.payload
            let selectedItem = state.list.find(item => item.id === id);
            selectedItem.selected = !selectedItem.selected
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocations.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchLocations.fulfilled, (state, action) => {
                state.status = 'idle';
                state.list = action.payload;
            });
    },
});

export const {toggleSelected} = warehouseSlice.actions;

export default warehouseSlice.reducer;
