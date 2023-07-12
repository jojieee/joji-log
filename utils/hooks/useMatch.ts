import { breakpoints } from '@/src/styles/theme'
import { useMediaQuery } from 'react-responsive'

export const useUpMaximum = () => {
  return useMediaQuery({ minWidth: breakpoints.values.maximum })
}

export const useDownMaximum = () => {
  return useMediaQuery({ maxWidth: breakpoints.values.maximum })
}

export const useUpXl = () => {
  return useMediaQuery({ minWidth: breakpoints.values.xl })
}

export const useDownXl = () => {
  return useMediaQuery({ maxWidth: breakpoints.values.xl })
}

export const useUpLg = () => {
  return useMediaQuery({ minWidth: breakpoints.values.lg })
}

export const useDownLg = () => {
  return useMediaQuery({ maxWidth: breakpoints.values.lg })
}

export const useUpSm = () => {
  return useMediaQuery({ minWidth: breakpoints.values.sm })
}

export const useDownSm = () => {
  return useMediaQuery({ maxWidth: breakpoints.values.sm })
}

export const useUpXs = () => {
  return useMediaQuery({ minWidth: breakpoints.values.xs })
}

export const useDownXs = () => {
  return useMediaQuery({ maxWidth: breakpoints.values.xs })
}

export const useUpMinimum = () => {
  return useMediaQuery({ minWidth: breakpoints.values.minimum })
}

export const useDownMinimum = () => {
  return useMediaQuery({ maxWidth: breakpoints.values.minimum })
}

export const useUpCustom = (value: string) => {
  return useMediaQuery({ minWidth: value })
}

export const useDownCustom = (value: string) => {
  return useMediaQuery({ maxWidth: value })
}
