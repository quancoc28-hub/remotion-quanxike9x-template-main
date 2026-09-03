import { generateTopicVoices } from "./generate-tts";

const pudweddingScenes = [
  {
    id: "scene1_hook",
    text: "Bạn vẫn đang đau đầu vì chi phí in thiệp cưới giấy đắt đỏ và gửi đi xa xôi?",
  },
  {
    id: "scene2_features",
    text: "Pudwedding mang đến giải pháp thiệp cưới online thông minh: tích hợp album ảnh cưới, nhạc nền lãng mạn và bản đồ chỉ đường chuẩn xác.",
  },
  {
    id: "scene3_benefits",
    text: "Gửi link nhận thiệp qua Zalo, Messenger chỉ trong 1 giây, tiết kiệm 80% chi phí và dễ dàng theo dõi xác nhận tham dự.",
  },
  {
    id: "scene4_outro",
    text: "Tạo ngay thiệp cưới online hiện đại cho ngày trọng đại tại Pudwedding. Chúc hai bạn trăm năm hạnh phúc!",
  },
];

async function main() {
  await generateTopicVoices("PudweddingExplainer", pudweddingScenes);
}

main().catch(console.error);
