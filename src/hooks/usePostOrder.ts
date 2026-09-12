import { useState, useEffect, useRef } from "react";

const ORDER_STORAGE_KEY = "creative_canvas_post_orders_v1";

function getSavedOrder<T extends { id: number | string }>(clientId: string, defaultPosts: T[]): T[] {
  if (typeof window === "undefined") return defaultPosts;
  try {
    const stored = localStorage.getItem(ORDER_STORAGE_KEY);
    if (stored) {
      const parsedMap: Record<string, (number | string)[]> = JSON.parse(stored);
      const savedIds = parsedMap[clientId];
      if (savedIds && Array.isArray(savedIds)) {
        const mapById = new Map(defaultPosts.map((p) => [p.id, p]));
        const reordered: T[] = [];

        savedIds.forEach((id) => {
          if (mapById.has(id)) {
            reordered.push(mapById.get(id)!);
            mapById.delete(id);
          }
        });

        mapById.forEach((p) => reordered.push(p));
        return reordered;
      }
    }
  } catch (e) {
    console.error("Erro ao ler ordem dos posts:", e);
  }
  return defaultPosts;
}

export function usePostOrder<T extends { id: number | string }>(clientId: string, defaultPosts: T[]) {
  const [prevClientId, setPrevClientId] = useState(clientId);
  const [orderedPosts, setOrderedPosts] = useState<T[]>(() => getSavedOrder(clientId, defaultPosts));
  const [swappingPostId, setSwappingPostId] = useState<number | string | null>(null);

  // Sincronização INSTANTÂNEA durante a renderização ao trocar de cliente (elimina o delay e o flash!)
  if (prevClientId !== clientId) {
    setPrevClientId(clientId);
    setSwappingPostId(null);
    const initial = getSavedOrder(clientId, defaultPosts);
    setOrderedPosts(initial);
  }

  // Salva a nova ordem no localStorage
  const saveOrder = (newPosts: T[]) => {
    setOrderedPosts(newPosts);
    try {
      const stored = localStorage.getItem(ORDER_STORAGE_KEY);
      const parsedMap: Record<string, (number | string)[]> = stored ? JSON.parse(stored) : {};
      parsedMap[clientId] = newPosts.map((p) => p.id);
      localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(parsedMap));
    } catch (e) {
      console.error("Erro ao salvar ordem dos posts:", e);
    }
  };

  // Troca a posição de 2 posts por ID
  const swapPosts = (id1: number | string, id2: number | string) => {
    const idx1 = orderedPosts.findIndex((p) => p.id === id1);
    const idx2 = orderedPosts.findIndex((p) => p.id === id2);
    if (idx1 === -1 || idx2 === -1 || idx1 === idx2) return;

    const next = [...orderedPosts];
    const temp = next[idx1];
    next[idx1] = next[idx2];
    next[idx2] = temp;
    saveOrder(next);
  };

  // Mover post 1 passo para esquerda (-1) ou direita (+1)
  const movePostStep = (id: number | string, direction: -1 | 1) => {
    const idx = orderedPosts.findIndex((p) => p.id === id);
    if (idx === -1) return;
    const targetIdx = idx + direction;
    if (targetIdx < 0 || targetIdx >= orderedPosts.length) return;

    const next = [...orderedPosts];
    const temp = next[idx];
    next[idx] = next[targetIdx];
    next[targetIdx] = temp;
    saveOrder(next);
  };

  // Tracker de 2 cliques com o BOTÃO DIREITO
  const rightClickTrackerRef = useRef<{ id: number | string; count: number; timer: NodeJS.Timeout | null }>({
    id: "",
    count: 0,
    timer: null,
  });

  const handleContextMenu = (e: React.MouseEvent, postId: number | string) => {
    e.preventDefault();
    e.stopPropagation();

    const tracker = rightClickTrackerRef.current;

    if (tracker.id !== postId) {
      if (tracker.timer) clearTimeout(tracker.timer);
      tracker.id = postId;
      tracker.count = 1;
    } else {
      tracker.count += 1;
    }

    if (tracker.timer) clearTimeout(tracker.timer);

    if (tracker.count >= 2) {
      // 2 Cliques com Botão Direito detectados!
      if (tracker.timer) clearTimeout(tracker.timer);
      rightClickTrackerRef.current = { id: "", count: 0, timer: null };

      if (swappingPostId === null) {
        setSwappingPostId(postId);
      } else if (swappingPostId === postId) {
        setSwappingPostId(null);
      } else {
        swapPosts(swappingPostId, postId);
        setSwappingPostId(null);
      }
      return;
    }

    tracker.timer = setTimeout(() => {
      rightClickTrackerRef.current = { id: "", count: 0, timer: null };
    }, 450);
  };

  return {
    orderedPosts,
    swappingPostId,
    setSwappingPostId,
    swapPosts,
    movePostStep,
    handleContextMenu,
  };
}
