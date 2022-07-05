export default function useDelay() {
  async function delay(time) {
    await new Promise((resolve) => setTimeout(resolve, time));
  }
  return { delay };
}
