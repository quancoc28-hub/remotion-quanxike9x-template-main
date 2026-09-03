import React from "react";
import {
  AbsoluteFill,
  Series,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { PudweddingExplainerProps } from "./types";
import { audioManifest } from "./audioData";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Features } from "./scenes/Scene2Features";
import { Scene3Benefits } from "./scenes/Scene3Benefits";
import { Scene4Outro } from "./scenes/Scene4Outro";
import { BrandHeader } from "./components/BrandHeader";

export const PudweddingExplainer: React.FC<PudweddingExplainerProps> = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  // Gentle fade in at start and fade out at end
  const fadeIn = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );
  const opacity = fadeIn * fadeOut;

  // Scene durations dynamically mapped from audioManifest (+3 frames buffer for snappy, seamless transition)
  const d1 = audioManifest.scenes[0].durationInFrames + 3;
  const d2 = audioManifest.scenes[1].durationInFrames + 3;
  const d3 = audioManifest.scenes[2].durationInFrames + 3;
  const d4 = audioManifest.scenes[3].durationInFrames + 10;

  return (
    <AbsoluteFill
      style={{ opacity }}
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-rose-950/40 to-black font-sans text-white select-none"
    >
      {/* Top Center Channel Brand Header */}
      <BrandHeader channelName="PUDWEDDING" />

      {/* Background Animated Subtle Glows */}
      <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-rose-600/15 blur-[140px]" />
      <div className="absolute top-1/2 -right-40 h-[700px] w-[700px] rounded-full bg-pink-600/15 blur-[160px]" />
      <div className="absolute -bottom-40 left-1/4 h-[600px] w-[600px] rounded-full bg-amber-600/10 blur-[140px]" />

      {/* Series of 4 Scenes (~20 seconds) */}
      <Series>
        {/* Scene 1: Hook */}
        <Series.Sequence durationInFrames={d1}>
          <Scene1Hook />
        </Series.Sequence>

        {/* Scene 2: Features */}
        <Series.Sequence durationInFrames={d2}>
          <Scene2Features />
        </Series.Sequence>

        {/* Scene 3: Benefits */}
        <Series.Sequence durationInFrames={d3}>
          <Scene3Benefits />
        </Series.Sequence>

        {/* Scene 4: Outro */}
        <Series.Sequence durationInFrames={d4}>
          <Scene4Outro />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
