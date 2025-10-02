import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../constants/urlConstants";
import type { CalculationTypes } from "../hooks/useFetchCalculationData";

interface reduxType {
  loading: boolean;
  data: CalculationTypes[];
  error: null | string;
}

// 初期値
const initialState: reduxType = {
  loading: false,
  data: [],
  error: null,
};

// 非同期取得
export const fetchCalculationData = createAsyncThunk(
  `calculation`,
  async () => {
    const response = await fetch(`${API_URL}/calculation`);
    const data = response.json();
    return data;
  }
);

// 製品売り上げの合計値を取得する関数
const fetchCalculations = createSlice({
  name: "fetchCalculation",
  initialState,
  reducers: {},
  // createAsyncThunkなどはextraReducersに書く
  extraReducers: (builder) => {
    // 関数を呼び出し時に走る
    builder
      .addCase(fetchCalculationData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCalculationData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCalculationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "問い合わせに失敗しました";
      });
  },
});

export default fetchCalculations.reducer;
