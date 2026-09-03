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

export const Scene4Outro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const heartScale = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 120 },
  });
  const pulse = Math.sin(frame / 6) * 0.08;

  const ctaScale = spring({
    frame: frame - 10,
    fps,
    config: { damping: 12, stiffness: 90 },
  });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/PudweddingExplainer/scene4_outro.mp3")} />

      {/* Floating Glowing Wedding Rings */}
      <div
        style={{
          transform: `scale(${heartScale + pulse})`,
        }}
        className="relative flex h-52 w-52 items-center justify-center rounded-full border-4 border-rose-400/50 bg-gradient-to-tr from-rose-500/30 via-pink-500/20 to-amber-400/30 shadow-[0_0_100px_rgba(244,63,94,0.6)] backdrop-blur-2xl"
      >
        <span className="text-8xl select-none">💍</span>
      </div>

      <div className="mt-10 text-center">
        <h2 className="text-7xl font-black tracking-tight leading-tight">
          PUDWEDDING
          <br />
          <span className="bg-gradient-to-r from-rose-400 via-pink-300 to-amber-300 bg-clip-text text-transparent">
            TRĂM NĂM HẠNH PHÚC
          </span>
        </h2>
        <p className="mt-4 text-3xl font-bold text-rose-200">
          Thiệp cưới online thông minh &amp; tinh tế
        </p>
      </div>

      {/* CTA Button Box */}
      <div
        style={{ transform: `scale(${ctaScale})` }}
        className="mt-10 flex items-center gap-4 rounded-full border-2 border-amber-300/80 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 px-12 py-6 shadow-[0_15px_50px_rgba(244,63,94,0.5)]"
      >
        <span className="text-4xl">👉</span>
        <span className="text-4xl font-black tracking-wider text-white uppercase drop-shadow-md">
          Tạo Thiệp Cưới Ngay Hôm Nay
        </span>
      </div>

      {/* Dynamic Subtitle */}
      <SubtitleBox
        text="Tạo ngay thiệp cưới online hiện đại cho ngày trọng đại tại Pudwedding. Chúc hai bạn trăm năm hạnh phúc!"
        durationInFrames={durationInFrames}
        highlightKeyword="Pudwedding"
        className="mt-14"
      />
    </AbsoluteFill>
  );
};
