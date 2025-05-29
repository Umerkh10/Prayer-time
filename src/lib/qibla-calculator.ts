// Coordinates of the Kaaba in Mecca
const KAABA_LAT = 21.4225
const KAABA_LNG = 39.8262

/**
 * Calculates the Qibla direction in degrees from North
 * @param latitude User's latitude in decimal degrees
 * @param longitude User's longitude in decimal degrees
 * @returns Direction in degrees from North (0-360)
 */
export function calculateQiblaDirection(latitude: number, longitude: number): number {
  // Convert all coordinates from degrees to radians
  const lat1 = toRadians(latitude)
  const lng1 = toRadians(longitude)
  const lat2 = toRadians(KAABA_LAT)
  const lng2 = toRadians(KAABA_LNG)

  // Calculate the Qibla direction using the spherical law of cosines
  const y = Math.sin(lng2 - lng1)
  const x = Math.cos(lat1) * Math.tan(lat2) - Math.sin(lat1) * Math.cos(lng2 - lng1)

  // Calculate the angle in radians and convert to degrees
  let qiblaAngle = Math.atan2(y, x)

  // Convert to degrees and normalize to 0-360
  qiblaAngle = toDegrees(qiblaAngle)
  qiblaAngle = (qiblaAngle + 360) % 360

  return qiblaAngle
}

/**
 * Calculates the distance to the Kaaba in kilometers
 * @param latitude User's latitude in decimal degrees
 * @param longitude User's longitude in decimal degrees
 * @returns Distance in kilometers
 */
export function calculateDistanceToKaaba(latitude: number, longitude: number): number {
  // Earth radius in kilometers
  const earthRadius = 6371

  // Convert all coordinates from degrees to radians
  const lat1 = toRadians(latitude)
  const lng1 = toRadians(longitude)
  const lat2 = toRadians(KAABA_LAT)
  const lng2 = toRadians(KAABA_LNG)

  // Haversine formula
  const dLat = lat2 - lat1
  const dLng = lng2 - lng1

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  const distance = earthRadius * c

  return distance
}

/**
 * Converts degrees to radians
 */
function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180)
}

/**
 * Converts radians to degrees
 */
function toDegrees(radians: number): number {
  return radians * (180 / Math.PI)
}
