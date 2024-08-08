# Preloading Images in React with Next.js and TypeScript

## Overview

This guide explains how to preload images in a React application using Next.js and TypeScript. The approach involves creating a custom hook for preloading images and a `Preloader` component that ensures all images are loaded before rendering the children components.

## Step 1: Create a Custom Hook for Image Preloading

Create a file named `useImagePreloader.ts`:

```typescript
// useImagePreloader.ts
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
```

## Step 2: Create a Preloader Component

Create a file named `Preloader.tsx`:

```typescript
// Preloader.tsx
import React from 'react'
import useImagePreloader from './useImagePreloader'

interface PreloaderProps {
  imageSources: string[]
  children: React.ReactNode
}

const Preloader: React.FC<PreloaderProps> = ({ imageSources, children }) => {
  const imagesPreloaded = useImagePreloader(imageSources)

  if (!imagesPreloaded) {
    return <div>Loading...</div>
  }

  return <>{children}</>
}

export default Preloader
```

## Step 3: Use the Preloader Component in Your Parent Component

Create a file named `ParentComponent.tsx`:

```typescript
// ParentComponent.tsx
import React from 'react'
import Image from 'next/image'
import Preloader from './Preloader'
import ChildComponent from './ChildComponent'

const parentImages = ['/parent-image1.jpg', '/parent-image2.jpg']
const childImages = ['/child-image1.jpg', '/child-image2.jpg']

const ParentComponent: React.FC = () => {
  const allImages = [...parentImages, ...childImages]

  return (
    <Preloader imageSources={allImages}>
      <div>
        <Image src={parentImages} alt="Parent Image 1" width={500} height={300} />
        <Image src={parentImages} alt="Parent Image 2" width={500} height={300} />
        <ChildComponent images={childImages} />
      </div>
    </Preloader>
  )
}

export default ParentComponent
```

## Step 4: Create the Child Component

Create a file named `ChildComponent.tsx`:

```typescript
// ChildComponent.tsx
import React from 'react'
import Image from 'next/image'

interface ChildComponentProps {
  images: string[]
}

const ChildComponent: React.FC<ChildComponentProps> = ({ images }) => {
  return (
    <div>
      {images.map((src, index) => (
        <Image key={index} src={src} alt={`Child Image ${index + 1}`} width={300} height={200} />
      ))}
    </div>
  )
}

export default ChildComponent
```

## Summary

This approach allows you to preload images for both the parent and child components. The `Preloader` component ensures that all specified images are loaded before rendering the content, providing a smooth loading experience and preventing any flickering or delays in displaying images.