import ChatDisplay from "@/components/ChatDisplay";
import Hero from "@/components/Hero";
import { useChatStore } from "@/stores/ChatStore";
import withBasicAuth from "@/pages/withBasicAuth";

export function Home() {
  const apiKey = useChatStore((state) => state.apiKey);

  return apiKey ? <ChatDisplay /> : <Hero />;
}

export default withBasicAuth(Home);