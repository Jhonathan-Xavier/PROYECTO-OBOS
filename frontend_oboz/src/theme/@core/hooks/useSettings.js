import { useContext } from 'react'
import { SettingsContext } from 'src/theme/@core/context/settingsContext'

export const useSettings = () => useContext(SettingsContext)
