import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface logsFormatState{
    logsFormat: string
    logs: string
}

const initialState: logsFormatState = {
    logsFormat: 'logfmt',
    logs: ''
}

const logsFormatSlice = createSlice({
  name: 'logsFormat',
  initialState,
  reducers: {
    setLogFormat: (state, action: PayloadAction<string>) => {
      state.logsFormat = action.payload;
    },
    setLogs:(state,action: PayloadAction<string>) => {
      state.logs = action.payload
    }
  },
});

export const { setLogFormat, setLogs } = logsFormatSlice.actions;
export default logsFormatSlice.reducer;