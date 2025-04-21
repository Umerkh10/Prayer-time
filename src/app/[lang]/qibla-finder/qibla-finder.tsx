"use client"

import { useEffect, useState, useRef } from "react"
import { Compass, Loader2, MapPin, RotateCw, Info, ArrowUp, MapIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { calculateQiblaDirection, calculateDistanceToKaaba } from "@/lib/qibla-calculator"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/useTranslation"
import { Skeleton } from "@/components/ui/skeleton"

// Types for better code organization
type LocationData = {
  lat: number
  lng: number
}

type LocationInfo = {
  city?: string
  country?: string
}

export default function QiblaFinder() {
  // Location related states
  const [location, setLocation] = useState<LocationData | null>(null)
  const [locationSource, setLocationSource] = useState<"gps" | "ip">("gps")
  const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null)
  const [distanceToKaaba, setDistanceToKaaba] = useState<number | null>(null)

  // Direction related states
  const [qiblaDirection, setQiblaDirection] = useState<number | null>(null)
  const [deviceHeading, setDeviceHeading] = useState<number | null>(null)
  const [manualRotation, setManualRotation] = useState(0)

  // Compass related states
  const [isCalibrating, setIsCalibrating] = useState(false)
  const [needsCalibration, setNeedsCalibration] = useState(false)
  const [accuracy, setAccuracy] = useState<number | null>(null)
  const [compassPermissionGranted, setCompassPermissionGranted] = useState(false)

  // Device related states
  const [isIOS, setIsIOS] = useState(false)

  // UI related states
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("compass")
  const [permissionState, setPermissionState] = useState<PermissionState | null>(null)

  // Refs
  const compassRef = useRef<HTMLDivElement>(null)
  const lastHeadingRef = useRef<number | null>(null)

  // translation function with loading state
  const { t } = useTranslation("qazanamaz")
  const [isLoading, setIsLoading] = useState(true);

  // Smooth out compass rotation to prevent jerky movements
  const getSmoothCompassRotation = () => {
    if (deviceHeading === null) {
      return manualRotation
    }

    // Initialize lastHeading if not set
    if (lastHeadingRef.current === null) {
      lastHeadingRef.current = deviceHeading
      return deviceHeading
    }

    // Calculate the shortest path between the last heading and current heading
    let diff = deviceHeading - lastHeadingRef.current

    // Handle the case where we cross the 0/360 boundary
    if (diff > 180) diff -= 360
    if (diff < -180) diff += 360

    // Apply smoothing - adjust the 0.15 value to control smoothness (lower = smoother but slower)
    const smoothedHeading = lastHeadingRef.current + diff * 0.15

    // Normalize to 0-360 range
    const normalizedHeading = ((smoothedHeading % 360) + 360) % 360

    // Update the last heading reference
    lastHeadingRef.current = normalizedHeading

    return normalizedHeading
  }

  // Process location data and calculate directions
  const processLocationData = (latitude: number, longitude: number, locationInfo?: LocationInfo) => {
    // Set location
    setLocation({ lat: latitude, lng: longitude })

    // Set location info if provided
    if (locationInfo) {
      setLocationInfo(locationInfo)
    }

    // Calculate Qibla direction
    const direction = calculateQiblaDirection(latitude, longitude)
    setQiblaDirection(direction)

    // Calculate distance to Kaaba
    const distance = calculateDistanceToKaaba(latitude, longitude)
    setDistanceToKaaba(distance)
  }

  // Get user's location from IP API
  const getLocationFromIP = async () => {
    try {
      setLoading(true)
      const response = await fetch(
        "https://pro.ip-api.com/json/?key=kHg84ht9eNasCRN&fields=lat,lon,city,country,timezone",
      )

      if (!response.ok) {
        throw new Error("Failed to fetch location data")
      }

      const data = await response.json()

      if (data && data.lat && data.lon) {
        setLocationSource("ip")
        processLocationData(data.lat, data.lon, { city: data.city, country: data.country })
      } else {
        throw new Error("Invalid location data received")
      }
    } catch (err) {
      console.error("Error fetching IP location:", err)
      setError("Could not determine your location. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  // Get user's location using browser geolocation
  const getLocationFromBrowser = async () => {
    setLoading(true)
    setError(null)

    try {
      // Check for geolocation permission
      if (navigator.permissions && navigator.permissions.query) {
        const permission = await navigator.permissions.query({ name: "geolocation" as PermissionName })
        setPermissionState(permission.state)

        permission.onchange = () => {
          setPermissionState(permission.state)
        }
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setLocationSource("gps")
          processLocationData(latitude, longitude)
          setLoading(false)
        },
        (err) => {
          console.error("Geolocation error:", err)
          // If geolocation fails, fall back to IP-based location
          getLocationFromIP()
        },
        { enableHighAccuracy: true, timeout: 5000 },
      )
    } catch (err) {
      console.error("Error in geolocation:", err)
      // Fall back to IP-based location
      getLocationFromIP()
    }
  }

  // Combined function to get location from any available source
  const getLocation = async () => {
    setLoading(true)
    setError(null)

    try {
      // Try browser geolocation first
      await getLocationFromBrowser()
    } catch (err) {
      // If browser geolocation fails, fall back to IP-based location
      await getLocationFromIP()
    }
  }

  // Debounce function to limit the frequency of orientation updates
  const useDebounce = (value: number | null, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      return () => {
        clearTimeout(handler)
      }
    }, [value, delay])

    return debouncedValue
  }

  // Apply debounce to device heading for smoother updates
  const debouncedHeading = useDebounce(deviceHeading, 50)

  // Handle device orientation changes
  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    // Extended event type for iOS-specific properties
    const extendedEvent = event as DeviceOrientationEvent & {
      webkitCompassHeading?: number
      webkitCompassAccuracy?: number
    }

    let heading: number | null = null

    // For iOS devices
    if (extendedEvent.webkitCompassHeading !== undefined) {
      heading = extendedEvent.webkitCompassHeading

      // Check if we need calibration based on accuracy
      if (extendedEvent.webkitCompassAccuracy !== undefined) {
        const accuracy = extendedEvent.webkitCompassAccuracy
        setAccuracy(accuracy)
        setNeedsCalibration(accuracy > 20 || accuracy === -1)
      }
    }
    // For Android and other devices
    else if (event.alpha !== null) {
      // Convert alpha (0-360) to compass heading (0-360, where 0 is North)
      heading = 360 - event.alpha
    }

    if (heading !== null) {
      setDeviceHeading(heading)
    }
  }

  // Request permission to access device orientation
  const requestOrientationPermission = async () => {
    try {
      // Check if it's an iOS device
      const isIOSDevice =
        typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

      setIsIOS(isIOSDevice)

      // For iOS 13+ devices
      if (isIOSDevice && typeof (DeviceOrientationEvent as any).requestPermission === "function") {
        try {
          const permission = await (DeviceOrientationEvent as any).requestPermission()
          if (permission === "granted") {
            window.addEventListener("deviceorientation", handleDeviceOrientation, true)
            setCompassPermissionGranted(true)
          } else {
            console.warn("Compass permission denied on iOS")
          }
        } catch (err) {
          console.warn("Error requesting iOS orientation permission:", err)
        }
      } else {
        // For non-iOS devices or iOS < 13
        window.addEventListener("deviceorientation", handleDeviceOrientation, true)
        setCompassPermissionGranted(true)
      }
    } catch (err) {
      console.warn("Compass permission error:", err)
    }
  }

  // Start calibration process
  const startCalibration = () => {
    setIsCalibrating(true)
    setTimeout(() => {
      setIsCalibrating(false)
      setNeedsCalibration(false)
    }, 10000) // Give user 10 seconds to calibrate
  }

  // Request iOS permissions specifically
  const requestIOSPermissions = async () => {
    if (typeof (DeviceOrientationEvent as any).requestPermission === "function") {
      try {
        const permission = await (DeviceOrientationEvent as any).requestPermission()
        if (permission === "granted") {
          window.addEventListener("deviceorientation", handleDeviceOrientation, true)
          setCompassPermissionGranted(true)
        }
      } catch (err) {
        console.warn("Error requesting iOS orientation permission:", err)
      }
    }
  }

  // Handle manual compass rotation
  const handleManualRotate = (degrees: number) => {
    setManualRotation((prev) => (prev + degrees + 360) % 360)
  }

  // Add haptic feedback when pointing to Qibla
  const triggerHapticFeedback = () => {
    if (navigator.vibrate) {
      navigator.vibrate(200)
    }
  }

  useEffect(() => {
    // Get location on component mount
    getLocation()

    // Check if it's an iOS device
    const isIOSDevice =
      typeof window !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream

    setIsIOS(isIOSDevice)

    // Request device orientation permission
    requestOrientationPermission()

    return () => {
      window.removeEventListener("deviceorientation", handleDeviceOrientation, true)
    }
  }, [])

  // Trigger haptic feedback when pointing to Qibla
  useEffect(() => {
    if (isPointingToQibla()) {
      triggerHapticFeedback()
    }
  }, [deviceHeading, manualRotation])

  // Calculate if user is pointing toward Qibla
  const isPointingToQibla = () => {
    // Use debounced heading for smoother UI updates
    const currentHeading = debouncedHeading ?? deviceHeading

    // Check if we're in manual mode
    if (currentHeading === null || qiblaDirection === null) {
      // If using manual mode, check if manual rotation is close to Qibla direction
      if (qiblaDirection !== null) {
        const diff = Math.abs((manualRotation - qiblaDirection + 360) % 360)
        return diff < 10 || diff > 350 // Within 10 degrees
      }
      return false
    }

    // Check if device heading is close to Qibla direction
    const diff = Math.abs((currentHeading - qiblaDirection + 360) % 360)
    return diff < 10 || diff > 350 // Within 10 degrees
  }

  // Get the actual compass rotation angle with smooth transitions
  const getCompassRotation = () => {
    // If we have device heading and qibla direction
    if (deviceHeading !== null && qiblaDirection !== null) {
      // For the compass background (static part) with smooth rotation
      return getSmoothCompassRotation()
    }

    // If using manual mode
    return manualRotation
  }

  // Get the qibla indicator rotation
  const getQiblaIndicatorRotation = () => {
    if (qiblaDirection === null) {
      return 0
    }

    // Use debounced heading for smoother rotation
    const currentHeading = debouncedHeading ?? deviceHeading

    if (currentHeading !== null) {
      // When using device orientation, the qibla indicator should be fixed relative to the compass rotation
      return qiblaDirection - currentHeading
    }

    // In manual mode, the qibla indicator is fixed at the qibla direction
    return qiblaDirection - manualRotation
  }

  // Format distance nicely
  const formatDistance = (distance: number) => {
    if (distance < 1) {
      return `${Math.round(distance * 1000)} meters`
    }
    return `${distance.toFixed(1)} km`
  }



  useEffect(() => {
    localStorage.setItem("loading", "true");
    setIsLoading(true);

    const timer = setTimeout(() => {
      localStorage.setItem("loading", "false");
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // ===== RENDER UI =====
  return (
    <>
    {isLoading ? <div className='px-8 mt-4'>
      <Skeleton className="h-48 w-full mx-auto max-w-xl" />
      <Skeleton className="mt-3 h-screen rounded-lg w-full mx-auto max-w-xl" />
    </div> :
      (<div className="max-w-md mx-auto">
      <Tabs defaultValue="compass" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="compass" className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            <span>{t("qibla.tab1")} </span>
          </TabsTrigger>
          <TabsTrigger value="info" className="flex items-center gap-2">
            <Info className="h-4 w-4" />
            <span>{t("qibla.tab2")}</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="compass" className="mt-0">
          <Card className="shadow-lg border-emerald-100 dark:border-emerald-800 dark:bg-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-xl text-emerald-700 dark:text-emerald-400 flex items-center justify-center gap-2">
                <Compass className="h-5 w-5" />
               {t("qibla.title")}
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-6 w-6 rounded-full ml-1">
                      <Info className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{t("qibla.desc")}</DialogTitle>
                      <DialogDescription>
                        <ul className="list-disc pl-5 space-y-2 mt-4">
                          <li>{t("qibla.point1")}</li>
                          <li>{t("qibla.point2")}</li>
                          <li>{t("qibla.point3")}</li>
                          <li>{t("qibla.point4")}</li>
                          <li>{t("qibla.point5")}</li>
                          <li>{t("qibla.point6")}</li>
                        </ul>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardTitle>
              <CardDescription>
                {location ? (
                  <div className="flex flex-col items-center justify-center gap-1">
                    <span className="flex items-center justify-center gap-1 text-sm">
                      <MapPin className="h-4 w-4" />
                      {location.lat.toFixed(4)}°, {location.lng.toFixed(4)}°
                      {locationSource === "ip" && locationInfo && (
                        <span className="ml-1 text-xs opacity-75">
                          ({locationInfo.city}, {locationInfo.country})
                        </span>
                      )}
                    </span>
                    {qiblaDirection !== null && (
                      <span className="text-sm font-medium mt-1">
                      {t("qibla.qiblais")}  {qiblaDirection.toFixed(1)}° {t("qibla.fromnorth")} ({getDirectionName(qiblaDirection)})
                      </span>
                    )}
                    {distanceToKaaba !== null && (
                      <span className="text-xs text-gray-600 dark:text-gray-300 mt-1">
                       {t("qibla.fromnorth")} {t("qibla.distancetokaaba")}  {formatDistance(distanceToKaaba)}
                      </span>
                    )}
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {locationSource === "gps" ? "Using GPS location" : "Using approximate location"}
                    </span>
                  </div>
                ) : (
                  "Determining your location..."
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <Loader2 className="h-16 w-16 text-emerald-600 dark:text-emerald-500 animate-spin mb-4" />
                  <p className="text-gray-600 dark:text-gray-300"> {t("qibla.location")} </p>
                </div>
              ) : error ? (
                <Alert variant="destructive" className="mb-4">
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              ) : (
                <div className="relative">
                  {needsCalibration && !isCalibrating && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full text-sm animate-pulse">
                      <Button
                        variant="link"
                        className="p-0 h-auto text-amber-800 dark:text-amber-200"
                        onClick={startCalibration}
                      >
                         {t("qibla.calibration")}
                      </Button>
                    </div>
                  )}

                  {isCalibrating && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-10 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-3 py-1 rounded-full text-sm">
                       {t("qibla.instructions")}
                    </div>
                  )}

                  {/* Direction indicator at the top
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                    <ArrowUp className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                    <p className="text-xs text-center text-emerald-600 dark:text-emerald-400">Forward</p>
                  </div> */}

                  <div
                    ref={compassRef}
                    className={cn(
                      "w-72 h-72 rounded-full border-4 relative mx-auto transition-all duration-300",
                      isPointingToQibla()
                        ? "border-green-500 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
                        : "border-emerald-200 dark:border-emerald-700",
                    )}
                  >
                    {/* Rotating compass background */}
                    <div
                      className="absolute inset-0 rounded-full bg-white dark:bg-gray-800 overflow-hidden transition-all duration-500 ease-out will-change-transform"
                      style={{ transform: `rotate(${getCompassRotation()}deg)` }}
                    >
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-0.5 bg-gray-200 dark:bg-gray-600"></div>
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-0.5 bg-gray-200 dark:bg-gray-600"></div>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-0.5 bg-gray-200 dark:bg-gray-600"></div>

                      {/* Compass markings */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 text-sm font-bold"> {t("qibla.N")}</div>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-bold"> {t("qibla.S")}</div>
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 text-sm font-bold">  {t("qibla.W")}</div>
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 text-sm font-bold">  {t("qibla.E")}</div>

                      {/* Degree markings */}
                      {Array.from({ length: 72 }).map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "absolute w-0.5 bg-gray-300 dark:bg-gray-600 origin-bottom",
                            i % 9 === 0 ? "h-3" : "h-1.5",
                          )}
                          style={{
                            top: 0,
                            left: "50%",
                            transform: `translateX(-50%) rotate(${i * 5}deg)`,
                            transformOrigin: "bottom center",
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Fixed compass needle */}
                    <div className="absolute inset-0 z-10">
                      {/* North needle */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-1/2 w-1.5 bg-gradient-to-t from-red-500 to-red-600 rounded-t-full"></div>

                      {/* South needle */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-1.5 bg-gradient-to-b from-gray-400 to-gray-500 rounded-b-full"></div>
                    </div>

                    {/* Center pivot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 z-20 shadow-md"></div>

                    {/* Qibla indicator - rotates based on qibla direction relative to device heading */}
                    <div
                      className="absolute inset-0 transition-all duration-500 ease-out will-change-transform z-15"
                      style={{ transform: `rotate(${getQiblaIndicatorRotation()}deg)` }}
                    >
                      <div className="absolute top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center shadow-md">
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        </div>
                        <div className="text-xs font-bold mt-1 bg-emerald-600 text-white px-2 py-0.5 rounded-full shadow-sm">
                        {t("qibla.qibla1")}
                        </div>
                      </div>
                    </div>
                  </div>

                  {deviceHeading !== null && (
                    <div className="mt-4 text-center">
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                      {t("qibla.devicepoint")} {deviceHeading.toFixed(1)}° ({getDirectionName(deviceHeading)})
                      </p>
                      {isPointingToQibla() && (
                        <p className="text-green-600 dark:text-green-400 font-medium mt-2 animate-pulse">
                           {t("qibla.qibladirection")}
                        </p>
                      )}
                    </div>
                  )}

                  {!deviceHeading && qiblaDirection !== null && (
                    <div className="mt-4 text-center">
                      <p className="text-amber-600 dark:text-amber-400 text-sm mb-2">
                        {t("qibla.compassnot")}
                      </p>

                      <div className="flex justify-center gap-4 mt-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleManualRotate(-15)}
                          className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
                        >
                          ↺ 15°
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleManualRotate(15)}
                          className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
                        >
                          15° ↻
                        </Button>
                      </div>

                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                      {t("qibla.currenthead")} {manualRotation.toFixed(1)}° ({getDirectionName(manualRotation)})
                      </p>
                    </div>
                  )}

                  {isIOS && !compassPermissionGranted && (
                    <div className="mt-4 text-center">
                      <p className="text-amber-600 dark:text-amber-400 text-sm mb-2">
                         {t("qibla.iospermission")}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={requestIOSPermissions}
                        className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
                      >
                         {t("qibla.enablecompass")}
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center gap-3">
              <Button
                onClick={getLocation}
                className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600"
                disabled={loading}
              >
                <RotateCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                 {t("qibla.button1")}
              </Button>

              <Button
                onClick={startCalibration}
                variant="outline"
                className="border-emerald-200 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
                disabled={isCalibrating || !deviceHeading}
              >
                <Compass className="mr-2 h-4 w-4" />
                 {t("qibla.button2")}
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            <p> {t("qibla.tip1")}</p>
            <p className="mt-2">
              <span className="font-medium">{t("qibla.tip")}</span> {t("qibla.tip2")} 
            </p>
          </div>
        </TabsContent>

        <TabsContent value="info" className="mt-0">
          <Card className="shadow-lg border-emerald-100 dark:border-emerald-800 dark:bg-gray-800">
            <CardHeader>
              <CardTitle className="text-xl text-emerald-700 dark:text-emerald-400"> {t("qibla.aboutqibla")} </CardTitle>
              <CardDescription> {t("qibla.aboutqibladesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2"> {t("qibla.question1")} </h3>
                <p className="text-gray-600 dark:text-gray-300">
                {t("qibla.answer1")}
                </p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2"> {t("qibla.question2")} </h3>
                <p className="text-gray-600 dark:text-gray-300">
                {t("qibla.answer2")}
                  
                </p>
              </div>

              {location && distanceToKaaba && (
                <div className="bg-emerald-50 dark:bg-emerald-900/30 p-4 rounded-lg">
                  <h3 className="font-medium text-lg mb-2 flex items-center gap-2">
                    <MapIcon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                    {t("qibla.distancetomecca")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                  {t("qibla.distanceline1")} {" "}
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      {formatDistance(distanceToKaaba)}
                    </span>{" "}
                    {t("qibla.distanceline2")}
                  </p>
                  {locationInfo && (
                    <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                     {t("qibla.locationbased")} {locationInfo.city}, {locationInfo.country}
                    </p>
                  )}
                </div>
              )}

              <div>
                <h3 className="font-medium text-lg mb-2"> {t("qibla.readinghead")}</h3>
                <ul className="list-disc pl-5 space-y-1 text-gray-600 dark:text-gray-300">
                  <li>{t("qibla.reading1")}</li>
                  <li>{t("qibla.reading2")}</li>
                  <li> {t("qibla.reading3")}</li>
                  <li>{t("qibla.reading4")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>)}
</>
)}

// Helper function to get cardinal direction name
function getDirectionName(degrees: number): string {
  const directions = [
    "North",
    "North-Northeast",
    "Northeast",
    "East-Northeast",
    "East",
    "East-Southeast",
    "Southeast",
    "South-Southeast",
    "South",
    "South-Southwest",
    "Southwest",
    "West-Southwest",
    "West",
    "West-Northwest",
    "Northwest",
    "North-Northwest",
    "North",
  ]

  const index = Math.round(degrees / 22.5)
  return directions[index % 16]
}
