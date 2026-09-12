import { useState, useEffect, useRef } from "react";
import defaultPositions from "../data/coverPositions.json";

const STORAGE_KEY = "creative_canvas_cover_positions_v1";

export function useCoverPosition() {
  const [positions, setPositions] = useState<Record<string, number>>(() => {
    if (typeof window === "undefined") return defaultPositions as Record<string, number>;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return { ...(defaultPositions as Record<string, number>), ...parsed };
      }
    } catch (e) {
      console.error("Erro ao carregar posições de capas:", e);
    }
    return defaultPositions as Record<string, number>;
  });

  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
    } catch (e) {
      console.error("Erro ao sincronizar posições no localStorage:", e);
    }
  }, [positions]);

  const updatePosition = (postId: string, yPercent: number) => {
    const clamped = Math.max(0, Math.min(100, Math.round(yPercent)));
    setPositions((prev) => {
      const next = { ...prev, [postId]: clamped };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch (e) {
        console.error("Erro ao salvar posições no localStorage:", e);
      }
      return next;
    });
  };

  const clickTrackerRef = useRef<{ id: string; count: number; timer: NodeJS.Timeout | null }>({
    id: "",
    count: 0,
    timer: null,
  });

  const handlePostClick = (postId: string, onSingleClick?: () => void) => {
    const tracker = clickTrackerRef.current;

    if (tracker.id !== postId) {
      if (tracker.timer) clearTimeout(tracker.timer);
      tracker.id = postId;
      tracker.count = 1;
    } else {
      tracker.count += 1;
    }

    if (tracker.timer) clearTimeout(tracker.timer);

    if (tracker.count >= 4) {
      if (tracker.timer) clearTimeout(tracker.timer);
      clickTrackerRef.current = { id: "", count: 0, timer: null };
      setEditingPostId((prev) => (prev === postId ? null : postId));
      return;
    }

    tracker.timer = setTimeout(() => {
      if (clickTrackerRef.current.count < 4 && onSingleClick) {
        onSingleClick();
      }
      clickTrackerRef.current = { id: "", count: 0, timer: null };
    }, 400);
  };

  const getObjectPosition = (postId: string) => {
    const y = positions[postId] ?? (defaultPositions as Record<string, number>)[postId] ?? 50;
    return `center ${y}%`;
  };

  return {
    positions,
    editingPostId,
    setEditingPostId,
    updatePosition,
    handlePostClick,
    getObjectPosition,
  };
}
