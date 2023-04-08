import Alpine from "alpinejs";
import { flowConfig } from "./flow.config";

declare global {
  interface Window {
    Alpine: any;
  }
}

window.Alpine = Alpine;

Alpine.data("utils", () => ({
  day: Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(new Date()),
  date: Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date()),
  time: Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
  }).format(new Date()),
}));

Alpine.data("search", () => ({
  query: "",
  search() {
    if (this.query.length > 0) {
      window.location.href = `https://duckduckgo.com/?q=${this.query.toLowerCase()}`;
    }
  },
}));

Alpine.data("links", () => ({
  links: flowConfig.links,
}));

Alpine.start();
