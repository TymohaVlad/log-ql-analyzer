import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface logsFormatState{
    logsFormat: string
}

const initialState: logsFormatState = {
    logsFormat: 'logfmt',
}

const logsFormatSlice = createSlice({
  name: 'logsFormat',
  initialState,
  reducers: {
    setLogFormat: (state, action: PayloadAction<string>) => {
      state.logsFormat = action.payload;
    },
  },
});

export const { setLogFormat } = logsFormatSlice.actions;
export default logsFormatSlice.reducer;