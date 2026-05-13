import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "../../utils/apiBase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoader } from "../../context/LoaderContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showLoader, hideLoader } = useLoader();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }

    setLoading(true);
    showLoader();

    try {
      const res = await axios.post(
        apiUrl("/api/v1/auth/forgot-password"),
        { email: email.trim().toLowerCase() }
      );

      if (res.data.success) {
        toast.success("If an account exists with this email, you will receive a reset link shortly.");
        setEmailSent(true);
      } else {
        toast.error(res.data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
      hideLoader();
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white">
        <div className="flex-1 flex items-center justify-center py-12 px-4">
          <div className="w-full max-w-md space-y-8 auth-box">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-black">
                Forgot Password
              </h1>
            </div>

            {!emailSent ? (
              <form onSubmit={handleForgotPassword} className="mt-8 space-y-6">
                <div>
                  <Label htmlFor="email" className="text-black">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 bg-white text-black border-black"
                    placeholder="Enter your email"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
                <div className="flex justify-center">
                  <Link
                    to="/login"
                    className="text-sm font-medium text-black hover:underline"
                  >
                    Back to Login
                  </Link>
                </div>
              </form>
            ) : (
              <div className="text-center space-y-6">
                <p className="text-sm text-black">
                  If an account exists with that email, we sent a reset link. Check
                  your inbox and spam folder, then use the link to set a new password.
                </p>
                <Button
                  asChild
                  className="w-full bg-black text-white hover:bg-gray-800"
                >
                  <Link to="/login">Back to Login</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
