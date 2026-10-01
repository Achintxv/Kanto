import { ImageResponse } from "next/og";
import { LuLayoutDashboard } from "react-icons/lu";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Note: This must be a default export for Next.js to recognize it
export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 24,
        background: "linear-gradient(to bottom right, #fb923c, #f59e0b)", // Equivalent to from-orange-400 to-amber-500
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "0.50rem", // Equivalent to rounded-xl
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)", // Equivalent to shadow-sm
      }}
    >
      <LuLayoutDashboard />
    </div>,
    {
      ...size,
    },
  );
}
