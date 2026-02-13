declare module '@/services/util.service.js' {
  export function debounce<T>(func: T, delay?: number): (...args: Parameters<T>) => void
}
