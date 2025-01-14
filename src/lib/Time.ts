export function formatTime(timezone: string): string {
  try {
    const now = new Date();

    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: timezone, // Timezone ensures exact offset
    }).format(now);
  } catch (error) {
    console.error(`Invalid timezone: ${timezone}`, error);
    return 'Invalid timezone';
  }
}