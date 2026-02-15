'use strict'
type Unsubscribe = () => void

export type AppEvents = {
  'user-msg': { txt: string; type: 'success' | 'error' | '' }
  // add more events as you grow:
  // 'movie-added': { movieId: string }
  // 'filter-change': { txt?: string; maxRuntime?: number }
}
function createEventEmitter<E extends Record<string, any>>(
  defaultHandler: null | (<K extends keyof E>(evName: K, payload: E[K]) => void) = null,
) {
  const listenersMap: { [K in keyof E]?: Array<(payload: E[K]) => void> } = {}

  return {
    on<K extends keyof E>(evName: K, listener: (payload: E[K]) => void): Unsubscribe {
      const prev = listenersMap[evName] ?? []
      listenersMap[evName] = [...prev, listener]
      return () => {
        const curr = listenersMap[evName]
        if (!curr) return
        listenersMap[evName] = curr.filter((fn) => fn !== listener)
      }
    },
    emit<K extends keyof E>(evName: K, payload: E[K]): void {
      const listeners = listenersMap[evName]
      if (listeners?.length) listeners.forEach((listener) => listener(payload))
      else defaultHandler?.(evName, payload)
    },
  }
}

export const eventBus = createEventEmitter<AppEvents>((evName, payload) => _defaultHandler(evName, payload))

export function showSuccessMsg(txt:string) {
  eventBus.emit('user-msg', { txt, type: 'success' })
}

export function showErrorMsg(txt:string) {
  eventBus.emit('user-msg', { txt, type: 'error' })
}

function _defaultHandler(evName:string, payload:unknown) {
  console.groupCollapsed('No handler found')
  console.log(`event - %c${evName}`, 'color: orange')
  console.log(`payload - %c${payload}`, 'color: orange')
  console.groupEnd()
}

// Easy debug from console
(window as any).eventBus = eventBus
