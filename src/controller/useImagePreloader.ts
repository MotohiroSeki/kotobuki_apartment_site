import { useState, useEffect } from 'react'

const useImagePreloader = (imageSources: string[]) => {
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  useEffect(() => {
    let isMounted = true

    const preloadImages = async () => {
      const imagePromises = imageSources.map((src) => {
        return new Promise((resolve, reject) => {
          const img = new Image()
          img.src = src
          img.onload = resolve
          img.onerror = reject
        })
      })

      try {
        await Promise.all(imagePromises)
        if (isMounted) {
          setImagesPreloaded(true)
        }
      } catch (error) {
        console.error('Failed to preload images:', error)
      }
    }

    preloadImages()

    return () => {
      isMounted = false
    }
  }, [imageSources])

  return imagesPreloaded
}

export default useImagePreloader