import React, { useEffect, useRef, useCallback } from 'react'

const AudioPlayer = ({ src, volume, control }) => {
  const audioRef = useRef(null)

  const playSound = useCallback(() => {
    audioRef.current.src = src
    audioRef.current.volume = volume
    audioRef.current.play()
  }, [src, volume])

  const stopSound = useCallback(() => {
    audioRef.current.src = ''
  }, [])

  useEffect(() => {
    switch (control) {
      case 'play':
        playSound()
        break
      case 'stop':
        stopSound()
        break
      default:
        break
    }
  }, [control, playSound, stopSound])

  return <audio ref={audioRef} src={src} />
}

export default AudioPlayer