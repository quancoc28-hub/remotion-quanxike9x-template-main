import React from "react";
import {
  AbsoluteFill,
  Audio,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { SubtitleBox } from "../components/SubtitleBox";

export const Scene2Features: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  // Top badge spring
  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Main Mockup phone spring
  const cardScale = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, stiffness: 90 },
  });

  // 3 Feature chips pop-in springs
  const chip1 = spring({ frame: frame - 10, fps, config: { damping: 12, stiffness: 100 } });
  const chip2 = spring({ frame: frame - 18, fps, config: { damping: 12, stiffness: 100 } });
  const chip3 = spring({ frame: frame - 26, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/PudweddingExplainer/scene2_features.mp3")} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-pink-400/40 bg-pink-500/10 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">✨</span>
        <span className="text-3xl font-black tracking-widest text-pink-300 uppercase">
          GIẢI PHÁP ĐỘT PHÁ
        </span>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-6xl font-black tracking-tight leading-tight">
          THIỆP CƯỚI ONLINE{" "}
          <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">
            PUDWEDDING
          </span>
        </h2>
      </div>

      {/* Center Visual Mockup & Features */}
      <div
        style={{ transform: `scale(${cardScale})` }}
        className="mt-6 flex flex-col items-center w-full max-w-[860px] rounded-3xl border-2 border-rose-400/30 bg-slate-900/80 p-8 shadow-[0_20px_60px_rgba(244,63,94,0.25)] backdrop-blur-2xl"
      >
        {/* Mockup Wedding Card Preview */}
        <div className="flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-rose-950/60 to-pink-950/60 border border-rose-500/40 p-6">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-500 text-3xl shadow-lg">
              💌
            </div>
            <div>
              <div className="text-2xl font-bold text-rose-200">Lễ Thành Hôn</div>
              <div className="text-3xl font-black text-white">Minh Quân &amp; Mai Anh</div>
            </div>
          </div>
          <div className="rounded-full bg-rose-500/20 px-4 py-2 border border-rose-400/40 text-xl font-bold text-rose-300">
            Online Card
          </div>
        </div>

        {/* 3 Feature Pills */}
        <div className="mt-6 grid grid-cols-3 gap-4 w-full">
          <div
            style={{ transform: `scale(${chip1})` }}
            className="flex flex-col items-center text-center gap-2 rounded-2xl border border-rose-400/40 bg-rose-500/10 p-5 backdrop-blur-md"
          >
            <span className="text-5xl">📸</span>
            <span className="text-2xl font-black text-rose-200">Album Ảnh Cưới</span>
            <span className="text-lg text-slate-300">Sắc nét full HD</span>
          </div>

          <div
            style={{ transform: `scale(${chip2})` }}
            className="flex flex-col items-center text-center gap-2 rounded-2xl border border-pink-400/40 bg-pink-500/10 p-5 backdrop-blur-md"
          >
            <span className="text-5xl">🎵</span>
            <span className="text-2xl font-black text-pink-200">Nhạc Lãng Mạn</span>
            <span className="text-lg text-slate-300">Tự động phát êm dịu</span>
          </div>

          <div
            style={{ transform: `scale(${chip3})` }}
            className="flex flex-col items-center text-center gap-2 rounded-2xl border border-amber-400/40 bg-amber-500/10 p-5 backdrop-blur-md"
          >
            <span className="text-5xl">📍</span>
            <span className="text-2xl font-black text-amber-200">Bản Đồ Chỉ Đường</span>
            <span className="text-lg text-slate-300">Google Maps 1 chạm</span>
          </div>
        </div>
      </div>

      {/* Dynamic Subtitle */}
      <SubtitleBox
        text="Pudwedding mang đến giải pháp thiệp cưới online thông minh: tích hợp album ảnh cưới, nhạc nền lãng mạn và bản đồ chỉ đường chuẩn xác."
        durationInFrames={durationInFrames}
        highlightKeyword="Pudwedding"
        className="mt-12"
      />
    </AbsoluteFill>
  );
};
