import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface QuoteItem {
  id: string;
  name: string;
  unit: string;
  variant: string | null;
  quantity: number;
  unitPrice: number;
  deliveryDate: string;
  selected: boolean;
}
export interface Client {
  name: string;
  address: string;
};

export interface Quote {
  id: string;
  items: QuoteItem[];
  client: Client;
  subTotal: number;
  total: number;
  status: string;
  paymentTerms: string | null;
  deliverySchedule: string | null;
  shippingMethod: string | null;
  leadTime: string | null;
}

export interface QuoteState {
  quotes: Quote[];
  currentQuote: Quote | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: QuoteState = {
  quotes: [],
  currentQuote: null,
  isLoading: false,
  error: null,
};

interface UpdateQuoteItemPayload {
  quoteId: string;
  itemId: string;
  field: keyof QuoteItem;
  value: any;
}

const quoteSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {
    setQuotes: (state, action: PayloadAction<Quote[]>) => {
      state.quotes = action.payload;
    },
    setCurrentQuote: (state, action: PayloadAction<Quote>) => {
      state.currentQuote = action.payload;
    },
    updateQuote: (state, action: PayloadAction<Quote>) => {
      state.currentQuote = action.payload;
      state.quotes = state.quotes.map((quote) =>
        quote.id === action.payload.id ? action.payload : quote
      );
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    updateQuoteItem: (state, action: PayloadAction<UpdateQuoteItemPayload>) => {
      const { quoteId, itemId, field, value } = action.payload;
      if (state.currentQuote && state.currentQuote.id === quoteId) {
        state.currentQuote.items = state.currentQuote.items.map((item) =>
          item.id === itemId ? { ...item, [field]: value } : item
        );
        // Recalculate totals
        const subTotal = state.currentQuote.items.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0
        );
        state.currentQuote.subTotal = subTotal;
        state.currentQuote.total = subTotal;
      }
      // Update in quotes array too
      state.quotes = state.quotes.map((quote) => {
        if (quote.id === quoteId) {
          return state.currentQuote!;
        }
        return quote;
      });
    },
    deleteQuoteItem: (
      state,
      action: PayloadAction<{ quoteId: string; itemId: string }>
    ) => {
      const { quoteId, itemId } = action.payload;
      if (state.currentQuote && state.currentQuote.id === quoteId) {
        state.currentQuote.items = state.currentQuote.items.filter(
          (item) => item.id !== itemId
        );
        // Recalculate totals
        const subTotal = state.currentQuote.items.reduce(
          (sum, item) => sum + item.quantity * item.unitPrice,
          0
        );
        state.currentQuote.subTotal = subTotal;
        state.currentQuote.total = subTotal;
      }
      // Update in quotes array too
      state.quotes = state.quotes.map((quote) => {
        if (quote.id === quoteId) {
          return state.currentQuote!;
        }
        return quote;
      });
    },
  },
});

export const {
  setQuotes,
  setCurrentQuote,
  updateQuote,
  setLoading,
  setError,
  updateQuoteItem,
  deleteQuoteItem,
} = quoteSlice.actions;

  // export const userDataActions = userDataSlice.actions;
  
  // export default userDataSlice.reducer;
  export default quoteSlice.reducer;
