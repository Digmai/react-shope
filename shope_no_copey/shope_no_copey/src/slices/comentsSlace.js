import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const st =  [
    { name: '1', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '2', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '3', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '4', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '5', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '6', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '7', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '8', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '9', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '10', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '11', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '12', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '13', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '14', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '15', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '16', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '17', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '18', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '19', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '20', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '21', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '22', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '23', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '24', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '25', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '26', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '27', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '28', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '29', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '30', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '31', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '32', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '33', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '34', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ,{ name: '35', text: "контент, который не должен нести никакого смысла, лишь показать наличие самого текста " }
   ]

const initialState = [[] , st , st , st , st , st ]
const comentsSlice = createSlice({
    name: "comentsSlice",
    initialState,
    reducers:{
        setComent: (state, action) => {
            state[action.payload.id]= [ ...(state[action.payload.id] || []) , ...action.payload.text] 
        }
    }
})

export const { setComent } = comentsSlice.actions
export default comentsSlice.reducer

export const pageComents = (state) => state.comment 
