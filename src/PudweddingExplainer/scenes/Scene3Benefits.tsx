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

export const Scene3Benefits: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const badgeScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  const card1 = spring({ frame: frame - 6, fps, config: { damping: 14, stiffness: 90 } });
  const card2 = spring({ frame: frame - 14, fps, config: { damping: 14, stiffness: 90 } });
  const card3 = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 90 } });

  return (
    <AbsoluteFill className="flex flex-col items-center justify-center px-10 text-white">
      <Audio src={staticFile("audio/PudweddingExplainer/scene3_benefits.mp3")} />

      {/* Top Badge */}
      <div
        style={{ transform: `scale(${badgeScale})` }}
        className="flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-8 py-3.5 backdrop-blur-md"
      >
        <span className="text-2xl">🔥</span>
        <span className="text-3xl font-black tracking-widest text-emerald-300 uppercase">
          LỢI ÍCH KHÁC BIỆT
        </span>
      </div>

      <div className="mt-8 text-center">
        <h2 className="text-6xl font-black tracking-tight leading-tight">
          TẠI SAO CHỌN{" "}
          <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
            PUDWEDDING?
          </span>
        </h2>
      </div>

      {/* 3 Horizontal Benefit Cards */}
      <div className="mt-8 flex flex-col gap-5 w-full max-w-[880px]">
        {/* Benefit 1 */}
        <div
          style={{ transform: `scale(${card1})` }}
          className="flex items-center gap-6 rounded-2xl border-2 border-cyan-400/40 bg-slate-900/85 p-6 backdrop-blur-xl shadow-lg"
        >
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-cyan-500/20 text-5xl">
            ⚡
          </div>
          <div>
            <div className="text-3xl font-black text-cyan-200">Gửi Trong 1 Giây</div>
            <div className="text-2xl text-slate-300 mt-1">Chia sẻ tức thì qua Zalo, Messenger, SMS tới người thân</div>
          </div>
        </div>

        {/* Benefit 2 */}
        <div
          style={{ transform: `scale(${card2})` }}
          className="flex items-center gap-6 rounded-2xl border-2 border-emerald-400/40 bg-slate-900/85 p-6 backdrop-blur-xl shadow-lg"
        >
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-500/20 text-5xl">
            💰
          </div>
          <div>
            <div className="text-3xl font-black text-emerald-200">Tiết Kiệm 80% Chi Phí</div>
            <div className="text-2xl text-slate-300 mt-1">Không tốn tiền in ấn, không lo in thừa thiếu thiệp</div>
          </div>
        </div>

        {/* Benefit 3 */}
        <div
          style={{ transform: `scale(${card3})` }}
          className="flex items-center gap-6 rounded-2xl border-2 border-rose-400/40 bg-slate-900/85 p-6 backdrop-blur-xl shadow-lg"
        >
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-rose-500/20 text-5xl">
            📋
          </div>
          <div>
            <div className="text-3xl font-black text-rose-200">Quản Lý Khách Tham Dự</div>
            <div className="text-2xl text-slate-300 mt-1">Khách xác nhận tham dự &amp; gửi lời chúc trực tiếp</div>
          </div>
        </div>
      </div>

      {/* Dynamic Subtitle */}
      <SubtitleBox
        text="Gửi link nhận thiệp qua Zalo, Messenger chỉ trong 1 giây, tiết kiệm 80% chi phí và dễ dàng theo dõi xác nhận tham dự."
        durationInFrames={durationInFrames}
        highlightKeyword="80% chi phí"
        className="mt-12"
      />
    </AbsoluteFill>
  );
};
