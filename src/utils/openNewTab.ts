"use client";

export function openNewTab(url: string) {
  if (typeof window !== "undefined") {
    window.open(url, "_blank");
  }
}
