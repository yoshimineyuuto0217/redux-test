import { BrowserRouter, Route, Routes } from "react-router-dom";
import Top from "./pages/top/Top";
import Register from "./pages/register/Register";
import List from "./pages/list/List";
import DashBoard from "./pages/dashboard/DashBoard";
import Form from "./pages/from/Form";
import Jotai from "./pages/jotai/Jotai";
import ApiJotai from "./pages/jotai/ApiJotai";
import NestJotai from "./pages/jotai/NestJotai";
import ZustandNest from "./pages/zustand/ZustandNest";
import Zustand from "./pages/zustand/Zustand";
import Story from "./pages/story/Story";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Observer from "./pages/observer/Observer";
import TanStack from "./pages/tanStack/TanStack";
import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import ZodForm from "./pages/zod/zodForm";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 1000 * 6 * 5,
      },
    },
  });
  const asyncStoragePersister = createAsyncStoragePersister({
    storage: AsyncStorage,
  });

  return (
    <>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: asyncStoragePersister }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Top />} />
            <Route path="/register" element={<Register />} />
            <Route path="/list" element={<List />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/form" element={<Form />} />
            <Route path="/jotai" element={<Jotai />} />
            <Route path="/jotai/api" element={<ApiJotai />} />
            <Route path="/jotai/nest" element={<NestJotai />} />
            <Route path="/zustand" element={<Zustand />} />
            <Route path="/story" element={<Story />} />
            <Route path="/zustand/nest" element={<ZustandNest />} />
            <Route path="/observer" element={<Observer />} />
            <Route path="/tanstack" element={<TanStack />} />
            <Route path="zod" element={<ZodForm />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </PersistQueryClientProvider>
    </>
  );
}

export default App;
