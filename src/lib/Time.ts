export function formatTime(offset: string): string {
    const now = new Date()
    const utc = now.getTime() + now.getTimezoneOffset() * 60000
    const offsetMinutes = parseInt(offset.replace(':', '')) * 60
    const localTime = new Date(utc + offsetMinutes * 60000)
    
    return localTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    })
  }