// src/controller/useImagePreloader.ts（置き換え版）
import { useEffect, useState } from 'react';

const useImagePreloader = (imageSources: string[] = []) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!imageSources.length) return;

    let cancelled = false;
    const imgs: HTMLImageElement[] = [];

    (async () => {
      const urls = imageSources.filter(Boolean);

      // 1) まず fetch でキャッシュを温める（404 ならここで分かる）
      await Promise.all(
        urls.map(async (url) => {
          try {
            const res = await fetch(url, { cache: 'force-cache', credentials: 'same-origin' });
            if (!res.ok) {
              console.warn('[preload fetch NG]', url, res.status);
            }
          } catch (e) {
            console.warn('[preload fetch ERR]', url, e);
          }
        })
      );

      // 2) 画像デコードまで確認（SVG等での onerror 誤検知を避ける）
      await Promise.all(
        urls.map((url) => {
          return new Promise<void>((resolve) => {
            const img = new Image();
            imgs.push(img);
            img.onload = () => {
              // decode できるなら decode まで待つ（対応ブラウザ）
              if ('decode' in img) {
                (img as any).decode?.().then(() => resolve()).catch(() => resolve());
              } else {
                resolve();
              }
            };
            img.onerror = () => {
              // ここで止めない（表示側で再試行できるようにする）
              console.warn('[preload image NG]', url);
              resolve();
            };
            img.src = url;
          });
        })
      );

      if (!cancelled) setReady(true);
    })();

    return () => {
      cancelled = true;
      imgs.forEach((i) => {
        i.onload = null;
        i.onerror = null;
        i.src = '';
      });
    };
  }, [imageSources.join('|')]); // パスの配列が実質同一なら再実行しない

  return ready;
};

export default useImagePreloader;