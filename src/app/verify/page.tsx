import Loading from "@/components/Loading";
import VerifyOtp from "@/components/VerifyOtp";
import { Suspense } from "react";
import { Vortex } from "@/ui/vortex";

const VerifyPage = () => {
  return (
    <Vortex
      backgroundColor="black"
      rangeY={800}
      particleCount={500}
      baseHue={120}
      className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full"
    >
      <Suspense fallback={<Loading />}>
        <VerifyOtp />
      </Suspense>
    </Vortex>
  );
};

export default VerifyPage;
