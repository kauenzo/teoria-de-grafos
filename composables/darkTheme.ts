export const useDarkTheme = () => {
  const toggleDarkMode = () => {
    if (!document.startViewTransition) {
      executeDarkModeToggle()

      return
    }

    document.startViewTransition(() => executeDarkModeToggle())
  }
  const executeDarkModeToggle = () => {
    isDarkTheme.value = !isDarkTheme.value
    document.documentElement.classList.toggle('dark')
  }

  const isDarkTheme = ref<boolean>()

  return { isDarkTheme, toggleDarkMode }
}

