import "./index.css";
import { Composition } from "remotion";
import { DockerExplainer } from "./DockerExplainer/DockerExplainer";
import { dockerExplainerSchema } from "./DockerExplainer/types";
import { PudweddingExplainer } from "./PudweddingExplainer/PudweddingExplainer";
import { pudweddingExplainerSchema } from "./PudweddingExplainer/types";
import { audioManifest as pudweddingAudio } from "./PudweddingExplainer/audioData";

export const RemotionRoot: React.FC = () => {
  const pudweddingDuration = pudweddingAudio.totalDurationFrames + 20;

  return (
    <>
      {/* 20s AI Voice Explainer: Pudwedding */}
      <Composition
        id="PudweddingExplainer"
        component={PudweddingExplainer}
        durationInFrames={pudweddingDuration}
        fps={30}
        width={1080}
        height={1920}
        schema={pudweddingExplainerSchema}
        defaultProps={{
          title: "Thiệp Cưới Online Pudwedding",
          subtitle: "Hiện đại - Tiện lợi - Tiết kiệm",
        }}
      />

      {/* 50s AI Voice Explainer: Docker */}
      <Composition
        id="DockerExplainer"
        component={DockerExplainer}
        durationInFrames={1280}
        fps={30}
        width={1080}
        height={1920}
        schema={dockerExplainerSchema}
        defaultProps={{
          title: "Docker là gì?",
          subtitle: "Giải thích trong 50 giây",
        }}
      />
    </>
  );
};
