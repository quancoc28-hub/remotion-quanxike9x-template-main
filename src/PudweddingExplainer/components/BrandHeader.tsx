import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

interface BrandHeaderProps {
  channelName?: string;
}

export const BrandHeader: React.FC<BrandHeaderProps> = ({
  channelName = "PUDWEDDING",
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    frame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  const opacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: "140px",
        left: "50%",
        transform: `translateX(-50%) scale(${scale})`,
        opacity,
      }}
      className="z-50 flex items-center gap-3.5 rounded-full border-2 border-rose-400/40 bg-slate-950/90 px-8 py-3.5 shadow-[0_8px_30px_rgba(244,63,94,0.3)] backdrop-blur-xl"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-rose-400 via-pink-500 to-amber-300 text-xl shadow-[0_0_20px_rgba(251,113,133,0.8)]">
        💍
      </div>
      <span className="text-3xl font-black tracking-widest bg-gradient-to-r from-rose-200 via-pink-100 to-amber-200 bg-clip-text text-transparent">
        {channelName}
      </span>
    </div>
  );
};
