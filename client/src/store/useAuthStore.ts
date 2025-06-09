import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import type { AuthStore } from "../types/user";
import toast from "react-hot-toast";
import axios from "axios";

export const useAuthStore = create<AuthStore>((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      set({ authUser: null });
      console.log("Error in checkauth", error);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      toast.success("Account created successfully");
    } catch (error) {
      if (axios.isAxiosError(error))
        toast.error(error.response?.data?.message || error.message);
      else toast.error("An unexpected error occured in signUp");
    } finally {
      set({ isSigningUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      if (axios.isAxiosError(error))
        toast.error(error.response?.data?.message || error.message);
      else toast.error("An unexpected error occured in logout");
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      toast.success("Logged in successfully");
    } catch (error) {
      if (axios.isAxiosError(error))
        toast.error(error.response?.data?.message || error.message);
      else toast.error("An unexpected error occured in login");
    } finally {
      set({ isLoggingIn: false });
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated successfully");
    } catch (error) {
      if (axios.isAxiosError(error))
        toast.error(error.response?.data?.message || error.message);
      else toast.error("An unexpected error occured in updateProfile");
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
