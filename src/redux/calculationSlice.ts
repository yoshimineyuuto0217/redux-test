import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../constants/urlConstants";
import type { CalculationTypes } from "../hooks/useFetchCalculationData";
import type { TotallingTypes } from "../hooks/useFetchTotallingData";

// 初期値の型
export interface reduxType {
  loading: boolean;
  error: null | string;
  lastFetched: number | null;
  cData: CalculationTypes[];
  tDate: TotallingTypes[];
}

// 初期値
const initialState: reduxType = {
  loading: false,
  cData: [],
  error: null,
  lastFetched: null,
  tDate: [],
};

// 非同期取得 | 製品の売り上げ金額を取得してるもの
export const fetchCalculationData = createAsyncThunk(
  "calculation",
  async () => {
    const response = await fetch(`${API_URL}/calculation`);
    const calculationData = response.json();
    return calculationData;
  }
);

// 非同期取得 | 製品の生産合計を取得してるもの
export const fetchTotalling = createAsyncThunk("totalling", async () => {
  const response = await fetch(`${API_URL}/product/summary`);
  const totallingData = response.json();
  return totallingData;
});

// 製品売り上げの合計値を取得する関数
const fetchCalculations = createSlice({
  name: "fetchCalculation",
  initialState,
  reducers: {},
  // createAsyncThunkなどはextraReducersに書く
  extraReducers: (builder) => {
    // 関数を呼び出し時に走る
    builder
      // 製品の売り上げ金額の情報を保持
      .addCase(fetchCalculationData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCalculationData.fulfilled, (state, action) => {
        state.loading = false;
        state.cData = action.payload;
        state.lastFetched = Date.now();
      })
      .addCase(fetchCalculationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "問い合わせに失敗しました";
      })
      // 製品生産合計
      .addCase(fetchTotalling.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTotalling.fulfilled, (state, action) => {
        state.loading = false;
        state.tDate = action.payload;
      })
      .addCase(fetchTotalling.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "生産合計の取得に失敗しました";
      });
  },
});

export default fetchCalculations.reducer;
