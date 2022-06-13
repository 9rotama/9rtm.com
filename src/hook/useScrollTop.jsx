import { useEffect, useState } from "react"

function useScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", setScrollPosition(window.pageYOffset))
    setScrollPosition(window.pageYOffset)

    return () =>
      window.removeEventListener(
        "scroll",
        setScrollPosition(window.pageYOffset)
      )
  }, [])

  return scrollPosition
}

export default useScroll
