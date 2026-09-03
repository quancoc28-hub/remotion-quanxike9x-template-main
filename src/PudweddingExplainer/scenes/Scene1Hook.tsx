import React from "react";
import {
  AbsoluteFill,
  Audio,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Top badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100, mass: 0.8 },
  });

  // Title spring
  const titleY = spring({
    frame: frame - 6,
    fps,
    from: 60,
    to: 0,
    config: { damping: 14, stiffness: 90 },
  });
  const titleOpacity = interpolate(frame, [6, 20], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Floating Envelope Icon
  const iconScale = spring({
    frame: frame - 12,
    fps,
    config: { damping: 10, stiffness: 80 },
  });
  const floatOffset = Math.sin(frame / 12) * 12;

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/PudweddingExplainer/scene1_hook.mp3")} />

      {/* Top Badge */}
      <div
        style={{
          transform: `scale(${badgeScale})`,
        }}
        className="flex items-center gap-3 rounded-full border border-rose-400/40 bg-rose-500/10 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="h-4 w-4 animate-ping rounded-full bg-rose-400" />
        <span className="text-3xl font-black tracking-widest text-rose-300 uppercase">
          XU HƯỚNG CƯỚI HIỆN ĐẠI
        </span>
      </div>

      {/* Center Visuals */}
      <div className="mt-10 flex flex-col items-center gap-6">
        {/* Floating Paper Envelope Graphic with Question / Warning */}
        <div
          style={{
            transform: `scale(${iconScale}) translateY(${floatOffset}px)`,
          }}
          className="relative flex h-52 w-52 items-center justify-center rounded-3xl border-2 border-rose-400/40 bg-gradient-to-br from-rose-500/25 via-pink-600/15 to-transparent p-6 shadow-[0_0_90px_rgba(244,63,94,0.45)] backdrop-blur-xl"
        >
          <span className="text-8xl select-none">✉️</span>
          <div className="absolute -top-3 -right-3 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 font-black text-white text-3xl shadow-lg border-2 border-white">
            💸
          </div>
        </div>

        {/* Big Catchy Title */}
        <div
          style={{
            transform: `translateY(${titleY}px)`,
            opacity: titleOpacity,
          }}
          className="text-center"
        >
          <h1 className="text-7xl font-black tracking-tight leading-tight">
            VẪN ĐAU ĐẦU VÌ
            <br />
            <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">
              THIỆP CƯỚI TRUYỀN THỐNG?
            </span>
          </h1>
          <p className="mt-4 text-3xl font-semibold text-rose-200/80">
            In ấn đắt đỏ • Gửi xa bất tiện • Dễ thất lạc
          </p>
        </div>
      </div>

      {/* Dynamic Subtitle */}
      <SubtitleBox
        text="Bạn vẫn đang đau đầu vì chi phí in thiệp cưới giấy đắt đỏ và gửi đi xa xôi?"
        durationInFrames={durationInFrames}
        highlightKeyword="thiệp cưới giấy"
        className="mt-14"
      />
    </AbsoluteFill>
  );
};
