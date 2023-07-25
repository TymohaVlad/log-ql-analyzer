import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ResultQueryState {
  response: {
    stream_selector: string;
    stages: string[];
    results: QueryTypes[];
  };
}

export interface QueryTypes {
  origin_line: string;
  stage_records: {
    filtered_out: boolean;
    labels_after: { name: string; value: string }[];
    labels_before: { name: string; value: string }[];
    line_after: string;
    line_before: string;
  }[];
}

const initialState: ResultQueryState = {
  response: {
    stream_selector: '',
    stages: [],
    results: [],
  },
};

const resultQuerySlice = createSlice({
  name: 'resultQuery',
  initialState,
  reducers: {
    setResultQuery: (
      state,
      action: PayloadAction<ResultQueryState['response']>
    ) => {
      state.response = action.payload;
    },
  },
});

export const { setResultQuery } = resultQuerySlice.actions;
export default resultQuerySlice.reducer;
