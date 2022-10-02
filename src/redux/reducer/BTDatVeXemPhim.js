

const initialState = {
    DSGheDangDat: [
        
    ]
}

export const BTDatVeXemPhim = (state = initialState,action) =>{
    switch (action.type) {
        case "DAT_GHE" :{
            let DSGheUpdate = [...state.DSGheDangDat];
            let index = DSGheUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if(index !== -1){
                DSGheUpdate.splice(index,1);
            }else{
                DSGheUpdate.push(action.ghe)
            }
            state.DSGheDangDat = DSGheUpdate;
            return {...state};
        }

        case "HUY_GHE":{
            let DSGheDangDatUpdate = [...state.DSGheDangDat];
            let index = DSGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe)
            if(index !== -1){
                DSGheDangDatUpdate.splice(index,1)
            }

            state.DSGheDangDat = DSGheDangDatUpdate;
            return {...state}
        }
        default:
            return state;
    }
}



