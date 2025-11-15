"use client";
import Loading from "@/components/Loading";
import { useAppData, user_service } from "@/context/AppContext";
import axios from "axios";
import { ArrowRight, Loader2, Mail } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Vortex } from "@/ui/vortex";
import { GlareCard } from "@/ui/glare-card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const { isAuth, loading: userLoading } = useAppData();

  const handleSubmit = async (
    e: React.FormEvent<HTMLElement>
  ): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(`${user_service}/api/v1/login`, {
        email,
      });

      toast.success(data.message);
      router.push(`/verify?email=${email}`);
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  if (userLoading) return <Loading />;
  if (isAuth) return redirect("/chat");
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <div className="flex min-h-screen items-center justify-center p-4">
        <GlareCard className="max-w-md w-full">
          <div className="rounded-lg border border-gray-700 bg-gray-800 p-8">
            <div className="mb-8 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-transparent">
                <Mail className="text-white" size={32} />
              </div>
              <h1 className="mb-2 text-3xl font-bold text-white">
                Welcome to chit-chat app
              </h1>
              <p className="text-base text-gray-400">
                Email first. Permission to chat comes later 😉
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-3 px-6 rounded-md font-semibold hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Verification Code...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>Send Verification Code</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </button>
            </form>
          </div>
        </GlareCard>
      </div>
    </Vortex>
  );
};

export default LoginPage;
