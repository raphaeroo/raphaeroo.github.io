class Service {
  get(key: string): string | null {
    return sessionStorage.getItem(key)
  }

  set(key: string, value: string | object) {
    if (typeof value === 'string') {
      sessionStorage.setItem(key, value)
    } else {
      const json = JSON.stringify(value)
      sessionStorage.setItem(key, json)
    }
  }

  remove(key: string) {
    sessionStorage.removeItem(key)
  }

  clear() {
    sessionStorage.clear()
  }
}

export const StorageService = new Service()
